"use client";

import React, { useState } from "react";
import { MapPin, Filter, Layers, Search, ZoomIn, ZoomOut, Locate } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MapPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [mapLayer, setMapLayer] = useState<"all" | "lost" | "found">("all");

  const markers = [
    {
      id: "1",
      type: "LOST" as const,
      title: "Black Leather Wallet",
      category: "Wallet",
      barangay: "Lapasan",
      date: "2h ago",
      lat: 8.4542,
      lng: 124.6300,
    },
    {
      id: "2",
      type: "FOUND" as const,
      title: "iPhone 14 Pro",
      category: "Phone",
      barangay: "Nazareth",
      date: "5h ago",
      lat: 8.4600,
      lng: 124.6350,
    },
    {
      id: "3",
      type: "LOST" as const,
      title: "House Keys",
      category: "Keys",
      barangay: "Bulua",
      date: "1d ago",
      lat: 8.4480,
      lng: 124.6250,
    },
    {
      id: "4",
      type: "FOUND" as const,
      title: "Blue Backpack",
      category: "Bag",
      barangay: "Carmen",
      date: "2d ago",
      lat: 8.4650,
      lng: 124.6400,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Map Header */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Map View</h1>
              <p className="text-sm text-gray-600">
                {markers.length} reports in Cagayan de Oro
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={showFilters ? "default" : "outline"}
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="absolute inset-0 pt-20">
        <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Interactive Map
            </h2>
            <p className="text-gray-600 mb-4">
              Google Maps integration will be displayed here
            </p>
            <p className="text-sm text-gray-500">
              Showing {markers.length} reports in Cagayan de Oro
            </p>
          </div>
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute right-4 top-24 z-20 flex flex-col gap-2">
        <Button variant="outline" size="icon" className="bg-white">
          <ZoomIn className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" className="bg-white">
          <ZoomOut className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" className="bg-white">
          <Locate className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" className="bg-white">
          <Layers className="h-5 w-5" />
        </Button>
      </div>

      {/* Layer Toggle */}
      <div className="absolute left-4 top-24 z-20 bg-white rounded-xl shadow-lg p-2">
        <div className="flex gap-1">
          <button
            onClick={() => setMapLayer("all")}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              mapLayer === "all"
                ? "bg-green-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setMapLayer("lost")}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              mapLayer === "lost"
                ? "bg-red-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            Lost
          </button>
          <button
            onClick={() => setMapLayer("found")}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              mapLayer === "found"
                ? "bg-green-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            Found
          </button>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="absolute left-4 top-44 z-20 w-72 bg-white rounded-xl shadow-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-4">Filters</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Category</label>
              <select className="w-full h-10 mt-1 rounded-lg border border-gray-300 bg-white text-sm">
                <option>All Categories</option>
                <option>Wallet</option>
                <option>Phone</option>
                <option>ID Card</option>
                <option>Bag</option>
                <option>Laptop</option>
                <option>Keys</option>
                <option>Pet</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Barangay</label>
              <select className="w-full h-10 mt-1 rounded-lg border border-gray-300 bg-white text-sm">
                <option>All Barangays</option>
                <option>Lapasan</option>
                <option>Nazareth</option>
                <option>Bulua</option>
                <option>Carmen</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Date Range</label>
              <div className="flex gap-2 mt-1">
                <input
                  type="date"
                  className="flex-1 h-10 rounded-lg border border-gray-300 text-sm px-2"
                />
                <input
                  type="date"
                  className="flex-1 h-10 rounded-lg border border-gray-300 text-sm px-2"
                />
              </div>
            </div>
            <Button className="w-full">Apply Filters</Button>
          </div>
        </div>
      )}

      {/* Report List (Mobile) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-white rounded-t-2xl shadow-lg max-h-64 overflow-auto">
        <div className="p-4">
          <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
          <h3 className="font-semibold text-gray-900 mb-4">Nearby Reports</h3>
          <div className="space-y-3">
            {markers.map((marker) => (
              <div
                key={marker.id}
                className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-green-500 cursor-pointer"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    marker.type === "LOST"
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 text-sm">
                    {marker.title}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {marker.barangay} · {marker.date}
                  </p>
                </div>
                <Badge variant={marker.type === "FOUND" ? "found" : "lost"}>
                  {marker.type}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
