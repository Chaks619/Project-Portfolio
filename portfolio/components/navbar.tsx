import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Soham.dev
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/projects">Projects</Link>
          <ThemeToggle />
          <Button asChild>
            <a href="/resume.pdf" target="_blank">Resume</a>
          </Button>
        </div>
      </div>
    </nav>
  )
}
