"use client";

const footerLinks = {
  explore: [
    "Learning resources",
    "Experts profiles",
    "Support",
    "Blog",
    "Newsletter",
  ],
  legal: ["Help", "Privacy Policy", "Terms & Condition"],
};

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#00153d] text-white py-14 px-8 md:px-16 lg:px-[clamp(2rem,10.5vw,202px)]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-6 max-w-xs">
          <div>
            <span
              className="font-finger text-3xl"
              style={{ fontFamily: "var(--font-finger-paint), cursive" }}
            >
              <span className="text-[#008cff]">S</span>
              <span className="text-[#fafafa]">age</span>
              <span className="text-[#008cff]">N</span>
              <span className="text-[#fafafa]">est</span>
            </span>
            <p className="font-dm text-[#8f8fa3] text-lg mt-1">
              Made in India for the World!
            </p>
          </div>
          {/* Social icons */}
          <div className="flex gap-3">
            {[
              { icon: <LinkedInIcon />, label: "LinkedIn" },
              { icon: <InstagramIcon />, label: "Instagram" },
              { icon: <FacebookIcon />, label: "Facebook" },
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                aria-label={social.label}
                className="bg-[#0649c6] rounded-full w-10 h-10 flex items-center justify-center text-white hover:scale-110 hover:bg-[#0540b0] transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <a
            href="mailto:contact@glofluent.com"
            className="font-dm text-[#8f8fa3] text-lg underline hover:text-white transition-colors"
          >
            contact@glofluent.com
          </a>
        </div>

        {/* Links */}
        <div className="flex gap-12 lg:gap-20 flex-wrap">
          <div className="flex flex-col gap-3">
            <p className="font-dm font-semibold text-white text-lg mb-1">
              Explore
            </p>
            {footerLinks.explore.map((link) => (
              <a
                key={link}
                href="#"
                className="font-dm text-[#c6c6d3] text-lg hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-dm font-semibold text-white text-lg mb-1">
              Legal
            </p>
            {footerLinks.legal.map((link) => (
              <a
                key={link}
                href="#"
                className="font-dm text-[#c6c6d3] text-lg hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10">
        <p className="font-dm text-[#8f8fa3] text-base text-center">
          Copyright © 2025 Glofluent Vidyatech Pvt. Ltd. All rights reserved
        </p>
      </div>
    </footer>
  );
}
