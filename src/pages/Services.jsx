import React from "react";
import "../App.css";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "I build fast, responsive, and scalable web applications using React, Tailwind CSS, and modern JavaScript (ES6+).",
    icon: "💻",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Creating cross-platform mobile experiences for iOS and Android using React Native with a focus on native performance.",
    icon: "📱",
  },
  {
    id: 3,
    title: "UI/UX Implementation",
    description:
      "Transforming complex Figma designs into pixel-perfect, interactive interfaces with smooth CSS and Framer Motion animations.",
    icon: "🎨",
  },
  {
    id: 4,
    title: "Responsive Web Design",
    description:
      "Ensuring your site looks stunning and functions perfectly on everything from a small smartphone to a giant 4K monitor.",
    icon: "📐",
  },
  {
    id: 5,
    title: "Performance & SEO",
    description:
      "Optimizing load speeds and accessibility to ensure your application ranks well and provides a frustration-free experience.",
    icon: "⚡",
  },
  {
    id: 6,
    title: "API Integration",
    description:
      "Connecting frontend interfaces with RESTful APIs and Firebase to create dynamic, data-driven web applications.",
    icon: "🔗",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen bg-slate-50 py-24 px-6 md:px-12 lg:px-20"
    >
      {/* HEADER */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          MY <span className="text-blue-600">SERVICES</span>
        </h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
          I provide specialized frontend solutions that bridge the gap between
          design and high-performance engineering.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="group bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 relative overflow-hidden"
          >
            {/* Subtle Background Glow on Hover */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* ICON */}
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:bg-blue-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner">
              {service.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
              {service.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-slate-500 text-[1rem] leading-relaxed font-medium">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* CALL TO ACTION */}
      <div className="text-center mt-24">
        <div className="inline-flex flex-col items-center gap-6">
          <p className="text-slate-500 font-bold tracking-widest text-xs uppercase">
            Have a project in mind?
          </p>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black hover:bg-slate-900 transition-all shadow-xl shadow-blue-200 hover:shadow-slate-200 uppercase text-sm tracking-widest transform hover:-translate-y-1"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
