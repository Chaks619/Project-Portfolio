"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Copy } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BackToTop } from "@/components/back-to-top";

export default function ContactFooter() {
  const email = "soham619cc@gmail.com";
  const phone = "+91 8240919853";

  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    toast.success("Email copied", { description: email });
  };

  return (
    <>
      <motion.footer
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-24 border-t"
      >
        {/* subtle gradient */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-32 w-80 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {/* LEFT: Text */}
            <div className="space-y-1 max-w-md">
              <h3 className="font-semibold">Get in touch</h3>
              <p className="text-sm text-muted-foreground">
                Open to opportunities, collaborations, and conversations.
              </p>
            </div>

            {/* CENTER: Contact info */}
            <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:gap-6">
              {/* Email */}
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{email}</span>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7"
                      onClick={copyEmail}
                    >
                      <Copy className="h-3.5 w-3.5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Copy email</TooltipContent>
                </Tooltip>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href={`tel:${phone}`} className="hover:underline">
                  {phone}
                </a>
              </div>
            </div>

            {/* RIGHT: Socials */}
            <div className="flex items-center gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://github.com/Chaks619"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5 hover:text-foreground transition" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>GitHub</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.linkedin.com/in/soham-chakraborty-b84336222"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5 hover:text-foreground transition" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>LinkedIn</TooltipContent>
              </Tooltip>
            </div>
            <div className="text-xs text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} Soham Chakraborty
            </div>
          </div>
        </div>
      </motion.footer>
    </>
  );
}
