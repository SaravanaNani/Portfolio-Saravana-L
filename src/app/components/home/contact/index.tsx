"use client";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    fetch("https://formsubmit.co/ajax/saravana09052002aws@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setSubmitted(data.success);
        setFormData({
          name: "",
          number: "",
          email: "",
          message: "",
        });
      });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-gray-50 to-white pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="container max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-6 mb-12">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <span className="text-orange-500">(05)</span>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT - FORM */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-2xl rounded-2xl p-8">

            <h3 className="text-lg font-semibold mb-8 text-orange-400">
              Let's build something together 🚀
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-8">

              {/* Name + Phone */}
              <div className="grid grid-cols-2 gap-6">

                <div>
                  <label className="text-sm text-gray-400">Name *</label>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-600 focus:border-orange-500 outline-none py-2 transition"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400">Phone *</label>
                  <input
                    required
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-600 focus:border-orange-500 outline-none py-2 transition"
                  />
                </div>

              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-gray-400">Email *</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 focus:border-orange-500 outline-none py-2 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm text-gray-400">Your Message *</label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 focus:border-orange-500 outline-none py-2 transition h-20 resize-none"
                />
              </div>

              {/* Success */}
              {submitted && (
                <div className="bg-green-500/10 border border-green-500 text-green-400 px-4 py-2 rounded-lg text-sm">
                  ✅ Message sent successfully!
                </div>
              )}

              {/* Button */}
              <button className="bg-orange-500 text-white py-3 rounded-full font-medium hover:bg-orange-600 transition shadow-lg shadow-orange-500/30">
                Send Message →
              </button>

            </form>
          </div>

          {/* RIGHT - INFO */}
          <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col justify-between">

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Get in touch
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8">
                Feel free to reach out for collaboration, project discussions,
                or DevOps opportunities. I enjoy working on cloud automation,
                CI/CD pipelines, and scalable infrastructure solutions.
              </p>

              <div className="flex flex-col gap-5">

                <div>
                  <p className="text-gray-500 text-sm">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/saravanal"
                    target="_blank"
                    className="hover:text-orange-500 transition"
                  >
                    linkedin.com/in/saravanal
                  </a>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <a
                    href="mailto:saravana09052002aws@gmail.com"
                    className="hover:text-orange-500 transition"
                  >
                    saravana09052002aws@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Phone</p>
                  <a
                    href="tel:+919390441805"
                    className="hover:text-orange-500 transition"
                  >
                    +91 9390441805
                  </a>
                </div>

              </div>
            </div>

            <div className="mt-10 text-sm text-gray-400">
              Open to opportunities 🚀
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;