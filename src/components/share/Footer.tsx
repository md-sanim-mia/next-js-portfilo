"use client";

import {
  ArrowUp,
  Facebook,
  Github,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const footerLinks = {
    services: [
      { name: "Web Development", href: "#" },
      { name: "UI/UX Design", href: "#" },
      { name: "Mobile Apps", href: "#" },
      { name: "E-commerce", href: "#" },
      { name: "API Development", href: "#" },
    ],
    company: [
      { name: "About Me", href: "#" },
      { name: "Portfolio", href: "#" },
      { name: "Resume", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Templates", href: "#" },
      { name: "Tools", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", name: "Facebook" },
    { icon: <Linkedin size={20} />, href: "#", name: "LinkedIn" },
    { icon: <Github size={20} />, href: "#", name: "GitHub" },
    { icon: <Instagram size={20} />, href: "#", name: "Instagram" },
  ];

  return (
    <div>
      <footer className="relative bg-gradient-to-b from-[#212428] to-[#1a1d21] text-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#ff014f] blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#ff014f] blur-3xl"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Newsletter Section */}
          <div
            className={`py-16 transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ff014f]/20 to-transparent rounded-3xl blur-md"></div>
              <div className="relative bg-[#2a2d32] rounded-2xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      Subscribe to My Newsletter
                    </h3>
                    <p className="text-gray-400">
                      Get the latest updates, articles, and resources.
                    </p>
                  </div>
                  <div className="w-full md:w-auto">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full sm:w-64 bg-[#1a1d21] border border-[#3a3d42] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff014f]/50 focus:border-transparent transition-all duration-300"
                      />
                      <button className="group relative inline-flex items-center justify-center gap-2 bg-[#1a1d21] text-white px-6 py-3 rounded-xl overflow-hidden transition-all duration-300">
                        <span className="absolute inset-0 bg-gradient-to-r from-[#ff014f] to-[#d11e53] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                        <span className="relative">Subscribe</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div
            className={`py-16 transition-all duration-1000 delay-200 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-[#ff014f] to-[#d11e53] p-[2px]">
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#1a1d21]">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Profile"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <span className="font-bold text-xl tracking-wider">
                    Md Sanim Mia
                  </span>
                </div>
                <p className="text-gray-400 mb-6 max-w-md">
                  I'm a passionate developer creating modern web applications
                  with cutting-edge technologies. Let's build something amazing
                  together.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Mail size={16} />
                    <span>hasansanim562@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Phone size={16} />
                    <span>+880 1780498329</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin size={16} />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      aria-label={social.name}
                      className="w-10 h-10 bg-[#2a2d32] rounded-lg flex items-center justify-center hover:bg-[#ff014f] transition-all duration-300 hover:-translate-y-1"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-bold mb-6 relative">
                  Services
                  <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#ff014f] rounded-full"></span>
                </h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-lg font-bold mb-6 relative">
                  Company
                  <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#ff014f] rounded-full"></span>
                </h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-lg font-bold mb-6 relative">
                  Resources
                  <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#ff014f] rounded-full"></span>
                </h4>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className={`border-t border-[#3a3d42] py-8 transition-all duration-1000 delay-400 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <span>© 2024 SANIM. Made with</span>
                <Heart size={16} className="text-[#ff014f] animate-pulse" />
                <span>by Jone Lee</span>
              </div>
              <div className="flex items-center gap-6 text-gray-400">
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-[#ff014f] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-[#ff014f]/20 transition-all duration-300 hover:-translate-y-1 z-50"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-white" />
          </button>
        )}
      </footer>
    </div>
  );
};

export default Footer;
