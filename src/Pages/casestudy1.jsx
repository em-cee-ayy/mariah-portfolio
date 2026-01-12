import React from "react";
/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  ArrowLeft,
  Mountain,
  Target,
  Lightbulb,
  Code2,
  Brain,
  TrendingUp,
  Users,
  Zap,
  CheckCircle,
  AlertTriangle,
  Rocket,
  MapPin,
  Cloud,
  Camera,
  Share2,
  Sparkles
} from "lucide-react";

export default function HappyTrailsCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 via-blue-600 to-green-700 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Link to={createPageUrl("Portfolio")}>
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                <Mountain className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-5xl font-bold">Happy Trails</h1>
                <p className="text-xl text-green-100">Waze meets AllTrails: Real-Time Hiking Intelligence</p>
              </div>
            </div>
            <p className="text-lg text-white/90 max-w-3xl mt-6">
              A prototype hiking companion that turns every user into a trail scout. 
              By combining real-time crowdsourced alerts with a vibrant social community, 
              Happy Trails makes the wilderness safer and more connected. 🌲✨
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Prototype Validation Stats */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Users, label: "Beta Testers", value: "75+", color: "from-blue-500 to-blue-600" },
            { icon: Share2, label: "Social Engagement", value: "High", color: "from-green-500 to-green-600" },
            { icon: AlertTriangle, label: "Live Alerts", value: "Real-Time", color: "from-purple-500 to-purple-600" },
            { icon: Sparkles, label: "Concept Score", value: "4.8/5", color: "from-orange-500 to-red-500" }
          ].map((stat) => (
            <Card key={stat.label} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* The "Waze" Factor - Real Time Alerts */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">The "Waze" for the Wilderness</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Static trail maps are outdated the moment you hit the trailhead. Happy Trails 
                allows users to pinpoint live alerts directly on the map-from bear sightings and fallen trees to sudden trail closures or micro-climate weather shifts.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-red-50 p-4 rounded-lg border border-red-100 text-center">
                  <AlertTriangle className="w-6 h-6 text-red-500 mx-auto mb-2" />
                  <span className="text-sm font-bold text-red-800">Wildlife Alerts</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-center">
                  <Cloud className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                  <span className="text-sm font-bold text-blue-800">Weather Shifts</span>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 text-center">
                  <Target className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                  <span className="text-sm font-bold text-orange-800">Trail Closures</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Social Community Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Trail Moments & Community</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
                Hiking is better together! Users can share high-res photos and videos from their 
                summits, allowing the community to like, comment, and celebrate every milestone. 
                It's not just an app; it's a digital campfire.
              </p>
              <div className="flex justify-center gap-2">
                <Badge variant="secondary">Photo Sharing</Badge>
                <Badge variant="secondary">Video Highlights</Badge>
                <Badge variant="secondary">Community Feedback</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-green-600 to-blue-600 border-0 shadow-2xl">
            <CardContent className="p-12 text-white">
              <Rocket className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl font-bold mb-4">Ready to Build the Future of Outdoor Tech?</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can turn real-time data into a safer, more engaged community!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={createPageUrl("Portfolio")}>
                  <Button size="lg" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-green-600 transition-all">
                    View More Projects
                  </Button>
                </Link>
                <Link to={createPageUrl("Portfolio") + "#contact"}>
                  <Button 
                    size="lg" 
                    className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-green-600 transition-all"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}