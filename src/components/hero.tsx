"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Linkedin, Mail } from "lucide-react";
import { siGithub, siTelegram } from "simple-icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, oklch(0.65 0.20 264) 0%, transparent 50%)`,
          transition: "background 0.3s ease",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8 animate-fade-in-up">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-0 group-hover:opacity-100 blur-lg transition duration-1000" />

              <div className="relative bg-muted/40 backdrop-blur-sm rounded-full overflow-hidden border border-primary/20 group-hover:border-primary/60 transition-all duration-500 w-32 h-32">
                <Image
                  src="/profile.jpg"
                  width={128}
                  height={128}
                  alt="Michaela Majorošová"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up">
            <p className="text-sm md:text-base text-muted-foreground mb-4 tracking-wider uppercase">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">
              Hi, I&#39;m{" "}
              <span className="font-cursive bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Michaela Majorošová
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 text-balance">
              Fullstack Developer
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed text-pretty">
              I craft beautiful, accessible, and performant web applications
              that blend thoughtful design with robust engineering.
            </p>
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button size="lg" asChild className="group">
              <a href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div
            className="flex items-center justify-center gap-6 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="https://github.com/michaell027"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg
                className="h-6 w-6"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <title>GitHub</title>
                <path d={siGithub.path} />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/michaela-majoro%C5%A1ov%C3%A1-88433823b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:miselka12345@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
            <a
              href="https://t.me/michaelamaj"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg
                className="h-6 w-6"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <title>Telegram</title>
                <path d={siTelegram.path} />
              </svg>
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      />
    </section>
  );
}
