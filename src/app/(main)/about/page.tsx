import React from "react";
import { Heart, Users, MapPin, Shield, Globe, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const features = [
    {
      icon: MapPin,
      title: "Local Focus",
      description: "Specifically designed for Cagayan de Oro with barangay-level tracking.",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your personal information is protected until you choose to share it.",
    },
    {
      icon: Smartphone,
      title: "Easy to Use",
      description: "Simple interface designed for everyone, from students to seniors.",
    },
    {
      icon: Globe,
      title: "Multi-Language",
      description: "Available in English, Cebuano, and Filipino.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by the community, for the community.",
    },
    {
      icon: Heart,
      title: "Free Forever",
      description: "No fees, no subscriptions. Just helping each other.",
    },
  ];

  const team = [
    {
      name: "Lost & Found CDO Team",
      role: "Community Platform",
      description: "A group of Kagay-anons passionate about helping reunite people with their belongings.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Lost & Found CDO
            </h1>
            <p className="text-xl text-green-100">
              Helping Cagayan de Oro reunite people with what matters. A community
              platform built with love for Kagay-anons.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                Lost & Found CDO was created to solve a simple problem: helping people in
                Cagayan de Oro find their lost belongings and return found items to their
                rightful owners.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that by connecting our community through technology, we can
                increase the chances of reuniting people with what matters to them.
              </p>
              <p className="text-gray-600">
                Whether it&apos;s a lost wallet, a found phone, a missing pet, or important
                documents, our platform makes it easy to report, search, and connect.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8 text-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-4">
                  <div className="text-3xl font-bold text-green-600">1,234+</div>
                  <div className="text-sm text-gray-600">Items Reported</div>
                </div>
                <div className="bg-white rounded-2xl p-4">
                  <div className="text-3xl font-bold text-green-600">211+</div>
                  <div className="text-sm text-gray-600">Items Reunited</div>
                </div>
                <div className="bg-white rounded-2xl p-4">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div className="bg-white rounded-2xl p-4">
                  <div className="text-3xl font-bold text-green-600">37</div>
                  <div className="text-sm text-gray-600">Barangays</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Use Lost & Found CDO?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We&apos;ve designed our platform to be simple, secure, and effective for
              everyone in Cagayan de Oro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600">Three simple steps to find or return items</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Report
              </h3>
              <p className="text-gray-600">
                Lost something? Found something? Report it with photos and details.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Match
              </h3>
              <p className="text-gray-600">
                Our system automatically matches lost and found reports.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Reunite
              </h3>
              <p className="text-gray-600">
                Connect with the owner or finder and return the item.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built with ❤️ for CDO
            </h2>
            <p className="text-gray-600">
              This platform is a community initiative to help Kagay-anons
            </p>
          </div>

          <div className="max-w-md mx-auto">
            {team.map((member) => (
              <Card key={member.name}>
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-10 w-10 text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Help Our Community?
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Kagay-anons helping each other. Together, we can make
            Cagayan de Oro a better place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/sign-up"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-green-700 rounded-2xl hover:bg-green-50 transition-colors"
            >
              Get Started Free
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-2xl hover:bg-white/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
