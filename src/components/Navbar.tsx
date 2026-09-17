"use client";

import React, { useState } from "react";
import { TaxiIcon, PhoneIcon, MenuIcon, CloseIcon, ArrowRightIcon } from "./Icons";

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Brand Identity - Authentic British Cabbie Guild Emblem */}
        <a href="#" className="brand-logo" aria-label="London Black Taxi Tours Home">
          <div className="brand-icon-wrap">
            <TaxiIcon size={24} className="brand-taxi-icon" />
          </div>
          <div className="brand-text">
            <span className="brand-name">LONDON BLACK TAXI TOURS</span>
            <span className="brand-tagline">The Knowledge Certified Guides</span>
          </div>
        </a>

        {/* Desktop Navigation - Balanced Single-Line Layout */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            <li><a href="#tours" className="nav-item">Private Tours</a></li>
            <li><a href="#transfers" className="nav-item">Airport Transfers</a></li>
            <li><a href="#fleet" className="nav-item">The Fleet</a></li>
            <li><a href="#why-us" className="nav-item">Why Us</a></li>
            <li><a href="#how-it-works" className="nav-item">How It Works</a></li>
            <li><a href="#faqs" className="nav-item">FAQ</a></li>
          </ul>
        </nav>

        {/* Header Actions - Elegant Phone & Booking Button */}
        <div className="header-actions">
          <a href="tel:+442036335262" className="header-phone-btn" title="Call our London dispatch">
            <PhoneIcon size={16} className="text-gold" />
            <div className="phone-details">
              <span className="phone-label">Call Dispatch</span>
              <span className="phone-num">020 3633 5262</span>
            </div>
          </a>

          <a href="#quote-section" className="header-cta-btn">
            <span>Request a Quote</span>
            <ArrowRightIcon size={14} />
          </a>

          <button 
            type="button"
            className="mobile-menu-btn" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-nav-list">
            <li><a href="#quote-section" onClick={() => setMobileOpen(false)}>Get a Quote & Book</a></li>
            <li><a href="#tours" onClick={() => setMobileOpen(false)}>Private Tours</a></li>
            <li><a href="#transfers" onClick={() => setMobileOpen(false)}>Airport Transfers</a></li>
            <li><a href="#fleet" onClick={() => setMobileOpen(false)}>The Fleet</a></li>
            <li><a href="#why-us" onClick={() => setMobileOpen(false)}>Why Us</a></li>
            <li><a href="#how-it-works" onClick={() => setMobileOpen(false)}>How It Works</a></li>
            <li><a href="#faqs" onClick={() => setMobileOpen(false)}>FAQ</a></li>
          </ul>

          <div className="mobile-drawer-footer">
            <a href="tel:+442036335262" className="btn-primary w-full">
              <PhoneIcon size={16} />
              <span>Call +44 20 3633 5262</span>
            </a>
            <a href="mailto:info@londonblacktaxitours.com" className="mobile-email-link">
              info@londonblacktaxitours.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
