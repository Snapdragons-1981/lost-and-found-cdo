"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle, MapPin, Clock, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function StoriesPage() {
  const stories = [
    {
      id: "1",
      title: "Wallet Returned After 3 Days",
      description: "I lost my wallet at the bus terminal. Someone found it and reported it here. All my IDs and cards were intact. Thank you so much!",
      author: "Maria C.",
      barangay: "Lapasan",
      date: "2 days ago",
      category: "Wallet",
      likes: 24,
    },
    {
      id: "2",
      title: "My Dog Was Found Safe!",
      description: "My dog ran away from home. A kind neighbor found him and posted here. I'm so grateful to have my furry friend back!",
      author: "Juan R.",
      barangay: "Bulua",
      date: "1 week ago",
      category: "Pet",
      likes: 56,
    },
    {
      id: "3",
      title: "Phone Returned by Honest Driver",
      description: "I left my phone in a taxi. The driver found this platform and contacted me. Honesty still exists!",
      author: "Ana S.",
      barangay: "Nazareth",
      date: "3 days ago",
      category: "Phone",
      likes: 42,
    },
    {
      id: "4",
      title: "Important Documents Found",
      description: "I lost my bag with important work documents. It was found at a coffee shop and returned to me through this platform.",
      author: "Pedro M.",
      barangay: "Carmen",
      date: "5 days ago",
      category: "Documents",
      likes: 18,
    },
    {
      id: "5",
      title: "Keys Returned to Owner",
      description: "Lost my house and car keys. Someone found them and posted here. Got them back the same day!",
      author: "Sofia L.",
      barangay: "Agusan",
      date: "1 day ago",
      category: "Keys",
      likes: 31,
    },
    {
      id: "6",
      title: "Laptop Recovered",
      description: "Left my laptop at a coffee shop. The staff found it and reported it here. All my work files were safe!",
      author: "Miguel D.",
      barangay: "Macabalan",
      date: "4 days ago",
      category: "Laptop",
      likes: 37,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-3">
              <CheckCircle className="h-8 w-8 text-green-500" />
              Success Stories
            </h1>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Real stories from our community members who successfully reunited with
              their belongings
            </p>
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <Card key={story.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium text-green-600">
                    Reunited
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {story.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  &quot;{story.description}&quot;
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-medium text-sm">
                    {story.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">
                      {story.author}
                    </div>
                    <div className="text-xs text-gray-500">{story.category}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {story.barangay}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {story.date}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-500 transition-colors">
                    <Heart className="h-4 w-4" />
                    {story.likes}
                  </button>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Share Your Story */}
        <div className="mt-12 bg-green-50 rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Have a Success Story?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We&apos;d love to hear about your experience! Share your story and inspire
            others to use the platform.
          </p>
          <Button size="lg">
            Share Your Story
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600">211</div>
              <div className="text-gray-600 mt-1">Items Reunited</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600">89%</div>
              <div className="text-gray-600 mt-1">Success Rate</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-600">2.5</div>
              <div className="text-gray-600 mt-1">Avg. Days to Return</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-orange-600">500+</div>
              <div className="text-gray-600 mt-1">Happy Users</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
