import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params

  const project = projects.find(p => p.slug === slug)

  if (!project) return notFound()

  return (
    <article className="space-y-16">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">{project.title}</h1>

        <p className="text-muted-foreground max-w-3xl text-lg">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map(tech => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-4 pt-4">
          <Button asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              View Live Project
            </a>
          </Button>

          <Button variant="outline" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              View Source Code
            </a>
          </Button>
        </div>
      </section>

      {/* Screenshots */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Screenshots</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {project.screenshots.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg border bg-muted"
            >
              <Image
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                width={1200}
                height={800}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Key Features</h2>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          {project.features.map(feature => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      {/* Back */}
      <section>
        <Button variant="ghost" asChild>
          <Link href="/projects">← Back to Projects</Link>
        </Button>
      </section>
    </article>
  )
}
