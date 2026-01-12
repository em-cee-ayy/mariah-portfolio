import React from "react";
/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";
import { Button } from "@/Components/ui/Button.jsx";
import { ArrowRight, Download, Sparkles, Code2, Palette, Brain } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <motion.div
        className="text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible">

        <motion.div
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-blue-700 font-medium mb-6"
          variants={itemVariants}>

          <Sparkles className="w-4 h-4" />
          AI Product Engineer & Technical Leader
        </motion.div>

        <motion.h1
          className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight mb-6"
          variants={itemVariants}>

          Hi, I'm Mariah
          <span className="block">Anderson</span>
        </motion.h1>

        <motion.p
          className="text-xl text-gray-600 mb-8 max-w-2xl"
          variants={itemVariants}>

          Bridging AI engineering, cloud systems, UX, and behavioral insight to build intelligent products people actually trust and enjoy using
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
          variants={itemVariants}>

          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>

            View My Projects
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 hover:bg-blue-50 group">

            <a href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d964d53bf_MariahAndersonResume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
              <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Download Resume
            </a>
          </Button>
        </motion.div>

<motion.div
  className="flex flex-wrap gap-6 justify-center lg:justify-start"
  variants={itemVariants}>

  {[
    { icon: Brain, label: "Human-Centered AI Systems" },
    { icon: Code2, label: "Cloud-Native Engineering" },
    { icon: Palette, label: "UX & Cognitive Design" }
  ].map((item) => (
    <div key={item.label} className="flex items-center gap-2 text-gray-700">
      <item.icon className={`w-5 h-5 ${item.color}`} />
      <span className="font-medium">{item.label}</span>
    </div>
  ))}
</motion.div>
      </motion.div>

      {/* Right Visual */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}>

        <div className="relative z-10">
          {/* Main Profile Card */}
          <motion.div
            className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20"
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300 }}>

            <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-5xl font-bold">
              MA
            </div>
            <h3 className="text-2xl font-bold text-center mb-2">Mariah Anderson</h3>
            <p className="text-gray-600 text-center">AI Product Engineer & Innovator</p>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-4 shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}>

            <Sparkles className="w-6 h-6 text-white" />
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-4 shadow-lg"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}>

            <Brain className="w-6 h-6 text-white" />
          </motion.div>

          <motion.div
            className="absolute top-1/2 -left-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl p-4 shadow-lg"
            animate={{ x: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}>

            <Code2 className="w-6 h-6 text-white" />
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-3xl blur-3xl -z-10"></div>
      </motion.div>
    </div>);

}