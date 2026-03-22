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
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
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
            className="md:hidden w-10 h-10 rounded-lg border border-gray-300 bg-white flex items-center justify-center"
          >
            ☰
          </button>
        </nav>
      </div>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* SIDE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-gray-700"
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
