"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";


const AboutMe = () => {
  return (
    <section id="about" className="bg-[#0b1220] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 reveal">

        <div className="flex justify-between border-b border-gray-700 pb-5 mb-12">
          <h2>About Me</h2>
          <p className="text-orange-400">(01)</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div className="hidden lg:block">
            <Image
              src={getImgPath("/images/home/about-me/icons8-male-user-500.svg")}
              alt=""
              width={400}
              height={450}
              className="rounded-xl opacity-90"
            />
          </div>

          <div className="space-y-8">

            <p className="text-gray-300 leading-relaxed">
              DevOps Engineer with ~2 years of experience in AWS and GCP, specializing in infrastructure automation using Terraform, CI/CD pipelines with Jenkins and GitLab, and containerization with Docker and Kubernetes. 
              Experienced in building scalable systems, implementing monitoring with Prometheus and Grafana, and supporting EKS-based deployments to ensure reliability and performance.
        
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#111827] p-5 rounded-xl border border-gray-700">
                <h3 className="text-orange-400 text-2xl font-bold">02+</h3>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
              <div className="bg-[#111827] p-5 rounded-xl border border-gray-700">
                <h3 className="text-orange-400 text-2xl font-bold">3+</h3>
                <p className="text-gray-400 text-sm">Projects</p>
              </div>
            </div>

            <div>
              <p className="text-gray-400 mb-3">Languages</p>
              <div className="flex gap-3 flex-wrap">
                {["English", "Hindi", "Telugu", "Tamil"].map((l) => (
                  <span key={l} className="bg-[#111827] px-4 py-2 rounded-full text-sm">
                    {l}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

  </section>
  );
};

export default AboutMe;