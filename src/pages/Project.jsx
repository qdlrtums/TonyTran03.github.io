import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { useTheme } from "../components/ThemeContext.jsx"; // Assuming ThemeContext is available here

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const projectRefs = useRef([]);
  const { isDayMode } = useTheme(); // Get the theme mode

  useEffect(() => {
    projectRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { opacity: 0, y: 100 }, // Slide up animation for projects
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: ref,
            start: "top 90%",
            end: "top 80%",
            scrub: 0.1,
            markers: false,
            toggleActions: "play none none reverse", // Animation plays on scroll down and reverses on scroll up
          },
          ease: "power2.out", // Use a smoother easing function
        }
      );
    });
  }, []);

  // Projects array
  const projects = [
    {
      title: "AI Rep Counter",
      description:
        "Designed and deployed a machine learning-based web app to track exercise repetitions in real-time using Google Teachable Machine. (Submission for GDCS 2024) ",
      image: "/website_photo/projectphoto/RepCount.jpg",
      githubUrl: "https://github.com/jeremylau-tech/hotdaddy/tree/main", // GitHub URL
    },
    {
      title: "2Fold",
      description:
        "Built an AI-powered learning platform utilizing natural language processing (NLP) to generate personalized study guides. (Submission for HawkHacks 2024) ",
      image: "/website_photo/projectphoto/rabbit.jpg",
      githubUrl:
        "https://github.com/rnguyen03/2Fold-AI-Learning-Guide/tree/main", // GitHub URL
    },
    {
      title: "Sharity",
      description:
        "Developed a centralized charity resource database that streamlined inter-charity collaboration. (Submission for Hack the 6ix 2024) ",
      image: "/website_photo/projectphoto/heart.jpg",
      githubUrl: "https://github.com/TonyTran03/Sharity", // GitHub URL
    },
    {
      title: "Jeopardy",
      description:
        "Engineered a Jeopardy game platform, integrating WebSocket for instant buzzer functionality and MongoDB for game creation.",
      image: "/website_photo/projectphoto/jeopardy.jpg",
      githubUrl: "https://github.com/TonyTran03/Jeopardy", // GitHub URL
    },
    {
      title: "That's Fire: Wildfire Predictor",
      description:
        "Developed a full-stack wildfire prediction platform with a self-trained machine-learning model with real-time data analysis. (Submission for UofTHacks 12)",
      image: "/website_photo/projectphoto/trucky_img.png",
      githubUrl: "https://github.com/TonyTran03/global_fire_detector", // Git
      websiteUrl: "https://magnificent-rejoicing-production.up.railway.app/", // Add website URL for each project
    },
  ];

  // Define dynamic styles based on the theme (isDayMode)
  const backgroundColor = isDayMode ? "#f0f0f0" : "#2a2a2a"; // Background color
  const cardBackgroundColor = isDayMode ? "#fff" : "#3a3a3a"; // Card background
  const textColor = isDayMode ? "text-gray-700" : "text-gray-300"; // Text color
  const headingColor = isDayMode ? "text-black" : "text-white"; // Heading color

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-6"
      style={{ backgroundColor: backgroundColor }} // Apply background color based on theme
    >
      {/* Sticky Full-Width Projects Heading */}
      <div
        className="w-full sticky top-0 z-50 bg-opacity-90 py-4"
        style={{
          backgroundColor: backgroundColor, // Sticky background matches the page
        }}
      >
        <h1 className={`text-5xl font-bold text-center ${headingColor}`}>
          Projects
        </h1>
      </div>

      {/* Grid Layout for Projects */}
      <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className="flex flex-col items-center shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
            style={{
              backgroundColor: cardBackgroundColor, // Card background color based on theme
              color: isDayMode ? "#333" : "#f0f0f0", // Text color inside the card
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4 overflow-hidden"
              style={{ backgroundColor: cardBackgroundColor }}
            />
            <h2 className={`text-2xl font-bold mb-2 ${headingColor}`}>
              {project.title}
            </h2>
            <p
              className={`overflow-hidden text-ellipsis ${textColor}`}
              style={{ maxHeight: "3rem" }}
            >
              {project.description}
            </p>

            {/* Buttons Container */}
            <div className="flex gap-4 mt-4">
              {/* GitHub Button */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block px-6 py-2 rounded ${
                  isDayMode ? "bg-blue-500 text-white" : "bg-white text-black"
                } font-semibold hover:opacity-90 transition`}
              >
                View on GitHub
              </a>

              {/* Website Button - Only show if websiteUrl exists */}
              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block px-6 py-2 rounded ${
                    isDayMode
                      ? "bg-green-500 text-white"
                      : "bg-green-400 text-black"
                  } font-semibold hover:opacity-90 transition`}
                >
                  Visit Website
                </a>
              )}
            </div>
          </div>
        ))}

        <a
          href="https://github.com/TonyTran03"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center border-2 border-dashed p-6 transition-transform transform hover:scale-95 rounded-lg text-center"
          style={{
            borderColor: isDayMode ? "#333" : "#f0f0f0",
            color: isDayMode ? "#333" : "#f0f0f0",
          }}
        >
          <div
            className={`text-xl font-semibold transition-colors ${
              isDayMode ? "hover:text-blue-500" : "hover:text-white"
            }`}
          >
            View more projects on my GitHub
          </div>
        </a>
      </div>
    </div>
  );
}
