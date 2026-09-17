import React from "react";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export const FloatingActions: React.FC = () => {
  return (
    <div className="floating-actions-container" aria-label="Quick contact channels">
      {/* WhatsApp Quick Chat */}
      <a
        href="https://wa.me/442036335262?text=Hello%20London%20Black%20Taxi%20Tours%2C%20I%20would%20like%20to%20inquire%20about%20a%20tour%20booking."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp-floating"
        title="Chat on WhatsApp (+44 20 3633 5262)"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={26} />
        <span className="floating-label">WhatsApp</span>
      </a>

      {/* Pulsing Phone Call Button */}
      <a
        href="tel:+442036335262"
        className="floating-btn call-floating"
        title="Call Now (+44 20 3633 5262)"
        aria-label="Call Now"
      >
        <PhoneIcon size={24} className="pulsing-phone-icon" />
        <span className="floating-label">Call Now</span>
      </a>
    </div>
  );
};
