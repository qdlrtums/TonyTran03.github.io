import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const projectRefs = useRef([]);

  useEffect(() => {
    projectRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { opacity: 0, x: index % 2 === 0 ? -100 : 100 }, // Slide from left or right based on index
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: ref,
            start: "top 80%", // Start animation when project section enters viewport
            end: "bottom 50%",
            scrub: true,
            markers: true,
            toggleActions: "play none none reverse", // Animation plays on scroll down and reverses on scroll up
          },
          duration: 1,
          ease: "power1.out",
        }
      );
    });
  }, []);

  const projects = [
    {
      title: "Project One",
      description: "hi1",
      image: "/images/project1.jpg",
    },
    {
      title: "Project Two",
      description: "hi2.",
      image: "/images/project2.jpg",
    },
    // Add more projects here
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-20">
      <h1 className="text-5xl font-bold mb-10">Projects</h1>
      <div className="grid gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
