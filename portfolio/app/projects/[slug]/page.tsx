import React from "react";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="space-y-8">
        Each Project Page
      {/* <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-muted-foreground max-w-2xl">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t: string) => (
          <Badge key={t} variant="secondary">
            {t}
          </Badge>
        ))}
      </div>
      <Card className="bg-muted">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Project Details</h2>
          <p className="text-sm text-muted-foreground">{project.details}</p>
        </CardContent>
      </Card>
      <div className="flex gap-3">
        <Button asChild>
          <Link href="/projects">Back to Projects</Link>
        </Button>
        <Button asChild variant="outline">
          <a href={project.liveUrl} target="_blank">
            View Live
          </a>
        </Button>
      </div> */}
    </div>
  );
}
