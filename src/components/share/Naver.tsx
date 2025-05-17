"use client";
import { Menu, User, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import profile from "..//..//..//public/sanims.png";
const Naver = () => {
  let session;
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "All Project" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
    (session && { href: "/dashboard", label: "Dashboard" }) || null,
  ].filter((item) => item !== null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <div className="h-16 ">
        <nav className=" fixed z-50 w-full top-0 mx-auto border-gray-800  bg-gradient-to-br from-[#1a1d21] to-[#212428] backdrop-blur supports-[backdrop-filter]:bg-[#1a1d21]/60  ">
          <div className="max-w-screen-xl  py-3 mx-auto">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div
                    className={`flex items-center gap-2 transition-all duration-500 `}
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-[#ff014f] to-[#d11e53] p-[2px]">
                      <div className="w-full h-full rounded-full overflow-hidden bg-[#212428]">
                        <Image
                          src={profile}
                          alt="Profile"
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <span className="font-bold text-xl tracking-wider">
                      SANIM
                    </span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden cursor-pointer"
                  onClick={toggleMenu}
                >
                  {isOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </div>
              <div
                className={`absolute inset-x-0 z-20 w-1/2 px-6 py-4  transition-all duration-300 ease-in-out lg:h-min  h-screen  border-gray-800  bg-gradient-to-br from-[#1a1d21] to-[#212428] backdrop-blur supports-[backdrop-filter]:bg-[#1a1d21]/60   lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "opacity-0 -translate-x-full"
                }`}
              >
                <div className="flex flex-col -mx-4 lg:flex-row lg:items-center  lg:mx-8">
                  {navLinks?.map((item) => (
                    <Link
                      key={item?.href}
                      href={item?.href}
                      className={`${
                        pathname === item?.href
                          ? "text-sm font-medium lg:mb-0 mb-5 text-[#ff014f] transition-colors mx-3"
                          : "text-sm font-medium lg:mb-0 mb-5 text-gray-200 hover:text-[#ff014f] transiti.on-colors mx-3"
                      }`}
                    >
                      {item?.label}
                    </Link>
                  ))}
                </div>

                {session ? (
                  <Button className="bg-red-500 hover:bg-white">Logout</Button>
                ) : (
                  <Link
                    className="flex  hover:text-[#ff014f] items-center text-sm gap-0.5"
                    href={"/login"}
                  >
                    Sing In <User />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Naver;

//  <header className="fixed mx-auto h-16 top-0 z-50 w-full border-b border-gray-800 bg-gradient-to-br from-[#1a1d21] to-[#212428] backdrop-blur supports-[backdrop-filter]:bg-[#1a1d21]/60">
//         <div className="container max-w-screen-xl mx-auto flex h-16 items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div
//               className={`flex items-center gap-2 transition-all duration-500 `}
//             >
//               <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-[#ff014f] to-[#d11e53] p-[2px]">
//                 <div className="w-full h-full rounded-full overflow-hidden bg-[#212428]">
//                   <Image
//                     src="/placeholder.svg?height=40&width=40"
//                     alt="Profile"
//                     width={40}
//                     height={40}
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//               <span className="font-bold text-xl tracking-wider">SANIM</span>
//             </div>
//           </div>

//           <div className="flex items-center gap-20">
//             <nav className="hidden md:flex items-center gap-6">
//               <Link
//                 href="#about"
//                 className="text-sm font-medium text-gray-200 hover:text-[#ff014f] transition-colors"
//               >
//                 About
//               </Link>
//               <Link
//                 href="#services"
//                 className="text-sm font-medium text-gray-200 hover:text-[#ff014f] transition-colors"
//               >
//                 Services
//               </Link>
//               <Link
//                 href="#skills"
//                 className="text-sm font-medium text-gray-200 hover:text-[#ff014f] transition-colors"
//               >
//                 Skills
//               </Link>
//               <Link
//                 href="#projects"
//                 className="text-sm font-medium text-gray-200 hover:text-[#ff014f] transition-colors"
//               >
//                 Projects
//               </Link>
//               <Link
//                 href="#contact"
//                 className="text-sm font-medium text-gray-200 hover:text-[#ff014f] transition-colors"
//               >
//                 Contact
//               </Link>
//             </nav>
//             <Link
//               className="hid lg:flex  hover:text-[#ff014f] items-center text-sm gap-0.5"
//               href={"/login"}
//             >
//               Sing In <User />
//             </Link>
//           </div>

//           <Button
//             variant="ghost"
//             size="icon"
//             className="md:hidden cursor-pointer"
//             onClick={toggleMenu}
//           >
//             {isMenuOpen ? (
//               <X className="h-6 w-6" />
//             ) : (
//               <Menu className="h-6 w-6" />
//             )}
//           </Button>
//         </div>

//         {isMenuOpen && (
//           <div className="container h-full w-1/2 bg-gray-400 max-w-screen-xl mx-auto md:hidden py-4 pb-6 border-b border-gray-800">
//             <nav className="flex flex-col space-y-4">
//               <Link
//                 href="#about"
//                 className="text-sm font-medium text-gray-200 hover:text-primary transition-colors"
//                 onClick={toggleMenu}
//               >
//                 About
//               </Link>
//               <Link
//                 href="#services"
//                 className="text-sm font-medium text-gray-200 hover:text-primary transition-colors"
//                 onClick={toggleMenu}
//               >
//                 Services
//               </Link>
//               <Link
//                 href="#skills"
//                 className="text-sm font-medium text-gray-200 hover:text-primary transition-colors"
//                 onClick={toggleMenu}
//               >
//                 Skills
//               </Link>
//               <Link
//                 href="#projects"
//                 className="text-sm font-medium text-gray-200 hover:text-primary transition-colors"
//                 onClick={toggleMenu}
//               >
//                 Projects
//               </Link>
//               <Link
//                 href="#contact"
//                 className="text-sm font-medium text-gray-200 hover:text-primary transition-colors"
//                 onClick={toggleMenu}
//               >
//                 Contact
//               </Link>
//               <Button size="sm" className="w-full">
//                 Resume
//               </Button>
//             </nav>
//           </div>
//         )}
//       </header>
