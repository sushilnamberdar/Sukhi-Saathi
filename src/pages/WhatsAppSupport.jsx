import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppSupport() {
  return (
    <a
      href="https://wa.me/+447471012326" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50"
    >
      <div className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all cursor-pointer animate-pulse-glow">
        <FaWhatsapp size={32} />
      </div>
    </a>
  );
}
