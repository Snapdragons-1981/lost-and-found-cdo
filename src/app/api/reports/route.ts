import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

// GET /api/reports - Get all reports with filters
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const type = searchParams.get("type") as "LOST" | "FOUND" | null;
    const status = searchParams.get("status");
    const category = searchParams.get("category");
    const barangay = searchParams.get("barangay");
    const color = searchParams.get("color");
    const brand = searchParams.get("brand");
    const search = searchParams.get("search");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "12");

    const where: Record<string, unknown> = {};

    if (type) where.type = type;
    if (status) where.status = status;
    if (category) where.category = category;
    if (barangay) where.barangay = barangay;
    if (color) where.color = color;
    if (brand) where.brand = { contains: brand, mode: "insensitive" };
    
    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
        { brand: { contains: search, mode: "insensitive" } },
        { locationName: { contains: search, mode: "insensitive" } },
      ];
    }

    const [reports, total] = await Promise.all([
      prisma.report.findMany({
        where,
        include: {
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              avatar: true,
              isVerified: true,
            },
          },
          images: true,
          _count: {
            select: {
              comments: true,
              bookmarks: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.report.count({ where }),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        items: reports,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching reports:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch reports" },
      { status: 500 }
    );
  }
}

// POST /api/reports - Create a new report
export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    
    // Get user from database
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const report = await prisma.report.create({
      data: {
        title: body.title,
        description: body.description,
        type: body.type,
        userId: user.id,
        category: body.category,
        color: body.color,
        brand: body.brand,
        uniqueMarks: body.uniqueMarks,
        serialNumber: body.serialNumber,
        condition: body.condition,
        estimatedValue: body.estimatedValue ? parseFloat(body.estimatedValue) : null,
        locationName: body.locationName,
        barangay: body.barangay,
        streetAddress: body.streetAddress,
        landmark: body.landmark,
        latitude: body.latitude,
        longitude: body.longitude,
        dateLost: body.dateLost ? new Date(body.dateLost) : null,
        dateFound: body.dateFound ? new Date(body.dateFound) : null,
        timeDescription: body.timeDescription,
        keptBy: body.keptBy,
        keptByDetails: body.keptByDetails,
        contactPhone: body.contactPhone,
        contactMessenger: body.contactMessenger,
        contactEmail: body.contactEmail,
        isEmergency: body.isEmergency || false,
        emergencyType: body.emergencyType,
      },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            avatar: true,
          },
        },
        images: true,
      },
    });

    // Create audit log
    await prisma.auditLog.create({
      data: {
        userId: user.id,
        action: "CREATE",
        entity: "Report",
        entityId: report.id,
        details: { type: report.type, category: report.category },
      },
    });

    return NextResponse.json({
      success: true,
      data: report,
    });
  } catch (error) {
    console.error("Error creating report:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create report" },
      { status: 500 }
    );
  }
}
