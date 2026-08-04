"use client";

import React from "react";
import Link from "next/link";
import { 
  Plus, 
  FileText, 
  MessageSquare, 
  Bookmark, 
  Settings, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  const stats = [
    { label: "My Reports", value: "12", icon: FileText, color: "text-blue-500" },
    { label: "Active", value: "8", icon: Clock, color: "text-yellow-500" },
    { label: "Resolved", value: "4", icon: CheckCircle, color: "text-green-500" },
    { label: "Messages", value: "5", icon: MessageSquare, color: "text-purple-500" },
  ];

  const recentReports = [
    {
      id: "1",
      type: "LOST",
      title: "Black Leather Wallet",
      status: "OPEN",
      date: "2 hours ago",
      barangay: "Lapasan",
    },
    {
      id: "2",
      type: "FOUND",
      title: "iPhone 14 Pro",
      status: "MATCHED",
      date: "1 day ago",
      barangay: "Nazareth",
    },
    {
      id: "3",
      type: "LOST",
      title: "House Keys",
      status: "RESOLVED",
      date: "3 days ago",
      barangay: "Bulua",
    },
  ];

  const notifications = [
    {
      id: "1",
      type: "match",
      title: "Possible match found!",
      message: "A found iPhone matches your lost report",
      time: "1 hour ago",
    },
    {
      id: "2",
      type: "message",
      title: "New message",
      message: "Juan R. sent you a message",
      time: "3 hours ago",
    },
    {
      id: "3",
      type: "resolved",
      title: "Report resolved",
      message: "Your lost wallet report has been resolved",
      time: "2 days ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back, User!</p>
            </div>
            <div className="flex gap-2">
              <Link href="/lost/new">
                <Button variant="lost">
                  <Plus className="h-4 w-4 mr-2" />
                  Report Lost
                </Button>
              </Link>
              <Link href="/found/new">
                <Button variant="found">
                  <Plus className="h-4 w-4 mr-2" />
                  Report Found
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <Card key={stat.label}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                      <div>
                        <div className="text-2xl font-bold text-gray-900">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Reports */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>My Recent Reports</CardTitle>
                  <Link href="/dashboard/reports">
                    <Button variant="ghost" size="sm">
                      View All
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report) => (
                    <Link
                      key={report.id}
                      href={`/reports/${report.id}`}
                      className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            report.type === "LOST"
                              ? "bg-red-100 text-red-600"
                              : "bg-green-100 text-green-600"
                          }`}
                        >
                          {report.type === "LOST" ? (
                            <AlertCircle className="h-5 w-5" />
                          ) : (
                            <CheckCircle className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {report.title}
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <MapPin className="h-3 w-3" />
                            {report.barangay}
                            <span>·</span>
                            {report.date}
                          </div>
                        </div>
                      </div>
                      <Badge
                        variant={
                          report.status === "OPEN"
                            ? "default"
                            : report.status === "MATCHED"
                            ? "matched"
                            : "secondary"
                        }
                      >
                        {report.status}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link href="/lost/new">
                    <div className="p-4 rounded-xl border-2 border-red-200 hover:border-red-500 hover:bg-red-50 transition-colors text-center cursor-pointer">
                      <AlertCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
                      <span className="text-sm font-medium text-gray-900">
                        Report Lost
                      </span>
                    </div>
                  </Link>
                  <Link href="/found/new">
                    <div className="p-4 rounded-xl border-2 border-green-200 hover:border-green-500 hover:bg-green-50 transition-colors text-center cursor-pointer">
                      <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <span className="text-sm font-medium text-gray-900">
                        Report Found
                      </span>
                    </div>
                  </Link>
                  <Link href="/search">
                    <div className="p-4 rounded-xl border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 transition-colors text-center cursor-pointer">
                      <TrendingUp className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                      <span className="text-sm font-medium text-gray-900">
                        Search Items
                      </span>
                    </div>
                  </Link>
                  <Link href="/map">
                    <div className="p-4 rounded-xl border-2 border-purple-200 hover:border-purple-500 hover:bg-purple-50 transition-colors text-center cursor-pointer">
                      <MapPin className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                      <span className="text-sm font-medium text-gray-900">
                        View Map
                      </span>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Notifications */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Notifications</CardTitle>
                  <Badge variant="secondary">3 new</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            notification.type === "match"
                              ? "bg-yellow-100 text-yellow-600"
                              : notification.type === "message"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-green-100 text-green-600"
                          }`}
                        >
                          {notification.type === "match" ? (
                            <TrendingUp className="h-4 w-4" />
                          ) : notification.type === "message" ? (
                            <MessageSquare className="h-4 w-4" />
                          ) : (
                            <CheckCircle className="h-4 w-4" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm">
                            {notification.title}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Bookmarks */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Saved Items</CardTitle>
                  <Link href="/dashboard/bookmarks">
                    <Button variant="ghost" size="sm">
                      View All
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50"
                    >
                      <Bookmark className="h-4 w-4 text-gray-400" />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900">
                          {["iPhone 14 Pro", "Blue Backpack", "Gold Necklace"][i - 1]}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {["Found", "Found", "Lost"][i - 1]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Settings */}
            <Card>
              <CardContent className="pt-6">
                <Link
                  href="/dashboard/settings"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <Settings className="h-5 w-5 text-gray-500" />
                  <span className="font-medium text-gray-900">
                    Account Settings
                  </span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
