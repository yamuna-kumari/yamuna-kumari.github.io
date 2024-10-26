"use client";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  const skills = [
    "Python",
    "JavaScript",
    "Java",
    "HTML",
    "CSS",
    "SQL",
    "Git",
    "GitHub",
    "Postman",
  ];

  return (
    <section
      id="about"
      className="flex items-center justify-center bg-muted/50 py-20"
    >
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-5xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center text-3xl font-bold tracking-tight"
          >
            About Me
          </motion.h2>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src="./images/me.png"
                alt="Yamuna kumari"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground">
                I am pursuing a Bachelor of Technology in computer science from
                Chandigarh University, I&apos;ve had the privilege of working
                with cutting-edge technologies and building scalable solutions
                for complex problems.
              </p>
              <p className="text-lg text-muted-foreground">
                I&apos;m passionate about creating efficient, maintainable code
                and sharing knowledge with the developer community through
                mentoring and technical writing.
              </p>
              <div>
                <h3 className="mb-4 text-xl font-semibold">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="bg-background px-4 py-2 transition-colors hover:bg-accent">
                        {skill}
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
