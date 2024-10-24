'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    company: 'Tech Giants Inc.',
    position: 'Senior Software Engineer',
    period: '2020 - Present',
    description: 'Led development of cloud-native applications and mentored junior developers.',
    technologies: ['React', 'Node.js', 'AWS', 'Kubernetes'],
  },
  {
    company: 'Innovation Labs',
    position: 'Software Engineer',
    period: '2018 - 2020',
    description: 'Developed scalable microservices and implemented CI/CD pipelines.',
    technologies: ['Python', 'Docker', 'PostgreSQL', 'Jenkins'],
  },
  {
    company: 'StartUp Co',
    position: 'Full Stack Developer',
    period: '2016 - 2018',
    description: 'Built and maintained full-stack web applications from scratch.',
    technologies: ['JavaScript', 'React', 'Express', 'MongoDB'],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{experience.position}</CardTitle>
                        <CardDescription>{experience.company}</CardDescription>
                      </div>
                      <Badge variant="secondary">{experience.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}