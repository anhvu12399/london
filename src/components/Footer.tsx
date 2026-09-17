import React from "react";
import { PhoneIcon, MailIcon, WhatsAppIcon, MapPinIcon, ShieldCheckIcon, ClockIcon } from "./Icons";

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col footer-col-brand">
            <div className="footer-logo">
              <div className="logo-crest">
                <span className="crest-monogram">LB</span>
              </div>
              <div className="brand-text">
                <span className="brand-title">LONDON BLACK TAXI TOURS</span>
                <span className="brand-sub">The Knowledge Certified Guides</span>
              </div>
            </div>

            <p className="footer-about">
              London’s premier licensed private sightseeing service. Guided exclusively by certified 
              TfL Green Badge drivers in iconic, modern electric black cabs with panoramic glass roofs.
            </p>

            <div className="footer-tfl-badge">
              <ShieldCheckIcon size={18} className="text-gold" />
              <span>Licensed by Transport for London (TfL)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#quote-section">Request a Quote</a></li>
              <li><a href="#tours">Private Sightseeing Tours</a></li>
              <li><a href="#why-us">The Knowledge Difference</a></li>
              <li><a href="#fleet">LEVC TX Electric Fleet</a></li>
              <li><a href="#transfers">Airport & Cruise Transfers</a></li>
              <li><a href="#how-it-works">Booking Process</a></li>
              <li><a href="#faqs">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Tour Categories */}
          <div className="footer-col">
            <h4 className="footer-heading">Popular Tours</h4>
            <ul className="footer-links">
              <li><a href="#quote-section">Royal London Highlights (3 - 4h)</a></li>
              <li><a href="#quote-section">Secret London Medieval Gems</a></li>
              <li><a href="#quote-section">Harry Potter Film Locations</a></li>
              <li><a href="#quote-section">Jack the Ripper 1888 Noir</a></li>
              <li><a href="#quote-section">Windsor Castle & Stonehenge</a></li>
              <li><a href="#quote-section">Heathrow & Gatwick Transfers</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col">
            <h4 className="footer-heading">Direct Contact</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <PhoneIcon size={16} className="text-gold" />
                <div>
                  <span className="contact-label">Telephone Dispatch:</span>
                  <a href="tel:+442036335262" className="contact-value">+44 20 3633 5262</a>
                </div>
              </div>

              <div className="footer-contact-item">
                <MailIcon size={16} className="text-gold" />
                <div>
                  <span className="contact-label">Email Enquiries:</span>
                  <a href="mailto:info@londonblacktaxitours.com" className="contact-value">info@londonblacktaxitours.com</a>
                </div>
              </div>

              <div className="footer-contact-item">
                <WhatsAppIcon size={16} className="text-gold" />
                <div>
                  <span className="contact-label">WhatsApp Fast Chat:</span>
                  <a 
                    href="https://wa.me/442036335262?text=Hello%20London%20Black%20Taxi%20Tours" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    +44 20 3633 5262
                  </a>
                </div>
              </div>

              <div className="footer-contact-item">
                <ClockIcon size={16} className="text-gold" />
                <div>
                  <span className="contact-label">Tour Hours:</span>
                  <span className="contact-value">7 Days a Week: 07:00 – 22:00 GMT</span>
                </div>
              </div>

              <div className="footer-contact-item">
                <MapPinIcon size={16} className="text-gold" />
                <div>
                  <span className="contact-label">Service Area:</span>
                  <span className="contact-value">Greater London, Windsor, Stonehenge & UK</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>&copy; 2026 London Black Taxi Tours. All Rights Reserved. London, United Kingdom.</p>
          </div>
          <div className="footer-bottom-right">
            <span>Website: londonblacktaxitours.co.uk</span>
            <span className="sep">&bull;</span>
            <span>TfL Compliant Operator</span>
            <span className="sep">&bull;</span>
            <span>Zero Emoji Certified Luxury Interface</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
