import React from "react";
/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";
import { Button } from "@/Components/ui/Button.jsx";
import { Card, CardContent } from "@/Components/ui/Card.jsx";
import { Badge } from "@/Components/ui/Badge.jsx";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  ArrowLeft,
  Zap,
  Target,
  Lightbulb,
  Code2,
  Brain,
  TrendingUp,
  Users,
  CheckCircle,
  AlertTriangle,
  Rocket,
  Coffee,
  Activity,
  Smartphone,
  Sparkles
} from "lucide-react";

export default function FluxCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white py-20 px-4">
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
                <Zap className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-5xl font-bold">Flux App</h1>
                <p className="text-xl text-purple-100">AI Energy & Neuro-Sync Manager</p>
              </div>
            </div>
            <p className="text-lg text-white/90 max-w-3xl mt-6">
              Standard to-do lists are rude, but Flux is different! It's an AI-powered energy manager that 
              syncs your tasks with your current neurotransmitter state. Stop managing time; start managing your brain. 🧠✨
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Early Prototype Stats */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Users, label: "Beta Testers", value: "20+", color: "from-purple-500 to-purple-600" },
            { icon: Activity, label: "Focus Boost", value: "+45%", color: "from-pink-500 to-pink-600" },
            { icon: TrendingUp, label: "User Happiness", value: "4.9/5", color: "from-blue-500 to-blue-600" },
            { icon: Sparkles, label: "Task Clarity", value: "92%", color: "from-green-500 to-green-600" }
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

        {/* Problem Statement */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">The Problem: Boring To-Do Lists are Rude</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Standard to-do lists are static and unforgiving. They stare at you with all the things 
                  you haven't done, completely ignoring the reality of executive dysfunction and fluctuating 
                  energy levels. This leads to the "paralysis-shame-doomscroll" cycle.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h3 className="font-semibold text-red-800 mb-2">The "Rude" List Issues:</h3>
                    <ul className="space-y-2 text-sm text-red-700">
                      <li>• Paralysis caused by overwhelming task density</li>
                      <li>• Lack of context for current brain state (dopamine/stimulation)</li>
                      <li>• No intervention for "doomscrolling" or idle time</li>
                      <li>• Shaming users for unmet, unrealistic goals</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 mb-2">Early Tester Feedback:</h3>
                    <ul className="space-y-2 text-sm text-blue-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>"I need help breaking the 'stuck' feeling."</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>"I want my app to understand my zoomies vs. crashes."</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>"I want to feel accomplished when I complete a task."</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* The Science-y Solution */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">The Neuro-Sync Solution</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    1. The Vibe Check (Psych + AI)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Instead of a list, the app asks: "How spicy is the brain feeling right now?" 
                    There are multiple ways to input this "vibe-check" data!
                    The AI analyzes your sentiment to determine executive function levels.
                  </p>
                  <Badge variant="secondary">Sentiment AI Analysis</Badge>
                  <Badge variant="secondary" className="ml-2">Dynamic UI Adaptation</Badge>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    2. The Dopamine Menu Generator 🍩
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Gamifying the "dopamine menu" concept! AI suggests a "tasting menu" (Starters, Mains, Sides) 
                    based on behavior patterns and current energy.
                  </p>
                  <div className="grid grid-cols-3 gap-2 text-xs font-bold text-center">
                    <div className="bg-white p-2 rounded border">STARTERS<br/>(Low Energy)</div>
                    <div className="bg-white p-2 rounded border">MAINS<br/>(Deep Work)</div>
                    <div className="bg-white p-2 rounded border">SIDES<br/>(Maintenance)</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    3. The Paralysis Breaker
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Using AI to break scary tasks into micro-steps. Instead of "Build Website," 
                    it suggests "Open VS Code." Low friction = high momentum.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Technology Stack */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">The Flux Stack</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6 border">
                    <h3 className="font-bold mb-4 flex items-center gap-2"><Smartphone className="w-5 h-5"/> Frontend & Logic</h3>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Framer Motion", "Tailwind CSS", "Lucide Icons"].map(tech => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 border">
                    <h3 className="font-bold mb-4 flex items-center gap-2"><Sparkles className="w-5 h-5"/> AI Engineering</h3>
                    <div className="flex flex-wrap gap-2">
                      {["OpenAI API", "Prompt Engineering", "Sentiment Analysis", "JSON Schema"].map(tech => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
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
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-0 shadow-2xl">
            <CardContent className="p-12 text-white">
              <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl font-bold mb-4">Let's Neuro-Sync!</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Ready to talk about AI, energy management, and building products that actually care about the user's brain?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={createPageUrl("Portfolio")}>
                  <Button size="lg" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-purple-600 transition-all"> 
                    View More Projects
                  </Button>
                </Link>
                <Link to={createPageUrl("Portfolio") + "#contact"}>
                  <Button
                    size="lg"
                    className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-purple-600 transition-all"
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
