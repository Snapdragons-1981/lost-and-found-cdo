"use client";

import React from "react";
import Link from "next/link";
import { 
  FileText, 
  Users, 
  BarChart3, 
  Settings, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  MessageSquare,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AdminPage() {
  const stats = [
    { label: "Total Reports", value: "1,234", change: "+12%", icon: FileText, color: "text-blue-500" },
    { label: "Active Users", value: "567", change: "+8%", icon: Users, color: "text-green-500" },
    { label: "Resolved", value: "211", change: "+15%", icon: CheckCircle, color: "text-purple-500" },
    { label: "Pending Review", value: "23", change: "-5%", icon: Clock, color: "text-yellow-500" },
  ];

  const recentActivity = [
    { id: "1", type: "report", title: "New lost report submitted", user: "Maria C.", time: "5 min ago" },
    { id: "2", type: "match", title: "Match found between reports", user: "System", time: "15 min ago" },
    { id: "3", type: "message", title: "User reported inappropriate content", user: "Admin", time: "1 hour ago" },
    { id: "4", type: "resolved", title: "Report marked as resolved", user: "Juan R.", time: "2 hours ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Shield className="h-6 w-6 text-green-600" />
                Admin Dashboard
              </h1>
              <p className="text-gray-600">Manage your Lost & Found CDO platform</p>
            </div>
            <div className="flex gap-2">
              <Link href="/admin/reports">
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Reports
                </Button>
              </Link>
              <Link href="/admin/users">
                <Button variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Users
                </Button>
              </Link>
              <Link href="/admin/analytics">
                <Button>
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Analytics
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Activity</CardTitle>
                  <Button variant="ghost" size="sm">View All</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50"
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activity.type === 'report' ? 'bg-blue-100 text-blue-600' :
                        activity.type === 'match' ? 'bg-green-100 text-green-600' :
                        activity.type === 'message' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        {activity.type === 'report' ? <FileText className="h-5 w-5" /> :
                         activity.type === 'match' ? <TrendingUp className="h-5 w-5" /> :
                         activity.type === 'message' ? <MessageSquare className="h-5 w-5" /> :
                         <CheckCircle className="h-5 w-5" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{activity.title}</h4>
                        <p className="text-sm text-gray-500">{activity.user} · {activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link href="/admin/reports" className="block">
                    <div className="p-4 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-blue-500" />
                        <span className="font-medium text-gray-900">Manage Reports</span>
                      </div>
                    </div>
                  </Link>
                  <Link href="/admin/users" className="block">
                    <div className="p-4 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-green-500" />
                        <span className="font-medium text-gray-900">Manage Users</span>
                      </div>
                    </div>
                  </Link>
                  <Link href="/admin/analytics" className="block">
                    <div className="p-4 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <BarChart3 className="h-5 w-5 text-purple-500" />
                        <span className="font-medium text-gray-900">View Analytics</span>
                      </div>
                    </div>
                  </Link>
                  <Link href="/admin/settings" className="block">
                    <div className="p-4 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <Settings className="h-5 w-5 text-gray-500" />
                        <span className="font-medium text-gray-900">Settings</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Flagged Content */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Flagged Content</CardTitle>
                  <Badge variant="destructive">3</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-red-50 border border-red-200"
                    >
                      <p className="text-sm text-gray-900">
                        Report flagged for review
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {["Inappropriate content", "Spam", "Duplicate"][i - 1]}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
