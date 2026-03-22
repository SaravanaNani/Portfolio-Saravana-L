"use client";

import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "latest-work", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">

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

          {/* DESKTOP NAV */}
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

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-50 flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 bg-white active:scale-95 transition focus:outline-none before:hidden"
          >
            <span className="text-xl text-gray-800">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>

        </nav>
      </div>

      {/* 🔥 OVERLAY (click outside to close) */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        />
      )}

      {/* 🔥 MOBILE MENU PANEL */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-6 mt-16">

          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => {
                setActive(item.id);
                setMenuOpen(false); // ✅ auto close
              }}
              className={`text-base ${
                active === item.id
                  ? "text-orange-500 font-medium"
                  : "text-gray-700"
              }`}
            >
              {item.label}
            </a>
          ))}

        </div>
      </div>

    </header>
  );
};

export default Header;
// "use client";

// import { useState } from "react";

// const Header = () => {
//   const [active, setActive] = useState("home");

//   const navItems = [
//     { id: "home", label: "Home" },
//     { id: "about", label: "About" },
//     { id: "experience", label: "Experience" },
//     { id: "skills", label: "Skills" },
//     { id: "latest-work", label: "Projects" },
//     { id: "contact", label: "Contact" },
//   ];

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">

//       <div className="container max-w-6xl mx-auto px-4">

//         <nav className="py-4 flex items-center justify-between">

//           {/* LOGO */}
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
//               S
//             </div>

//             <span className="hidden sm:block font-semibold text-gray-800">
//               Saravana L
//             </span>
//           </div>

//           {/* NAV LINKS */}
//           <div className="hidden md:flex items-center gap-6 text-sm">

//             {navItems.map((item) => (
//               <a
//                 key={item.id}
//                 href={`#${item.id}`}
//                 onClick={() => setActive(item.id)}
//                 className={`transition ${
//                   active === item.id
//                     ? "text-orange-500 font-medium"
//                     : "text-gray-700 hover:text-orange-500"
//                 }`}
//               >
//                 {item.label}
//               </a>
//             ))}

//           </div>

//         </nav>

//       </div>
//     </header>
//   );
// };

// export default Header;
