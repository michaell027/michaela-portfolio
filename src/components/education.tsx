"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    icon: Award,
    degree: "High School Diploma",
    institution: "St. Thomas Aquinas High School",
    period: "2018 - 2022",
    description: "Focused on economics and programming.",
  },
  {
    icon: GraduationCap,
    degree: "Directed Individual Study",
    institution: "Kosice Academy of Software Development",
    period: "2022 - 2025",
    description:
      "Successfully completed a specialized study focused on software engineering, algorithms, and web development.",
  },
];

export function Education() {
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
    <section
      id="education"
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Education
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              My educational journey and commitment to continuous learning in
              the ever-evolving tech landscape.
            </p>
          </div>

          <div className="space-y-6">
            {education.map((item, index) => (
              <Card
                key={item.degree}
                className={`transition-all duration-700 hover:shadow-lg ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                        <item.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                        <h3 className="text-xl font-semibold mb-1">
                          {item.degree}
                        </h3>
                        <span className="text-sm text-muted-foreground font-medium">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-primary font-medium mb-3">
                        {item.institution}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
