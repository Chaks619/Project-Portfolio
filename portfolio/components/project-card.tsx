import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ProjectCard({ project }: { project: any }) {
  return (
    <Card className="hover:shadow-lg transition">
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-sm text-muted-foreground">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t: string) => (
            <Badge key={t} variant="secondary">{t}</Badge>
          ))}
        </div>

        <div className="flex gap-3">
          <Button asChild size="sm">
            <Link href={`/projects/${project.slug}`}>Details</Link>
          </Button>
          <Button asChild size="sm" variant="outline">
            <a href={project.liveUrl} target="_blank">Live</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
