"use client";
import { useEffect, useState } from "react";

import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/sivatarak", icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/jalappa-gari-vidyalakshmi-426a8533b", icon: Linkedin },
];

type ProjectColor = "purple" | "blue" | "green";

interface Project {
  title: string;
  description: string;
  image: string;
  color: ProjectColor;
  live?: string;
  private?: boolean;
}

const projects: Project[] = [
  {
    title: "WITS Online Application",
    description:
      "Enterprise cargo and logistics platform supporting shipment tracking and reporting workflows. Migrated legacy reports to React 18, modernized backend services to Java 18, and enabled real-time cargo tracking. Improved performance and production stability across DEV, QA, and PROD environments.",
    image: "/next.svg",
    color: "blue",
    private: true,
  },
  {
    title: "Visibility Application",
    description:
      "Track & Trace system for real-time cargo monitoring. Designed ETA/ETD backend logic using Spring Boot and built responsive React-based UI components to enhance shipment visibility and data readability.",
    image: "/next.svg",
    color: "green",
    private: true,
  },
  {
    title: "Optimal Placement of Wireless Charger",
    description:
      "Academic project focused on optimizing charger placement in wireless sensor networks. Applied clustering and heuristic algorithms to reduce energy consumption and extend network lifetime.",
    image: "/next.svg",
    color: "purple",
    private: true,
  },
];

const colorClassMap: Record<
  ProjectColor,
  { border: string; text: string; hoverBg: string }
> = {
  purple: {
    border: "border-purple-100",
    text: "text-purple-700",
    hoverBg: "hover:bg-purple-50",
  },
  blue: {
    border: "border-blue-100",
    text: "text-blue-700",
    hoverBg: "hover:bg-blue-50",
  },
  green: {
    border: "border-green-100",
    text: "text-green-700",
    hoverBg: "hover:bg-green-50",
  },
};

export default function Portfolio() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 text-gray-900 font-sans relative overflow-x-hidden pt-20 pb-24">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-lg flex justify-center rounded-b-2xl">
        <ul className="flex gap-8 py-4 text-lg font-medium">
          {[
            { href: "#hero", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#projects", label: "Projects" },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative transition text-gray-900 hover:text-blue-600 px-1"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <section
        id="hero"
        className="flex flex-col items-center justify-center min-h-[80vh] text-center p-6"
      >
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Hi, I&apos;m Vidya 👋
        </h1>

        <h2 className="text-2xl mb-6 text-gray-700 font-semibold">
          Java Full Stack Developer | React | Spring Boot | Microservices
        </h2>

        <div className="flex gap-4 justify-center mb-6">
          {socialLinks.map((link) => {
            const LucideIcon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 transition-transform text-gray-700 hover:text-blue-600"
              >
                <LucideIcon className="w-8 h-8" />
              </a>
            );
          })}
        </div>

        <a
          href="mailto:sivatarak264@gmail.com"
          className="inline-block mt-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-500 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Hire Me
        </a>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white text-center px-6">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          Java Full Stack Developer with 2+ years of experience building enterprise applications using Java, Spring Boot, and React. Experienced in designing scalable RESTful APIs, developing responsive user interfaces, and supporting production environments in Agile teams.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-gray-100 text-center px-6">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            "Java",
            "Spring Boot",
            "React.js",
            "Microservices",
            "REST APIs",
            "SQL",
            "Azure DevOps",
            "Jira",
            "Git",
            "TypeScript",
            "MySQL",
          ].map((skill) => (
            <Card
              key={skill}
              className="hover:scale-105 transition-transform shadow bg-white border border-blue-100"
            >
              <CardContent className="p-4 font-medium text-lg text-blue-900 text-center">
                {skill}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-white text-center px-6">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => {
            const colorClasses = colorClassMap[project.color];

            return (
              <Card
                key={project.title}
                className={`hover:shadow-2xl transition-shadow bg-white border ${colorClasses.border}`}
              >
                <CardContent className="p-6 rounded-2xl">
                  <h3
                    className={`text-2xl font-semibold mb-2 ${colorClasses.text}`}
                  >
                    {project.title}
                  </h3>

                  <p className="mb-4 text-gray-700">
                    {project.description}
                  </p>

                  <p className="text-sm text-gray-500 italic">
                    (Enterprise / Academic Project – Source code private)
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Back to Top */}
      {showTopBtn && (
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform"
        >
          ⬆
        </button>
      )}
    </div>
  );
}
