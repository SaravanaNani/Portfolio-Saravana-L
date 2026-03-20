"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const EducationSkills = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(getDataPath("/data/page-data.json"))
      .then((res) => res.json())
      .then((d) => setData(d.educationData));
  }, []);

  return (
    <section  id="skills" className="bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">

        {/* Header */}
        <div className="flex justify-between border-b border-gray-700 pb-4 mb-8">
          <h2 className="text-xl md:text-2xl font-semibold">Education & Skills</h2>
          <p className="text-orange-400 text-sm">(03)</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Education */}
          <div className="space-y-4">
            {data?.education?.map((edu: any, i: number) => (
              <div
                key={i}
                className="bg-[#111827] p-4 rounded-lg border border-gray-700 hover:border-orange-400 transition"
              >
                <h5 className="text-sm md:text-base font-medium">
                  {edu.title}
                </h5>
                <p className="text-gray-400 text-xs md:text-sm">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

          {/* Skills (NO RATING + BLINK EFFECT) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {data?.skills?.map((skill: any, i: number) => (
              <div
                key={i}
                className="bg-[#111827] p-4 rounded-lg flex flex-col items-center gap-2 border border-gray-700 hover:scale-105 transition animate-pulse-slow"
              >
                <Image
                  src={getImgPath(skill.icon)}
                  alt={skill.name}
                  width={36}
                  height={36}
                />
                <p className="text-xs md:text-sm">{skill.name}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* BLINK ANIMATION */}
      <style jsx global>{`
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </section>
  );
};

export default EducationSkills;