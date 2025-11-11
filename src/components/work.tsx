"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    icon: Briefcase,
    position: "Junior - Full Stack Developer",
    company: "Visma",
    period: "2025 - Present",
    description:
      "Working on a new solution built with Angular and ASP.NET Core, focusing on scalable architecture, clean code, and seamless integration between frontend and backend.",
  },
  {
    icon: Building,
    position: "Intern - Full Stack Developer",
    company: "Visma",
    period: "2024 - 2025",
    description:
      "Contributed to the development of a new solution using Angular and ASP.NET Core, implementing core features and learning best practices in full stack development.",
  },
];

export function Work() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="work" ref={sectionRef} className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-6xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/10 -translate-x-1/2" />

          <div
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Work
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Selected roles and places where I gained practical experience.
            </p>
          </div>

          <div className="space-y-6 md:space-y-12">
            {experiences.map((item, index) => {
              const isLeft = index % 2 === 0;
              const card = (
                <Card
                  className={`transition-all duration-700 hover:shadow-lg ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 md:w-20 md:h-20 rounded-full bg-primary/10">
                          <item.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-lg md:text-xl font-semibold">
                            {item.position}
                          </h3>
                          <span className="text-sm text-muted-foreground">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-primary font-medium mb-2">
                          {item.company}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );

              return (
                <div
                  key={`${item.company}-${item.position}`}
                  className="relative"
                >
                  <div className="md:hidden">{card}</div>

                  <div className="hidden md:flex items-center justify-between">
                    <div
                      className={`w-1/2 flex ${
                        isLeft ? "justify-end pr-8" : "justify-start pr-8"
                      }`}
                    >
                      {isLeft ? card : <div className="w-full" />}
                    </div>

                    <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full bg-background border-2 border-primary">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </div>

                    <div
                      className={`w-1/2 flex ${
                        !isLeft ? "justify-start pl-8" : "justify-start pl-8"
                      }`}
                    >
                      {!isLeft ? card : <div className="w-full" />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
