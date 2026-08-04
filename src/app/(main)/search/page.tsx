"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Filter, MapPin, Clock, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CATEGORIES, COLORS, BARANGAYS_CDO } from "@/constants";

export default function SearchPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedBarangay, setSelectedBarangay] = useState<string>("");

  const results = [
    {
      id: "1",
      type: "LOST",
      title: "Black Leather Wallet",
      category: "Wallet",
      description: "Lost near University of Mindanao. Contains IDs and credit cards.",
      barangay: "Lapasan",
      date: "2h ago",
      image: null,
    },
    {
      id: "2",
      type: "FOUND",
      title: "iPhone 14 Pro Max",
      category: "Phone",
      description: "Found near Centrio Mall. Has a blue case with stickers.",
      barangay: "Nazareth",
      date: "5h ago",
      image: null,
    },
    {
      id: "3",
      type: "LOST",
      title: "House Keys",
      category: "Keys",
      description: "Lost in a taxi from airport to hotel.",
      barangay: "Bulua",
      date: "1d ago",
      image: null,
    },
    {
      id: "4",
      type: "FOUND",
      title: "Blue Backpack",
      category: "Bag",
      description: "Found at Carmen Public Market. Contains school documents.",
      barangay: "Carmen",
      date: "2d ago",
      image: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Search Items</h1>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for lost or found items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-24 h-14 text-lg"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-5 w-5" />
            </Button>
          </div>

          {/* Filter Toggle */}
          <div className="mt-4 flex items-center gap-2">
            <Button
              variant={showFilters ? "default" : "outline"}
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>

            {/* Quick Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => setSelectedType("")}
                className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedType === ""
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedType("LOST")}
                className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedType === "LOST"
                    ? "bg-red-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Lost
              </button>
              <button
                onClick={() => setSelectedType("FOUND")}
                className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedType === "FOUND"
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Found
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Advanced Filters</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowFilters(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full h-10 rounded-lg border border-gray-300 bg-white text-sm"
                >
                  <option value="">All Categories</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Barangay</label>
                <select
                  value={selectedBarangay}
                  onChange={(e) => setSelectedBarangay(e.target.value)}
                  className="w-full h-10 rounded-lg border border-gray-300 bg-white text-sm"
                >
                  <option value="">All Barangays</option>
                  {BARANGAYS_CDO.map((brgy) => (
                    <option key={brgy} value={brgy}>
                      {brgy}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Color</label>
                <select className="w-full h-10 rounded-lg border border-gray-300 bg-white text-sm">
                  <option value="">All Colors</option>
                  {COLORS.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Date Range</label>
                <div className="flex gap-2">
                  <input
                    type="date"
                    className="flex-1 h-10 rounded-lg border border-gray-300 bg-white text-sm px-2"
                  />
                  <input
                    type="date"
                    className="flex-1 h-10 rounded-lg border border-gray-300 bg-white text-sm px-2"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <Button variant="outline" size="sm">
                Clear Filters
              </Button>
              <Button size="sm">Apply Filters</Button>
            </div>
          </div>
        </div>
      )}

      {/* Search Results */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">{results.length}</span> results
            found
          </p>
          <select className="h-10 px-4 rounded-lg border border-gray-300 bg-white text-sm">
            <option>Newest First</option>
            <option>Oldest First</option>
            <option>Nearest</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result) => (
            <Link key={result.id} href={`/reports/${result.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                <div className="aspect-video bg-gray-200 relative">
                  <Badge
                    variant={result.type === "FOUND" ? "found" : "lost"}
                    className="absolute top-3 left-3"
                  >
                    {result.type === "FOUND" ? "Found" : "Lost"}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-gray-900 line-clamp-1">
                      {result.title}
                    </h3>
                    <Badge variant="secondary" className="text-xs shrink-0">
                      {result.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    {result.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {result.barangay}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {result.date}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {results.length === 0 && (
          <div className="text-center py-16">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No results found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filters
            </p>
            <Button variant="outline">Clear Filters</Button>
          </div>
        )}

        {/* Pagination */}
        {results.length > 0 && (
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center gap-2">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="default">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
