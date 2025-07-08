"use client";

import type React from "react";

import { useState, useEffect, useRef, type FormEvent } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const ModernContactSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Contact information
  const contactInfo = [
    {
      id: "email",
      icon: <Mail size={24} />,
      title: "Email",
      value: "hasansanim562@gmail.com",
      link: "mailto:hello@jonelee.dev",
    },
    {
      id: "phone",
      icon: <Phone size={24} />,
      title: "Phone",
      value: "01780498329",
      link: "tel:+15551234567",
    },
    {
      id: "location",
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Dhaka, Bangladesh",
      link: "https://maps.google.com/?q=New+York,USA",
    },
  ];

  // Social media links
  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com",
      name: "LinkedIn",
    },
    { icon: <Github size={20} />, url: "https://github.com", name: "GitHub" },
    {
      icon: <Twitter size={20} />,
      url: "https://twitter.com",
      name: "Twitter",
    },
    {
      icon: <Instagram size={20} />,
      url: "https://instagram.com",
      name: "Instagram",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const sectionTop = rect.top + scrollPosition;
        const relativeScroll = Math.max(0, scrollPosition - sectionTop);
        setScrollY(relativeScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (
      !formState.name ||
      !formState.email ||
      !formState.description ||
      !formState.subject
    ) {
      setFormStatus("error");
      return;
    }
    console.log(formState);

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormState({
        name: "",
        email: "",
        subject: "",
        description: "",
      });

      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    }, 1000);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden  pb-16 md:pb-20 lg:pb-24 bg-gradient-to-b from-[#1a1d21] via-[#212428] to-[#1a1d21]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(255, 1, 79, 0.4) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(255, 1, 79, 0.4) 0%, transparent 40%)",
          }}
        ></div>
        <div
          className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#ff014f] opacity-5 blur-[100px]"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div
          className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#ff014f] opacity-5 blur-[100px]"
          style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div
          className="absolute top-3/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-1 h-1 bg-white rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with modern typography */}
        <div className="text-center mb-20">
          <div
            className={`inline-block transition-all duration-700 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-sm uppercase tracking-[0.2em] text-[#ff014f] bg-[#2a2d32] px-4 py-2 rounded-full inline-block mb-4">
              Get In Touch
            </span>
          </div>
          <h2
            className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-700 delay-100 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Contact
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff014f] to-[#d11e53]">
              Me
            </span>
          </h2>
          <p
            className={`text-gray-400 max-w-2xl mx-auto text-lg transition-all duration-700 delay-200 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Feel free to reach out if you want to collaborate with me, or simply
            have a chat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-5">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-2xl font-bold mb-8 relative inline-flex items-center">
                <span className="w-6 h-6 bg-[#ff014f] rounded-full mr-3"></span>
                Contact Information
              </h3>

              {/* Contact cards */}
              <div className="space-y-6 mb-12">
                {contactInfo.map((item) => (
                  <div
                    key={item.id}
                    className={`relative backdrop-blur-sm bg-[#2a2d32]/40 rounded-2xl p-1 transition-all duration-300 ${
                      activeCard === item.id ? "scale-105" : ""
                    }`}
                    onMouseEnter={() => setActiveCard(item.id)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br from-[#ff014f]/20 to-transparent opacity-30 transition-opacity duration-300 ${
                          activeCard === item.id ? "opacity-60" : ""
                        }`}
                      ></div>
                    </div>

                    <Link
                      href={item.link}
                      className="relative rounded-2xl overflow-hidden backdrop-blur-sm bg-[#1a1d21]/80 p-6 flex items-center gap-4 group"
                    >
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                          activeCard === item.id
                            ? "bg-[#ff014f]"
                            : "bg-[#2a2d32] group-hover:bg-[#3a3d42]"
                        }`}
                      >
                        .{item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-400">{item.value}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Social media links */}
              <div>
                <h3 className="text-2xl font-bold mb-6 relative inline-flex items-center">
                  <span className="w-6 h-6 bg-[#ff014f] rounded-full mr-3"></span>
                  Find Me On
                </h3>

                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-12 h-12 bg-[#2a2d32] rounded-xl flex items-center justify-center hover:bg-[#ff014f] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#ff014f]/20"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div
              className={`relative backdrop-blur-sm bg-[#2a2d32]/40 rounded-3xl p-1 transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff014f]/20 to-transparent opacity-30"></div>
              </div>

              <div className="relative rounded-3xl overflow-hidden backdrop-blur-sm bg-[#1a1d21]/80 p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-8 relative inline-flex items-center">
                  <span className="w-6 h-6 bg-[#ff014f] rounded-full mr-3"></span>
                  Send Me a Message
                </h3>

                {formStatus === "success" ? (
                  <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-6 flex items-center gap-4">
                    <CheckCircle className="text-green-500" size={24} />
                    <div>
                      <h4 className="text-lg font-medium text-green-500">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-gray-300">
                        I'll get back to you as soon as possible.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-gray-300 text-sm">
                          Your Name <span className="text-[#ff014f]">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          className="w-full bg-[#2a2d32] border border-[#3a3d42] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff014f]/50 focus:border-transparent transition-all duration-300"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-gray-300 text-sm"
                        >
                          Your Email <span className="text-[#ff014f]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          className="w-full bg-[#2a2d32] border border-[#3a3d42] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff014f]/50 focus:border-transparent transition-all duration-300"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-gray-300 text-sm"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleInputChange}
                        className="w-full bg-[#2a2d32] border border-[#3a3d42] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff014f]/50 focus:border-transparent transition-all duration-300"
                        placeholder="Project Inquiry"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-gray-300 text-sm"
                      >
                        Your Message <span className="text-[#ff014f]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.description}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full bg-[#2a2d32] border border-[#3a3d42] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff014f]/50 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Hello, I'd like to talk about..."
                        required
                      ></textarea>
                    </div>

                    {formStatus === "error" && (
                      <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 flex items-center gap-3">
                        <AlertCircle className="text-red-500" size={20} />
                        <p className="text-red-500 text-sm">
                          Please fill out all required fields.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="group relative inline-flex items-center gap-2 bg-[#2a2d32] text-white px-8 py-4 rounded-xl overflow-hidden transition-all duration-300"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-[#ff014f] to-[#d11e53] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                      <span className="relative flex items-center gap-2">
                        Send Message
                        <Send
                          size={16}
                          className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* FAQ Section */}
            {/* <div
              className={`mt-12 transition-all duration-1000 delay-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-2xl font-bold mb-8 relative inline-flex items-center">
                <span className="w-6 h-6 bg-[#ff014f] rounded-full mr-3"></span>
                Frequently Asked Questions
              </h3>

              <div className="space-y-6">
                {[
                  {
                    question: "What services do you offer?",
                    answer:
                      "I specialize in web development, focusing on React, Next.js, and full-stack JavaScript applications. I also offer UI/UX design and consultation services.",
                  },
                  {
                    question: "What is your typical project timeline?",
                    answer:
                      "Project timelines vary based on complexity and scope. A simple website might take 2-3 weeks, while a complex web application could take 2-3 months. I'll provide a detailed timeline during our initial consultation.",
                  },
                  {
                    question: "Do you offer maintenance services?",
                    answer:
                      "Yes, I offer ongoing maintenance and support packages for all projects I develop. This includes regular updates, security patches, and technical support.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-[#2a2d32] rounded-2xl p-6 hover:bg-[#3a3d42] transition-all duration-300"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <h4 className="text-lg font-bold mb-3">{faq.question}</h4>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        {/* o<div
          className={`mt-24 transition-all duration-1000 delay-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
        </div> */}
      </div>
    </section>
  );
};

export default ModernContactSection;
