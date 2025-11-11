"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { siGithub } from "simple-icons";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Verejnost Proti",
    description:
      "This project page was created by the civic association Verejnost proti. The platform aims to foster community involvement and awareness on various issues.",
    image: "verejnost_proti.webp",
    tags: ["Angular", "Typescript", "Firebase", "PrimeNG"],
    github: "https://github.com/michaell027/verejnostproti",
    demo: "https://verejnostproti.sk",
  },
  {
    title: "SitNServe",
    description:
      "This project is a mobile application designed for school purposes. It allows users to view restaurants, make reservations at specific locations, scan table QR codes, order food, and make payments from the convenience of mobile phones.",
    image: "sitnserve.webp",
    tags: ["React", "Node.js", "Firebase", "GoogleMaps", "Stripe"],
    github: "https://github.com/michaell027/SitNServe",
    demo: "",
  },
  {
      title: "Old portfolio site",
      description:
          "This project is my old portfolio website, showcasing my previous works and projects in web development. It highlights my skills in frontend and backend technologies, as well as my experience in creating responsive and user-friendly web applications.",
      image: "old_portfolio.webp",
      tags: ["React", "Firebase", "TailwindCSS"],
      github: "https://github.com/michaell027/portfolio",
      demo: "https://michaela-majorosova.web.app",
  }
];

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    type: "canva" | "url";
    url?: string;
  } | null>(null);
  const [modalLoading, setModalLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openDemo = (index: number) => {
    if (index === 1) {
      setModalContent({
        type: "canva",
        url: "https://www.canva.com/design/DAF0PwNe8oU/e8vmCXt1fSt19lZlrky7ig/view?embed",
      });
      setModalLoading(true);
      setModalOpen(true);
    } else {
      const url = projects[index]?.demo;
      if (url) {
        window.open(url, "_blank", "noopener,noreferrer");
      }
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Here are some of my recent projects that showcase my skills in
              fullstack development, UI/UX design, and problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`overflow-hidden transition-all duration-700 hover:shadow-xl group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      src={`/${project.image}`}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 bg-transparent"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        <svg
                            className="mr-2 h-4 w-4"
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                        >
                            <title>GitHub</title>
                            <path d={siGithub.path} />
                        </svg>
                      Code
                    </a>
                  </Button>

                  <div className="flex-1">
                    <Button
                      size="sm"
                      onClick={() => openDemo(index)}
                      className="w-full cursor-pointer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Dialog
        open={modalOpen}
        onOpenChange={(open) => {
          setModalOpen(open);
          if (!open) {
            setModalContent(null);
            setModalLoading(false);
          }
        }}
      >
        {modalContent && (
          <>
            <DialogTitle className="text-lg font-semibold p-4 border-b">
              {modalContent.type === "canva"
                ? "SitNServe - Mobile App Demo"
                : "Project Demo"}
            </DialogTitle>
            <DialogContent className="!max-w-[75%] w-[75%] p-0">
              <div
                className="relative min-h-[400px] bg-transparent overflow-hidden"
                style={{
                  boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                  borderRadius: 8,
                }}
              >
                {modalLoading && (
                  <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/60">
                    <div
                      className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Loading preview...</span>
                  </div>
                )}

                {modalContent.type === "canva" && (
                  <iframe
                    title="canva"
                    loading="lazy"
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      top: 0,
                      left: 0,
                      border: "none",
                      padding: 0,
                      margin: 0,
                    }}
                    src={modalContent.url}
                    onLoad={() => setModalLoading(false)}
                    allowFullScreen={true}
                    allow="fullscreen"
                  />
                )}

                {modalContent.type === "url" && modalContent.url && (
                  <iframe
                    title="demo"
                    loading="lazy"
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      top: 0,
                      left: 0,
                      border: "none",
                      padding: 0,
                      margin: 0,
                    }}
                    src={modalContent.url}
                    onLoad={() => setModalLoading(false)}
                    allowFullScreen={true}
                    allow="fullscreen"
                  />
                )}
              </div>
            </DialogContent>
          </>
        )}
      </Dialog>
    </section>
  );
}
