import Logo from "../logo";

const Footer = () => {
  return (
    <footer className="bg-[#0b1220] text-white pt-12 pb-8 border-t border-gray-700">

      <div className="container max-w-6xl mx-auto px-4">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LEFT */}
          <div className="flex items-center gap-3">
            <Logo />
            <div className="flex flex-col">
              <span className="text-sm font-medium">
                Saravana L
              </span>
              <span className="text-gray-400 text-xs">
                DevOps Engineer • Cloud • Automation
              </span>
            </div>
          </div>

          {/* RIGHT LINKS */}
          <div className="flex gap-6 text-sm">

            <a
              href="https://www.linkedin.com/in/saravanal"
              target="_blank"
              className="hover:text-orange-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/SaravanaNani"
              target="_blank"
              className="hover:text-orange-400 transition"
            >
              GitHub
            </a>

            <a
              href="mailto:saravana09052002aws@gmail.com"
              className="hover:text-orange-400 transition"
            >
              Email
            </a>

          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm gap-3">

          <p>
            © {new Date().getFullYear()} Saravana L
          </p>

          <p className="text-gray-500">
            Built with Next.js & Tailwind • DevOps Portfolio
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;