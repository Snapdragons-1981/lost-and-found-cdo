"use client";

import React from "react";
import Link from "next/link";
import { AlertCircle, MapPin, Clock, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function LostItemsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <AlertCircle className="h-8 w-8 text-red-500" />
                Lost Items
              </h1>
              <p className="text-gray-600 mt-2">
                Browse reported lost items or post your own report
              </p>
            </div>
            <Link href="/lost/new">
              <Button size="lg" variant="lost">
                Report Lost Item
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-3">
            <select className="h-10 px-4 rounded-lg border border-gray-300 bg-white text-sm">
              <option>All Categories</option>
              <option>Wallet</option>
              <option>Phone</option>
              <option>ID Card</option>
              <option>Bag</option>
              <option>Laptop</option>
              <option>Keys</option>
              <option>Pet</option>
              <option>Documents</option>
              <option>Jewelry</option>
              <option>Vehicle</option>
              <option>Others</option>
            </select>
            <select className="h-10 px-4 rounded-lg border border-gray-300 bg-white text-sm">
              <option>All Barangays</option>
              <option>Lapasan</option>
              <option>Nazareth</option>
              <option>Bulua</option>
              <option>Agusan</option>
              <option>Carmen</option>
              <option>Macabalan</option>
            </select>
            <select className="h-10 px-4 rounded-lg border border-gray-300 bg-white text-sm">
              <option>All Time</option>
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search lost items..."
                className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-300 text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Report List */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-video bg-gray-200 relative">
                <Badge variant="lost" className="absolute top-3 left-3">
                  Lost
                </Badge>
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900 line-clamp-1">
                    {["Black Leather Wallet", "iPhone 14 Pro", "House Keys", "Blue Backpack", "Gold Necklace", "Laptop"][i - 1]}
                  </h3>
                  <Badge variant="secondary" className="text-xs shrink-0">
                    {["Wallet", "Phone", "Keys", "Bag", "Jewelry", "Laptop"][i - 1]}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {[
                    "Lost near University of Mindanao. Contains IDs, credit cards, and cash.",
                    "Lost at Centrio Mall parking lot. Has a black case.",
                    "Lost in a taxi from airport to hotel. Important keys inside.",
                    "Lost at Carmen Public Market. Contains school documents.",
                    "Lost at a wedding reception in Limketkai. Sentimental value.",
                    "Lost at a coffee shop in Divisoria. Has stickers on lid.",
                  ][i - 1]}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {["Lapasan", "Nazareth", "Bulua", "Carmen", "Agusan", "Macabalan"][i - 1]}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {["2h ago", "5h ago", "1d ago", "2d ago", "3d ago", "1w ago"][i - 1]}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <nav className="flex items-center gap-2">
            <Button variant="outline" disabled>Previous</Button>
            <Button variant="default">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </nav>
        </div>
      </div>
    </div>
  );
}
