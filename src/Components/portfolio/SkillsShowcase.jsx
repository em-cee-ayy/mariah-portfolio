import React from "react";
/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";
import { Card, CardContent } from "@/Components/ui/Card.jsx";
import { Badge } from "@/Components/ui/Badge.jsx";
import {
  Code2,
  Palette,
  Target,
  TrendingUp,
  Lightbulb,
  Users,
  Briefcase,
  Brain,
  Zap,
  Cloud
} from "lucide-react";

export default function SkillsShowcase() {
  const skillCategories = [
    {
      title: "AI ENGINEEERING",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      skills: ["LLM Evaluation & Tuning",
      "Prompt Engineering",
      "Embeddings & RAG Systems",
      "Conversational UX Design",
      "AI Integration (APIs)",
      "Ethical AI Awareness",
      "ChatGPT",
      "Claude AI",
      "Gemini"],
      description: "Building scalable, ethical AI solutions",
      highlight: "Reduced AI hallucinations by 40% through systematic prompt design, evaluation frameworks, and iterative testing.",
      badge: "Core Expertise"
    },
    {
      title: "CLOUD-NATIVE AI INFRASTRUCTURE",
      icon: Cloud,
      color: "from-cyan-500 to-blue-600",
      skills: ["AWS Cloud Development", "Firebase/Supabase", "API Integration", "Database Management", "Scalable Architecture", "Cloud Security"],
      description: "Actively building toward AWS certification with hands-on AI + cloud deployment projects",
      highlight: "Currently completing AWS Cloud Development certification",
      badge: "Growing Expertise"
    },
    {
      title: "PRODUCT-MINDED ENGINEERING", 
      icon: Code2,
      color: "from-blue-500 to-indigo-600",
      skills: ["SQL", "PHP", "JavaScript", "HTML/CSS", "Python", "React Native", "Debugging", "GitHub Project Management"],
      description: "Full-stack engineering with product intent - building systems that support rapid iteration, experimentation, and learning",
      highlight: "Built AI-enhanced MVPs to validate product concepts and accelerate go-to-market learning"
    },
    {
      title: "PRODUCT ENGINEERING",
      icon: Target,
      color: "from-green-500 to-green-600", 
      skills: ["Product Roadmapping", "User Research & Personas", "PRDs/Feature Scoping", "A/B Testing", "Data-Driven Prioritization", "Agile/Scrum", "Stakeholder Collaboration"],
      description: "Translating user needs, behavioral insights, and technical constraints into high-impact AI product decisions",
      highlight: "Improved AI helpfulness scores by 25% through iterative experimentation, user feedback loops, and prioritization",
      badge: "Core Expertise"
    },
    {
      title: "AI & SYSTEMS UX DESIGN",
      icon: Palette,
      color: "from-indigo-500 to-purple-600",
      skills: ["Wireframing & Prototyping", "Information Architecture", "Usability Testing", "Conversational UX", "Figma", "Sketch", "Adobe Creative Cloud"],
      description: "Designing intuitive, cognitively-aligned experiences for complex AI-driven workflows",
      highlight: "Prototyped and tested AI-assisted booking flows to reduce user friction and decision fatigue"
    },
    {
      title: "PRODUCT OPERATIONS & ENABLEMENT",
      icon: Briefcase,
      color: "from-orange-500 to-red-500",
      skills: ["Zendesk", "Salesforce", "Atlassian", "Jira", "Trello", "Buffer", "Zapier", "ChatGPT", "Claude AI", "Gemini"],
      description: "Leveraging modern product, support, and automation tools to enable cross-functional teams",
      highlight: "Built and documented an internal AI prompt library to improve team efficiency and response quality"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}>
        <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 pb-1">
          AI Product Engineering Expertise
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Combining AI innovation, cloud infrastructure, technical depth, and user-centered product thinking</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {skillCategories.map((category, index) =>
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}>
            <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                      {category.badge && (
                        <Badge className="bg-blue-100 text-blue-700 text-xs">
                          {category.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                {category.highlight && (
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-3 mb-4">
                    <div className="flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                      <p className="text-sm font-medium text-blue-800">{category.highlight}</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) =>
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-default">
                      {skill}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>

      {/* Enhanced Stats Section */}
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}>
        {[
          { number: "40%", label: "Reduced AI Hallucinations", icon: Brain },
          { number: "25%", label: "Increased Helpfulness Scores", icon: TrendingUp },
          { number: "90+", label: "AI Prompts Evaluated", icon: Lightbulb },
          { number: "40+", label: "User Interviews Conducted", icon: Users }
        ].map((stat, index) =>
          <motion.div
            key={stat.label}
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ delay: index * 0.1 }}>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <stat.icon className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
            <div className="text-gray-600 font-medium text-sm leading-tight">{stat.label}</div>
          </motion.div>
        )}
      </motion.div>

      {/* Key Achievements Section */}
      <motion.div 
        className="mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          AI Product & Engineering Highlights
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "AI-Powered Product Development",
              description: "Integrated OpenAI APIs with a React Native frontend to deliver personalized trail recommendations, improving relevance and user confidence in outdoor decision-making",
              icon: Brain,
              color: "from-purple-500 to-pink-500"
            },
            {
              title: "RAG Pipeline Innovation", 
              description: "Experimented with RAG pipelines for nature sound detection using vector search + document retrieval for enhanced accuracy",
              icon: Zap,
              color: "from-green-500 to-blue-500"
            },
            {
              title: "Scalable Cloud Architecture",
              description: "Building cloud-native solutions with AWS infrastructure to support AI-driven features at scale",
              icon: Cloud,
              color: "from-cyan-500 to-blue-600"
            },
            {
              title: "Data-Driven Product Strategy",
              description: "Analyzed support logs and product analytics to identify top 3 friction points; proposed low-effort, high-impact AI-powered solutions",
              icon: TrendingUp,
              color: "from-orange-500 to-red-500"
            }
          ].map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center flex-shrink-0`}>
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
