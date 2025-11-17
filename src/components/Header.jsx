"use client";

import React, { useState } from "react";
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


  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur shadow-sm z-40">
      <div className="flex items-center justify-center space-x-6">
        {/* Click to Call */}
        <a
          href="tel:+447471012326"
          className="text-center text-sm text-[#009EE3] py-1 hover:text-[#68ccf7] transition"
        >
          +44 7471 012326
        </a>

        {/* Click to Email */}
        <a
          href="mailto:director@sukhisaathisupport.co.uk"
          className="text-center text-sm text-[#009EE3] py-1 hover:text-[#68ccf7] transition"
        >
          director@sukhisaathisupport.co.uk
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={Logo} alt="logo" className="w-15 h-10 rounded-full object-contain" />
          <div>
            <div className="text-sm text-[#009EE3] font-semibold">
              SukhiSaathi Support
            </div>
            <div className="text-xs text-gray-500">Care | Companionship | Independence</div>
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
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/services-home-care" className="block text-gray-700 hover:text-[#009EE3]">
                          Home Care
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/disability-support" className="block text-gray-700 hover:text-[#009EE3]">
                          Disability Support
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/companionship" className="block text-gray-700 hover:text-[#009EE3]">
                          Companionship Care
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/respite" className="block text-gray-700 hover:text-[#009EE3]">
                          Respite Care
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>

            {/* Required by Radix */}
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
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/about" className="block text-gray-700 hover:text-[#009EE3]">
                          About Us
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/about?section=commitment" className="block text-gray-700 hover:text-[#009EE3]">
                          How We Work
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/about?section=working" className="block text-gray-700 hover:text-[#009EE3]">
                          Working With Us
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>

            {/* Required by Radix */}
            <NavigationMenuViewport className="absolute top-full left-0 w-full z-50" />
          </NavigationMenu>

          {/* NORMAL LINKS */}
          <Link to="/how-we-care" className="hover:text-[#009EE3]">How We Care</Link>
          <Link to="/jobs" className="hover:text-[#009EE3]">Jobs</Link>
          <Link to="/why-work-in-care" className="hover:text-[#009EE3]">Why Work in Care</Link>

          <Link to="/contact" className="bg-[#009EE3] text-white px-4 py-2 rounded-md shadow hover:opacity-95">
            Contact
          </Link>
        </nav>

        {/* MOBILE */}
        <MobileMenu />

      </div>
    </header>
  );
}
