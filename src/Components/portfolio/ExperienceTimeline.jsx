import React from 'react';
/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/Components/ui/Card.jsx";
import { Briefcase, Building, CheckCircle } from 'lucide-react';

const ExperienceTimeline = () => {
  const experiences = [
    {
      company: 'SOCI',
      role: 'Senior Product Engineer',
      date: '2022 - Present',
      points: [
        'Lead AI-informed product improvements at the intersection of engineering, product strategy, and customer experience.',
        'Architect and optimize technical solutions using SQL, PHP, and API tools to debug, resolve, and enhance product features.',
        'Drive cross-functional alignment between engineering, product, and customer success teams to deliver innovative solutions.',
        'Influence product roadmaps with data-driven insights from customer interactions and technical analysis.',
        'Reduced average resolution time by 45% by developing streamlined AI-assisted workflows and automation.',
      ],
    },
    {
      company: 'eLocal',
      role: 'Account Manager',
      date: '2021 - 2022',
      points: [
        'Analyzed user behavior data to uncover actionable insights for client outcomes.',
        'Maintained trusted relationships with key clients, ensuring proactive need fulfillment.',
        'Reduced client complaints by 20% by developing and executing optimized processes.',
        'Collaborated across internal departments to align on client objectives.',
      ],
    },
    {
      company: 'Charity Footprints',
      role: 'Customer Success Manager',
      date: '2019 - 2021',
      points: [
        'Managed a portfolio of 100+ fundraising accounts, ensuring high customer satisfaction.',
        'Conducted virtual product demos to onboard and empower new clients.',
        'Created compelling website and blog content, contributing to a 15% increase in platform traffic.',
        'Built UI prototypes to demonstrate new feature concepts to clients.',
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
        <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Professional Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From client success to senior product engineering - a proven track record of innovation and leadership!
            </p>
        </motion.div>

        <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 to-purple-200 rounded-full -translate-x-1/2"></div>

            {experiences.map((exp, index) => (
            <motion.div
                key={index}
                className="mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
            >
                <div className="relative flex items-center md:justify-normal md:odd:flex-row-reverse">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center">
                        <Briefcase className="w-4 h-4 text-blue-500" />
                    </div>

                    <div className="w-full pl-16 md:pl-0 md:w-1/2 md:odd:pr-8 md:even:pl-8">
                        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="text-sm text-gray-500 mb-1">{exp.date}</div>
                                <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                                    <Building className="w-5 h-5 text-gray-400" /> {exp.company}
                                </h3>
                                <div className="text-md font-semibold text-blue-600 mb-4">{exp.role}</div>
                                <ul className="space-y-2">
                                {exp.points.map((point, pIndex) => (
                                    <li key={pIndex} className="flex items-start gap-2 text-gray-600">
                                        <CheckCircle className="w-4 h-4 mt-1 text-green-500 flex-shrink-0" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </motion.div>
        ))}
        </div>
    </div>
  );
};

export default ExperienceTimeline;
