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
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="container max-w-6xl mx-auto px-4">
        <nav className="py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow">
              S
            </div>
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
            onClick={() => setMenuOpen(true)}
            className="md:hidden w-10 h-10 rounded-lg border border-gray-300 bg-white flex items-center justify-center shadow-sm"
          >
            ☰
          </button>
        </nav>
      </div>

      {/* OVERLAY (NO BLUR, CLEAN DARK) */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* SIDE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          
          <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
            S
          </div>

          {/* MODERN CLOSE BUTTON */}
          <button
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            ✕
          </button>
        </div>

        {/* NAV ITEMS */}
        <div className="flex flex-col gap-6 px-6 mt-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => {
                setActive(item.id);
                setMenuOpen(false);
              }}
              className="text-lg text-gray-800 hover:text-orange-500 transition"
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
