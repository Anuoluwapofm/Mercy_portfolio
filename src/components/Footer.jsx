import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/anuoluwapofm",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mercy-oyedele-588639311",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/mercee.official?igsh=OGJucGJpNjBjNGl1", // Update with your link
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@mercylove233?_r=1&_t=ZS-95866hkwLy8", // Update with your link
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://x.com/Mercy_dev25",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#0f172a] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* BRAND SECTION */}
          <div className="text-center md:text-left">
            <div className="text-3xl font-black tracking-tighter mb-4">
              Mercy<span className="text-blue-500">.</span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Frontend Developer specializing in building exceptional digital
              experiences with React and React Native.
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              Follow Me
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-slate-800/50 flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1.5 transition-all duration-300 border border-slate-700/50"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-1">
              Navigation
            </p>
            <nav className="flex gap-6 text-sm font-bold">
              <a
                href="#home"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#projects"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>

        {/* COPYRIGHT LINE */}
        <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-medium">
            © {currentYear} Mercy Oyedele. All rights reserved.
          </p>
          <p className="text-slate-600 text-[10px] uppercase tracking-widest">
            Built with ❤️ & React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
