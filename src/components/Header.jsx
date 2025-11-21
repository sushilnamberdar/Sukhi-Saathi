"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import Logo from "../assets/logo.png";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport
} from "./ui/navigation-menu";

import { ChevronDown, ChevronUp } from "lucide-react";

export default function Header() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 20); // shrink on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 bg-white/95 backdrop-blur shadow-sm z-40
        transition-all duration-300
        ${shrink ? "py-1" : "py-3"}
      `}
    >
      {/* Top email bar */}
      <div className="flex items-center justify-center space-x-6">
        <a
          href="mailto:info@sukhisaathisupport.co.uk"
          className="text-center text-sm text-[#009EE3] py-1 hover:text-[#68ccf7] transition"
        >
          info@sukhisaathisupport.co.uk
        </a>
      </div>

      {/* Main navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300">

        {/* Logo */}
        <Link
          to="/"
          className={`
            flex items-center gap-3 transition-all duration-300
            ${shrink ? "scale-90" : "scale-100"}
          `}
        >
          <img
            src={Logo}
            alt="logo"
            className={`
              rounded-full object-contain transition-all duration-300
              ${shrink ? "w-14 h-14" : "w-16 h-16"}
            `}
          />

          <div className="transition-all duration-300">
            <div
              className={`
                font-semibold text-[#009EE3]
                transition-all duration-300
                ${shrink ? "text-sm" : "text-base"}
              `}
            >
              SukhiSaathi Support
            </div>

            <div
              className={`
                text-gray-500 transition-all duration-300
                ${shrink ? "text-[14px]" : "text-xs"}
              `}
            >
              Care | Companionship | Independence
            </div>
          </div>
        </Link>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center gap-6 text-sm">

          {/* SERVICES DROPDOWN */}
          <NavigationMenu className="relative">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="group flex items-center gap-1 text-gray-700 hover:text-[#009EE3] data-[state=open]:text-[#009EE3]">
                  Services
                  <span className="ml-1 transition">
                    <ChevronDown className="h-4 w-4 block group-data-[state=open]:hidden" />
                    <ChevronUp className="h-4 w-4 hidden group-data-[state=open]:block" />
                  </span>
                </NavigationMenuTrigger>

                <NavigationMenuContent className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg border z-50">
                  <ul className="grid w-[250px] gap-3 p-4">
                    <li><NavigationMenuLink asChild><Link to="/home-care" className="block text-gray-700 hover:text-[#009EE3]">Home Care</Link></NavigationMenuLink></li>
                    <li><NavigationMenuLink asChild><Link to="/disability-support" className="block text-gray-700 hover:text-[#009EE3]">Disability Support</Link></NavigationMenuLink></li>
                    <li><NavigationMenuLink asChild><Link to="/companionship" className="block text-gray-700 hover:text-[#009EE3]">Companionship Care</Link></NavigationMenuLink></li>
                    <li><NavigationMenuLink asChild><Link to="/respite" className="block text-gray-700 hover:text-[#009EE3]">Respite Care</Link></NavigationMenuLink></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuViewport className="absolute top-full left-0 w-full z-50" />
          </NavigationMenu>

          {/* ABOUT DROPDOWN */}
          <NavigationMenu className="relative">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="group flex items-center gap-1 text-gray-700 hover:text-[#009EE3] data-[state=open]:text-[#009EE3]">
                  About
                  <span className="ml-1 transition">
                    <ChevronDown className="h-4 w-4 block group-data-[state=open]:hidden" />
                    <ChevronUp className="h-4 w-4 hidden group-data-[state=open]:block" />
                  </span>
                </NavigationMenuTrigger>

                <NavigationMenuContent className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg border z-50">
                  <ul className="grid w-[230px] gap-3 p-4">
                    <li><NavigationMenuLink asChild><Link to="/about" className="block text-gray-700 hover:text-[#009EE3]">About Us</Link></NavigationMenuLink></li>
                    <li><NavigationMenuLink asChild><Link to="/about?section=commitment" className="block text-gray-700 hover:text-[#009EE3]">How We Work</Link></NavigationMenuLink></li>
                    <li><NavigationMenuLink asChild><Link to="/about?section=working" className="block text-gray-700 hover:text-[#009EE3]">Working With Us</Link></NavigationMenuLink></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuViewport className="absolute top-full left-0 w-full z-50" />
          </NavigationMenu>

          {/* Standard Links */}
          <Link to="/how-we-care" className="hover:text-[#009EE3]">How We Care</Link>
          <Link to="/jobs" className="hover:text-[#009EE3]">Jobs</Link>
          <Link to="/why-work-in-care" className="hover:text-[#009EE3]">Why Work in Care</Link>

          <Link to="/contact" className="bg-[#009EE3] text-white px-4 py-2 rounded-md shadow hover:opacity-95">
            Contact
          </Link>
        </nav>

        {/* MOBILE MENU */}
        <MobileMenu />

      </div>
    </header>
  );
}
