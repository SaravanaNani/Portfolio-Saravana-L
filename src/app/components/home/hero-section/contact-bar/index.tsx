"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const ContactBar = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(getDataPath("/data/page-data.json"))
      .then((res) => res.json())
      .then((d) => setData(d.contactBar));
  }, []);

  return (
    <section className="bg-[#0b1220] border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* LEFT */}
        <div className="flex gap-6 flex-wrap text-gray-300">
          {data?.contactItems
            ?.filter((item: any) => item.type !== "website")
            .map((item: any, i: number) => (
              <a
                key={i}
                href={item.link}
                className="flex items-center gap-2 hover:text-orange-400 transition"
              >
                <Image
                  src={getImgPath(item.icon)}
                  alt=""
                  width={20}
                  height={20}
                  className="invert"
                />
                <span>{item.label}</span>
              </a>
            ))}
        </div>

        {/* RIGHT */}
        <div className="flex gap-4">
          {data?.socialItems?.map((item: any, i: number) => (
            <a key={i} href={item.link} target="_blank">
              <Image
                src={getImgPath(item.icon)}
                alt=""
                width={28}
                height={28}
                className="invert hover:scale-110 hover:opacity-80 transition"
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactBar;