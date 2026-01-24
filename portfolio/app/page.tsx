"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import { projects } from "@/data/projects"
import { BackToTop } from "@/components/back-to-top"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function HomePage() {
  return (
    <div className="relative">
      {/* Subtle background gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* ABOUT SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        variants={fadeUp}
        className="min-h-[70vh] flex flex-col justify-center space-y-6"
      >
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Soham Chakraborty
        </h1>

        <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
          I’m a software developer who enjoys building interactive, scalable
          web applications. I focus on clean architecture, performance, and
          real-world problem solving.
        </p>

        <div className="flex gap-4">
          <Button asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
        </div>
      </motion.section>
    </div>
    
  )
}
