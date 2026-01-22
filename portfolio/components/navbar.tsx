import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Soham's Portfolio
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/projects">Projects</Link>
          <Button variant="outline" asChild>
            <Link href="/download/Soham_Chakraborty_Resume.pdf" target="_blank" rel="noopener noreferrer">
              My Resume
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
