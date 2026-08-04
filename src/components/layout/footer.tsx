import React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white font-bold text-lg">
                  LF
                </div>
                <span className="text-lg font-bold text-gray-900">
                  Lost & Found CDO
                </span>
              </Link>
              <p className="text-gray-600 max-w-md">
                Helping Cagayan de Oro reunite people with what matters. A community
                platform for reporting lost and found items.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/lost" className="text-gray-600 hover:text-green-600 transition-colors">
                    Report Lost Item
                  </Link>
                </li>
                <li>
                  <Link href="/found" className="text-gray-600 hover:text-green-600 transition-colors">
                    Report Found Item
                  </Link>
                </li>
                <li>
                  <Link href="/search" className="text-gray-600 hover:text-green-600 transition-colors">
                    Search Items
                  </Link>
                </li>
                <li>
                  <Link href="/map" className="text-gray-600 hover:text-green-600 transition-colors">
                    View Map
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Support
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="text-gray-600 hover:text-green-600 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-green-600 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-green-600 transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Lost & Found CDO. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm flex items-center gap-1">
                Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> for Cagayan de Oro
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
