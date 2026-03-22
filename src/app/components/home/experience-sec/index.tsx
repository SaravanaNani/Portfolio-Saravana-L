"use client";

const ExperienceSec = () => {
  const data = [
    {
      year: "Dec 2024 - Oct 2025",
      title: "DevOps Engineer",
      company: "Adaequare Info Pvt Ltd",
      desc: "Automated AWS infrastructure using Terraform and built CI/CD pipelines with Jenkins. Worked with Docker, Kubernetes (EKS), and monitoring tools like Prometheus and Grafana, improving deployment efficiency by 40%.",
    },
    {
      year: "Feb 2024 - Oct 2024",
      title: "DevOps Engineer",
      company: "Adaequare Info Pvt Ltd",
      desc: "Worked on AWS cloud infrastructure automation using Terraform (VPC, EC2, S3) and built CI/CD pipelines using Jenkins and Maven. Integrated Terraform with Ansible for end-to-end automation and created Docker-based Jenkins agents for scalable builds. Gained hands-on experience with Kubernetes (EKS), monitoring tools like Prometheus and Grafana, and improved deployment efficiency by 40%."
    },
    {
      year: "Feb 2023 - Apr 2023",
      title: "Python Intern",
      company: "Shiash",
      desc: "Completed an internship focused on Python fundamentals, including basic programming concepts, scripting, and problem-solving. Worked on a small project to apply core concepts and gained understanding of code structure, logic building, and debugging. Familiar with reading and understanding Python code, and capable of developing simple solutions with guidance and AI-assisted tools.",
    },
  ];

  return (
    <section id="experience"className="bg-[#0b1220] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 reveal">

        <div className="flex justify-between border-b border-gray-700 pb-5 mb-12">
          <h2>Experience</h2>
          <p className="text-orange-400">(02)</p>
        </div>

        <div className="space-y-6">
          {data.map((d, i) => (
            <div
              key={i}
              className="bg-[#111827] p-6 rounded-xl border border-gray-700 hover:-translate-y-1 transition"
            >
              <div className="flex justify-between mb-2">
                <span className="text-orange-400 font-bold">{d.year}</span>
                <span className="text-gray-400 text-sm">{d.company}</span>
              </div>
              <h4 className="font-semibold">{d.title}</h4>
              <p className="text-gray-300 text-sm">{d.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSec;
