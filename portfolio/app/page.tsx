import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold">
        Soham Chakraborty
      </h1>

      <p className="text-muted-foreground max-w-xl">
        I build interactive web applications and real-world projects.
        Explore my work like a project store.
      </p>

      <Button asChild>
        <Link href="/projects">View Projects</Link>
      </Button>
    </section>
  )
}
