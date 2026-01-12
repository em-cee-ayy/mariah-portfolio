
import React from "react";
/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mountain, 
  Pencil, 
  BookOpen, 
  Music, 
  Dumbbell, 
  Heart,
  Compass
} from "lucide-react";

export default function InterestsSection() {
  const interests = [
    {
      icon: Mountain,
      title: "Hiking",
      description: "Exploring trails and connecting with nature fuels my creativity and problem-solving mindset",
      color: "from-green-400 to-blue-500",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80"
    },
    {
      icon: Pencil,
      title: "Drawing",
      description: "Visual thinking and sketching ideas helps me communicate complex concepts clearly",
      color: "from-purple-400 to-pink-500",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&q=80"
    },
    {
      icon: BookOpen,
      title: "Reading",
      description: "Continuous learning through books on product management, psychology, and innovation",
      color: "from-blue-400 to-indigo-500",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80"
    },
    {
      icon: Music,
      title: "Music",
      description: "Listening to music enhances my creative flow and team collaboration",
      color: "from-yellow-400 to-orange-500",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80"
    },
    {
      icon: Dumbbell,
      title: "Workouts",
      description: "Physical fitness keeps my mind sharp and builds the discipline needed for leadership",
      color: "from-red-400 to-pink-500",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80"
    },
    {
      icon: Heart,
      title: "Yoga",
      description: "Mindfulness and balance practices that improve focus and decision-making abilities",
      color: "from-teal-400 to-green-500",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Beyond the Code
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          My diverse interests shape my holistic approach to product development and team leadership
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {interests.map((interest, index) => (
          <motion.div
            key={interest.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={interest.image} 
                  alt={interest.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${interest.color} opacity-70`}></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <interest.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{interest.title}</h3>
                <p className="text-gray-600 leading-relaxed">{interest.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Personal Philosophy */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-xl max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Compass className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Philosophy
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Great products don't just solve problems, they spark joy! I believe the magic happens when we treat AI as a creative partner, not just a tool. 
              My philosophy is simple: Fuse cutting-edge AI engineering with deep user empathy (thanks, psychology!), then wrap it all in jaw-dropping design. 
              The goal? To build solutions that are not just technically robust, but so fun and intuitive, users get a little dopamine hit every time they use them!
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
