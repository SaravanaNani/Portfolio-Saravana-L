"use client";
import { useEffect } from "react";

const EffectsWrapper = ({ children }: any) => {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".reveal").forEach((el: any) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Cursor Glow
    const cursor = document.createElement("div");
    cursor.className = "cursor-glow";
    document.body.appendChild(cursor);

    window.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cursor.remove();
    };
  }, []);

  return (
    <>
      {children}

      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.6s ease;
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        .cursor-glow {
          position: fixed;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255,115,0,0.15), transparent);
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
        }
      `}</style>
    </>
  );
};

export default EffectsWrapper;