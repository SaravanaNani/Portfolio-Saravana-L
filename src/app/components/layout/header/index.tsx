"use client";

import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "latest-work", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">

      <div className="container max-w-6xl mx-auto px-4">

        <nav className="py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
              S
            </div>

            <span className="hidden sm:block font-semibold text-gray-800">
              Saravana L
            </span>
          </div>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center gap-6 text-sm">

            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActive(item.id)}
                className={`transition ${
                  active === item.id
                    ? "text-orange-500 font-medium"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                {item.label}
              </a>
            ))}

          </div>

        </nav>

      </div>
    </header>
  );
};

export default Header;