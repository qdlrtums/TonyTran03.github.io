import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";

// Lerp function to smooth the transition
const lerp = (start, end, factor) => {
  return start + (end - start) * factor;
};

function App() {
  useEffect(() => {
    // Only initialize cursor functionality if not on mobile
    if (window.innerWidth <= 768) return;

    const cursorInner = document.querySelector(".cursor-inner");
    const cursorOuter = document.querySelector(".cursor-outer");

    if (!cursorInner || !cursorOuter) return;

    let mouseX = 0,
      mouseY = 0,
      posX = 0,
      posY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursorInner.style.top = `${mouseY}px`;
      cursorInner.style.left = `${mouseX}px`;
    };

    const followCursor = () => {
      // Use lerp to smooth the position changes
      posX = lerp(posX, mouseX, 0.1);
      posY = lerp(posY, mouseY, 0.1);

      cursorOuter.style.transform = `translate(${posX - 20}px, ${posY - 20}px)`;
      requestAnimationFrame(followCursor);
    };

    document.addEventListener("mousemove", handleMouseMove);
    followCursor();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Router>
      <div>
        {/* Only render cursor elements if not on mobile */}
        {window.innerWidth > 768 && (
          <div className="cursor">
            <div className="cursor-inner"></div>
            <div className="cursor-outer"></div>
          </div>
        )}
        <Routes>
          <Route index element={<Intro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
