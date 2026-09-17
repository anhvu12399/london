import React from "react";
import { MailIcon, PhoneIcon, WhatsAppIcon, ShieldCheckIcon } from "./Icons";

export const TopBar: React.FC = () => {
  return (
    <div className="top-bar">
      <div className="container top-bar-inner">
        <div className="top-bar-left">
          <div className="top-bar-badge">
            <ShieldCheckIcon size={14} className="text-gold" />
            <span>Transport for London (TfL) Licensed Operator</span>
          </div>
        </div>

        <div className="top-bar-right">
          <a href="mailto:info@londonblacktaxitours.com" className="top-bar-contact">
            <MailIcon size={14} className="text-gold" />
            <span>info@londonblacktaxitours.com</span>
          </a>

          <span className="top-bar-divider" />

          <a 
            href="https://wa.me/442036335262?text=Hello%20London%20Black%20Taxi%20Tours" 
            target="_blank" 
            rel="noopener noreferrer"
            className="top-bar-contact"
          >
            <WhatsAppIcon size={14} className="text-gold" />
            <span>WhatsApp</span>
          </a>

          <span className="top-bar-divider" />

          <a href="tel:+442036335262" className="top-bar-contact phone-highlight">
            <PhoneIcon size={14} className="text-gold" />
            <span>+44 20 3633 5262</span>
          </a>
        </div>
      </div>
    </div>
  );
};
