import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

// GET /api/admin - Get admin dashboard stats
export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Check if user is admin
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user || user.role !== "ADMIN") {
      return NextResponse.json(
        { success: false, error: "Forbidden" },
        { status: 403 }
      );
    }

    // Get stats
    const now = new Date();
    const thisWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    const [
      totalReports,
      lostReports,
      foundReports,
      resolvedReports,
      totalUsers,
      reportsThisWeek,
      reportsThisMonth,
      recentReports,
      topBarangays,
    ] = await Promise.all([
      prisma.report.count(),
      prisma.report.count({ where: { type: "LOST" } }),
      prisma.report.count({ where: { type: "FOUND" } }),
      prisma.report.count({ where: { status: "RESOLVED" } }),
      prisma.user.count(),
      prisma.report.count({ where: { createdAt: { gte: thisWeek } } }),
      prisma.report.count({ where: { createdAt: { gte: thisMonth } } }),
      prisma.report.findMany({
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
        orderBy: { createdAt: "desc" },
        take: 10,
      }),
      prisma.report.groupBy({
        by: ["barangay"],
        _count: { id: true },
        where: { barangay: { not: null } },
        orderBy: { _count: { id: "desc" } },
        take: 10,
      }),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        totalReports,
        lostReports,
        foundReports,
        resolvedReports,
        matchRate: lostReports > 0 ? (resolvedReports / lostReports) * 100 : 0,
        totalUsers,
        reportsThisWeek,
        reportsThisMonth,
        recentReports,
        topBarangays: topBarangays.map((b) => ({
          name: b.barangay || "Unknown",
          count: b._count.id,
        })),
      },
    });
  } catch (error) {
    console.error("Error fetching admin stats:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch admin stats" },
      { status: 500 }
    );
  }
}
