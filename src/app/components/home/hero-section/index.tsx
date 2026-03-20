"use client";

import { useState } from "react";
import { getImgPath } from "@/utils/image";
import Image from "next/image";

const index = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="home" className="relative pt-32 md:pt-36 pb-16 bg-gradient-to-br from-white to-gray-100 text-black">

      <div className="container max-w-6xl mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-10 items-center border border-gray-200 rounded-xl p-8 shadow-sm">

          {/* LEFT */}
          <div className="flex flex-col gap-6">

            {/* BADGE */}
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium w-fit">
              DevOps • Cloud • Automation
            </div>

            {/* HEADING */}
            <div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
                  Saravana L
                </span>
              </h1>

              <h2 className="text-2xl md:text-4xl font-semibold mt-3 text-gray-800">
                DevOps Engineer
              </h2>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-600 leading-relaxed max-w-xl">
              I build scalable cloud infrastructure, automate CI/CD pipelines,
              and optimize deployments for performance and cost efficiency.
            </p>

            {/* CTA BUTTON */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://drive.google.com/uc?export=download&id=1Nyly4FrU-94hdJqbDMTmqCxspY2tiJYe"
                className="bg-orange-500 text-white px-6 py-3 rounded-full text-sm hover:bg-orange-600 transition"
              >
                Download Resume
              </a>

              <a
                href="#latest-work"
                className="border border-gray-300 px-6 py-3 rounded-full text-sm hover:border-orange-500 hover:text-orange-500 transition"
              >
                View Projects
              </a>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <Image
              src={getImgPath("/images/home/banner/banner-img.png")}
              alt="profile"
              width={350}
              height={350}
              onClick={() => setOpen(true)}
              className="rounded-xl cursor-pointer transition hover:scale-105 shadow-lg"
            />
          </div>

        </div>
      </div>

      {/* POPUP IMAGE */}
      {open && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <Image
            src={getImgPath("/images/home/banner/banner-img.png")}
            alt="popup"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
      )}

    </section>
  );
};

export default index;