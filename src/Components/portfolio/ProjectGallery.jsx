import React, { useState } from "react";
/* eslint-disable-next-line no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/Components/ui/Card.jsx";
import { Button } from "@/Components/ui/Button.jsx";
import { Badge } from "@/Components/ui/Badge.jsx";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Mountain, 
  Heart, 
  ArrowRight,
  ExternalLink,
  FileText,
  Zap
} from "lucide-react";

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "happy-trails",
      title: "Happy Trails",
      subtitle: "Hiking Adventure App",
      description: "A comprehensive hiking companion app that helps outdoor enthusiasts discover new trails, track their adventures, and connect with fellow hikers.",
      icon: Mountain,
      color: "from-green-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
      features: [
        "AI-Powered Trail Discovery",
        "Real-time Safety Alerts",
        "Weather Integration",
        "Offline Maps",
        "Community Features",
        "Progress Tracking"
      ],
      techStack: ["React Native", "OpenAI API", "Firebase", "TensorFlow Lite"],
      keyMetrics: [
        { label: "Beta Testers", value: "75+" },
        { label: "Feature Interest", value: "94%" },
        { label: "UX Concept Score", value: "4.8/5" }
      ],
      caseStudyUrl: "HappyTrailsCaseStudy"
    },
    {
      id: "flux-app",
      title: "Flux App",
      subtitle: "AI Energy & Neuro-Sync Manager",
      description: "A wellness platform that replaces boring to-do lists with AI-powered energy management, matching tasks to your current neurotransmitter state.",
      icon: Zap, 
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      features: [
        "Vibe Check (Sentiment AI)",
        "Dopamine Menu Generator",
        "ADHD Paralysis Help",
        "Executive Function Analysis",
        "Micro-step Task Decomposition",
        "Behavior Pattern Insights"
      ],
      techStack: ["React", "Node.js", "OpenAI API", "Tailwind CSS"],
      keyMetrics: [
        { label: "Focus Improvement", value: "+45%" },
        { label: "Task Completion", value: "88%" },
        { label: "User Happiness", value: "4.9/5" }
      ],
      caseStudyUrl: "FluxCaseStudy"
    }
  ];

  const ProjectCard = ({ project, onClick }) => (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer"
    >
      <Card className="h-full bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-80`}></div>
          <div className="absolute top-4 left-4">
            <div className={`w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center`}>
              <project.icon className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <Badge className="bg-white/20 text-white border-white/30 mb-2">
              AI Product Mockup
            </Badge>
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="text-white/90">{project.subtitle}</p>
          </div>
        </div>

        <CardContent className="p-6">
          <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.features.slice(0, 3).map((feature) => (
              <Badge key={feature} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
            {project.features.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{project.features.length - 3} more
              </Badge>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant="outline"
              className="w-full group"
              onClick={(e) => {
                e.stopPropagation();
                onClick(project);
              }}
            >
              Quick View
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link to={createPageUrl(project.caseStudyUrl)} className="w-full">
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <FileText className="w-4 h-4 mr-2" />
                Case Study
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Two comprehensive AI-powered app mockups showcasing product engineering and design expertise
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <ProjectCard 
              project={project} 
              onClick={setSelectedProject}
            />
          </motion.div>
        ))}
      </div>

      {/* Project Quick View Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-80 overflow-hidden rounded-t-3xl">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.color} opacity-80`}></div>
                <Button
                  variant="ghost"
                  className="absolute top-4 right-4 text-white hover:bg-white/20"
                  onClick={() => setSelectedProject(null)}
                >
                  ×
                </Button>
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-4xl font-bold mb-2">{selectedProject.title}</h2>
                  <p className="text-xl text-white/90">{selectedProject.subtitle}</p>
                </div>
              </div>

              <div className="p-8">
                <p className="text-lg text-gray-700 mb-8">{selectedProject.description}</p>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <ArrowRight className="w-6 h-6 text-purple-600" />
                      Key Features
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedProject.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="justify-start p-2">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-2xl font-bold mb-4 mt-8 flex items-center gap-2">
                      <ExternalLink className="w-6 h-6 text-blue-600" />
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <Badge key={tech} className="bg-blue-100 text-blue-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Key Metrics</h3>
                    <div className="space-y-4">
                      {selectedProject.keyMetrics.map((metric) => (
                        <div key={metric.label} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium">{metric.label}</span>
                          <span className="font-bold text-blue-600">{metric.value}</span>
                        </div>
                      ))}
                    </div>

                    <Link to={createPageUrl(selectedProject.caseStudyUrl)} className="block mt-6">
                      <Button 
                        size="lg"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        <FileText className="w-5 h-5 mr-2" />
                        Read Full Case Study
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
