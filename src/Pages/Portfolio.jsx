
import React, { useState, useEffect } from "react";
/* eslint-disable-next-line no-unused-vars */
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Code2, 
  Mountain, 
  Heart,
  ArrowRight,
  Mail,
  Lightbulb,
  Briefcase
} from "lucide-react";

import HeroSection from "../Components/portfolio/HeroSection";
import SkillsShowcase from "../Components/portfolio/SkillsShowcase";
import ProjectGallery from "../Components/portfolio/ProjectGallery";
import InterestsSection from "../Components/portfolio/InterestsSection";
import ContactSection from "../Components/portfolio/ContactSection";
import ExperienceTimeline from "../Components/portfolio/ExperienceTimeline"; 
import AIChatbot from "../Components/ui/AIChatbot";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      // Updated sections array to include 'experience'
      const sections = ["hero", "skills", "experience", "projects", "interests", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold to be more forgiving for section detection
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: "smooth" 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Floating Navigation */}
      <motion.nav 
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-white/20"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-6">
          {[
            { id: "hero", label: "Home", icon: Heart },
            { id: "skills", label: "Skills", icon: Code2 },
            { id: "experience", label: "Experience", icon: Briefcase }, // New nav item
            { id: "projects", label: "Projects", icon: Lightbulb },
            { id: "interests", label: "Interests", icon: Mountain },
            { id: "contact", label: "Contact", icon: Mail }
].map((item) => {
  const IconComponent = item.icon;
  return (
    <button
      key={item.id}
      onClick={() => scrollToSection(item.id)}
      className={`flex items-center gap-2 px-2 py-1 rounded-full transition-all ${
        activeSection === item.id
          ? "bg-blue-600 text-white"
          : "hover:bg-gray-100 text-gray-700"
      }`}
    >
      <IconComponent className="w-4 h-4" />
      <span className="text-sm font-medium hidden sm:inline">{item.label}</span>
    </button>
  );
})}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <HeroSection />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <SkillsShowcase />
      </section>

      {/* Experience Section - New Section */}
      <section id="experience" className="py-20 px-4 bg-white/40 backdrop-blur-sm">
        <ExperienceTimeline />
      </section>

      {/* Projects Section - Background adjusted */}
      <section id="projects" className="py-20 px-4">
        <ProjectGallery />
      </section>

      {/* Interests Section - Background adjusted */}
      <section id="interests" className="py-20 px-4 bg-white/40 backdrop-blur-sm">
        <InterestsSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
        <ContactSection />
      </section>

      {/* Scroll to Top */}
      {/* Scroll to Top */}
      <motion.button
        onClick={() => scrollToSection("hero")}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-40" // added z-40
        style={{ opacity }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
      </motion.button>

      {/* AI Chatbot Tour Guide (NEW!) */}
      {/* This renders the floating chat button and the chat window,
          and its internal logic handles the z-index for the modal! */}
      <AIChatbot />
    </div>
  );
}
