"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const LatestWork = () => {
  const [workData, setWorkData] = useState<any>(null);

  useEffect(() => {
    fetch(getDataPath("/data/work-data.json"))
      .then((res) => res.json())
      .then((d) => setWorkData(d.workData));
  }, []);

  return (
    <section id="latest-work"className="bg-[#0b1220] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">

        {/* Header */}
        <div className="flex justify-between border-b border-gray-700 pb-4 mb-8">
          <h2 className="text-xl md:text-2xl font-semibold">Latest Works</h2>
          <p className="text-orange-400 text-sm">(04)</p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">

          {workData?.map((item: any, i: number) => (
            <div key={i} className="group">

              {/* Image */}
              <div className="relative rounded-lg overflow-hidden">

                <Image
                  src={getImgPath(item.image)}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition"
                >
                  <span className="bg-orange-500 px-4 py-2 rounded-full text-sm font-medium">
                    View Project
                  </span>
                </a>

              </div>

              {/* Title (FIXED SIZE 🔥) */}
              <h5 className="mt-3 text-sm md:text-base font-medium leading-snug">
                {item.title}
              </h5>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default LatestWork;