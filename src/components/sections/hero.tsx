"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center pt-16"
    >
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold tracking-tight md:text-6xl"
          >
            Hi, I&apos;m John Doe
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6 text-xl text-muted-foreground"
          >
            Senior Software Engineer specializing in building exceptional
            digital experiences
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg">
              <Link href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://linkedin.com">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
