"use client";
import Image from "next/image";
import { useState } from "react";

const Testimonial = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  return (
    <div>
      <div
        className={` transition-all duration-1000 delay-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#ff014f]/20 to-transparent rounded-3xl blur-md"></div>
          <div className="relative bg-[#2a2d32] rounded-2xl p-8 md:p-10">
            <div className=" items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#ff014f]/30">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Client"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-4xl text-[#ff014f] mb-4">"</div>
                <p className="text-lg italic mb-6">
                  Jone is an exceptional developer who delivered our project on
                  time and exceeded our expectations. His technical skills and
                  attention to detail made our website stand out from the
                  competition.
                </p>
                <div>
                  <p className="font-bold text-lg">Sarah Johnson</p>
                  <p className="text-gray-400">CEO, TechStart Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
