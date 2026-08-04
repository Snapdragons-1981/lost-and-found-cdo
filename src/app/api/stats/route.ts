import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET /api/stats - Get public statistics
export async function GET() {
  try {
    const [
      totalReports,
      lostReports,
      foundReports,
      resolvedReports,
    ] = await Promise.all([
      prisma.report.count(),
      prisma.report.count({ where: { type: "LOST" } }),
      prisma.report.count({ where: { type: "FOUND" } }),
      prisma.report.count({ where: { status: "RESOLVED" } }),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        totalReports,
        lostReports,
        foundReports,
        resolvedReports,
        matchRate: lostReports > 0 ? Math.round((resolvedReports / lostReports) * 100) : 0,
      },
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
