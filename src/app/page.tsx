"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Search, MapPin, Clock, CheckCircle, AlertCircle, ArrowRight, Shield, Smartphone, Globe, Users, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Stats {
  totalReports: number;
  lostReports: number;
  foundReports: number;
  resolvedReports: number;
  matchRate: number;
}

interface Report {
  id: string;
  title: string;
  description: string;
  type: string;
  category: string;
  barangay?: string;
  createdAt: string;
  images: { url: string }[];
  user: {
    firstName: string;
    lastName: string;
    avatar?: string;
  };
}

export default function HomePage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [latestReports, setLatestReports] = useState<Report[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [statsRes, reportsRes] = await Promise.all([
          fetch("/api/stats"),
          fetch("/api/reports?limit=6"),
        ]);

        if (statsRes.ok) {
          const statsData = await statsRes.json();
          setStats(statsData.data);
        }

        if (reportsRes.ok) {
          const reportsData = await reportsRes.json();
          setLatestReports(reportsData.data.items);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              Community-Powered Lost & Found
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              Lost & Found <span className="text-yellow-300">CDO</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-green-100 mb-10 text-balance max-w-2xl mx-auto">
              Helping Cagayan de Oro reunite people with what matters.
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/lost/new">
                <Button size="xl" className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white shadow-xl shadow-red-500/30 hover:shadow-red-500/50 transition-all">
                  <AlertCircle className="h-6 w-6" />
                  I Lost Something
                </Button>
              </Link>
              <Link href="/found/new">
                <Button size="xl" className="w-full sm:w-auto bg-white text-green-600 hover:bg-green-50 shadow-xl shadow-white/20 transition-all">
                  <CheckCircle className="h-6 w-6" />
                  I Found Something
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-green-100">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Safe & Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>500+ Community Members</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>211+ Items Reunited</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white border-b border-gray-100 -mt-6 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for lost or found items..."
                className="w-full h-16 pl-14 pr-32 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none text-lg shadow-lg transition-all"
              />
              <Link href="/search" className="absolute right-3 top-1/2 -translate-y-1/2">
                <Button size="lg" className="shadow-lg">
                  Search
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-8 pb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-7 w-7 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">
                  {isLoading ? "..." : stats?.totalReports || 0}
                </div>
                <div className="text-gray-500 font-medium">Total Reports</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-8 pb-6">
                <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="h-7 w-7 text-red-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">
                  {isLoading ? "..." : stats?.lostReports || 0}
                </div>
                <div className="text-gray-500 font-medium">Lost Items</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-8 pb-6">
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-7 w-7 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">
                  {isLoading ? "..." : stats?.foundReports || 0}
                </div>
                <div className="text-gray-500 font-medium">Found Items</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-8 pb-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-7 w-7 text-purple-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">
                  {isLoading ? "..." : stats?.resolvedReports || 0}
                </div>
                <div className="text-gray-500 font-medium">Reunited</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Three Simple Steps
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Reuniting people with their belongings has never been easier
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-red-500/25 group-hover:shadow-red-500/40 transition-all group-hover:scale-110">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Report</h3>
              <p className="text-gray-600 leading-relaxed">
                Lost or found something? Create a report with photos and details in seconds.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-all group-hover:scale-110">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Match</h3>
              <p className="text-gray-600 leading-relaxed">
                Our system automatically finds matching lost and found reports.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/25 group-hover:shadow-green-500/40 transition-all group-hover:scale-110">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reunite</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect safely and return the item to its rightful owner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Reports */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <Badge variant="outline" className="mb-4">Recent Activity</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Latest Reports
              </h2>
            </div>
            <Link href="/search">
              <Button variant="outline" className="hidden sm:flex">
                View All
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="aspect-video bg-gray-200 animate-pulse" />
                  <CardContent className="p-5">
                    <div className="h-4 bg-gray-200 rounded animate-pulse mb-3" />
                    <div className="h-3 bg-gray-200 rounded animate-pulse w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : latestReports.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestReports.map((report) => (
                <Link key={report.id} href={`/reports/${report.id}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group h-full">
                    <div className="aspect-video bg-gray-100 relative overflow-hidden">
                      {report.images[0] ? (
                        <img
                          src={report.images[0].url}
                          alt={report.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                          <Search className="h-12 w-12 text-gray-300" />
                        </div>
                      )}
                      <Badge
                        variant={report.type === "FOUND" ? "found" : "lost"}
                        className="absolute top-3 left-3"
                      >
                        {report.type === "FOUND" ? "Found" : "Lost"}
                      </Badge>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-gray-900 line-clamp-1 group-hover:text-green-600 transition-colors">
                          {report.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                        {report.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {report.barangay || "CDO"}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {new Date(report.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No reports yet. Be the first to post!</p>
            </div>
          )}

          <div className="mt-8 text-center sm:hidden">
            <Link href="/search">
              <Button variant="outline" className="w-full">
                View All Reports
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Everyone
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Designed with simplicity and accessibility in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Mobile-First",
                description: "Works perfectly on any device, from smartphones to desktops.",
                color: "blue",
              },
              {
                icon: Shield,
                title: "Privacy Protected",
                description: "Your personal info stays hidden until you choose to share it.",
                color: "green",
              },
              {
                icon: Globe,
                title: "Multi-Language",
                description: "Available in English, Cebuano, and Filipino.",
                color: "purple",
              },
              {
                icon: Users,
                title: "Community Driven",
                description: "Built by Kagay-anons, for Kagay-anons.",
                color: "orange",
              },
              {
                icon: Heart,
                title: "Free Forever",
                description: "No fees, no subscriptions. Just helping each other.",
                color: "red",
              },
              {
                icon: MapPin,
                title: "Location-Based",
                description: "Find items near you with our interactive map.",
                color: "teal",
              },
            ].map((feature) => (
              <Card key={feature.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className={`w-14 h-14 rounded-2xl bg-${feature.color}-100 flex items-center justify-center mb-5`}>
                    <feature.icon className={`h-7 w-7 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="bg-gradient-to-br from-red-500 to-red-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Emergency? Missing Person?
            </h2>
            <p className="text-red-100 mb-8 text-lg">
              For missing children, senior citizens, or emergencies, report immediately
              or contact your local barangay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/lost/new?emergency=child">
                <Button size="lg" className="w-full sm:w-auto bg-white text-red-600 hover:bg-red-50">
                  Report Missing Child
                </Button>
              </Link>
              <Link href="/lost/new?emergency=senior">
                <Button size="lg" className="w-full sm:w-auto bg-white/20 text-white hover:bg-white/30 border border-white/30">
                  Report Missing Senior
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
            </div>
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Help Build Our Community
              </h2>
              <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg">
                Join thousands of Kagay-anons helping each other. Together, we can make
                Cagayan de Oro a better place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/sign-up">
                  <Button size="xl" className="w-full sm:w-auto bg-white text-green-600 hover:bg-green-50 shadow-xl">
                    Get Started Free
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="xl" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
