import React, { useState } from "react";
/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Mail, 
  Linkedin, 
  Github,
  Send, 
  MapPin, 
  Calendar,
  Coffee,
  Rocket,
  CheckCircle,
  AlertCircle,
  Loader2
} from "lucide-react";
import { SendEmail } from "@/integrations/Core";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await SendEmail({
        to: "mariah.c.anderson@gmail.com",
        from_name: formData.name,
        subject: `New Portfolio Message from ${formData.name}`,
        body: `
          <p>You have a new message from your portfolio contact form:</p>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
          <hr>
          <p><strong>Message:</strong></p>
          <p>${formData.message.replace(/\n/g, '<br>')}</p>
        `,
      });
      setSubmitStatus({ success: true, message: "Thanks for reaching out! I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus({ success: false, message: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "mariah.c.anderson@gmail.com",
      href: "mailto:mariah.c.anderson@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/mariahanderson",
      href: "https://www.linkedin.com/in/mariahanderson",
      color: "text-blue-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "/em-cee-ayy",
      href: "https://github.com/em-cee-ayy",
      color: "text-gray-400"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto text-white">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          Let's Build Something Amazing!
        </h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Ready to discuss your next product opportunity or just want to connect? 
          I'd love to hear from you!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Send className="w-6 h-6" />
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                    required
                    disabled={isSubmitting}
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                    required
                    disabled={isSubmitting}
                  />
                  <Textarea
                    placeholder="Tell me about your project, idea, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 min-h-32"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                {submitStatus && (
                  <Alert variant={submitStatus.success ? "default" : "destructive"} className={submitStatus.success ? "bg-green-500/20 border-green-400" : ""}>
                    {submitStatus.success ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                    <AlertTitle>{submitStatus.success ? "Success!" : "Error"}</AlertTitle>
                    <AlertDescription>{submitStatus.message}</AlertDescription>
                  </Alert>
                )}
                
                <Button 
                  type="submit"
                  className="bg-blue-600 text-white hover:bg-blue-700 font-semibold flex items-center justify-center"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Info & Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Contact Methods */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            <div className="space-y-4">
              {contactMethods.map((method) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center ${method.color}`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">{method.label}</div>
                    <div className="text-blue-200 group-hover:text-white transition-colors">
                      {method.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's Collaborate</h3>
            <div className="space-y-3">
              {[
                { icon: Coffee, text: "Schedule a Coffee Chat", action: "Book some time with me" },
                { icon: Calendar, text: "Portfolio Walkthrough", action: "Detailed project review" }
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">{item.text}</div>
                    <div className="text-blue-200 text-sm">{item.action}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div 
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center"
            whileHover={{ scale: 1.02 }}
          >
            <MapPin className="w-8 h-8 mx-auto mb-3 text-blue-300" />
            <h4 className="text-xl font-bold mb-2">I'm Ready to Lead!</h4>
            <p className="text-blue-200 mb-4">
              Available for Product Manager roles, AI Engineer roles, and exciting collaborations 😊
            </p>
            <Button 
              as="a"
              href="https://calendly.com/mariah-c-anderson/chatterbox"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white hover:bg-blue-700 font-semibold"
            >
              Let's Get Started!
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
