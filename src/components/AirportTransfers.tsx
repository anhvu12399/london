import React from "react";
import Image from "next/image";
import { AIRPORT_TRANSFERS } from "@/data/tours";
import { ShieldCheckIcon, ClockIcon, MapPinIcon, ArrowRightIcon, CheckIcon } from "./Icons";

export const AirportTransfers: React.FC = () => {
  return (
    <section className="section-padding transfers-section" id="transfers">
      <div className="container">
        <div className="transfers-hero-grid">
          <div className="transfers-hero-text">
            <span className="section-eyebrow">London Executive Transit</span>
            <h2 className="section-title">London Airport & Cruise Port Transfers</h2>
            <p className="section-description">
              Punctual, stress-free transfers between Central London and all major UK airports. 
              Your driver monitors flight telemetry in real-time, greets you inside arrivals with a 
              personalized name board, and assists with all heavy luggage directly to your cab.
            </p>

            <div className="transfers-benefits-list">
              <div className="benefit-item">
                <CheckIcon size={16} className="text-gold" />
                <span><strong>60 Minutes Complimentary Waiting Time</strong> at all airport arrivals</span>
              </div>
              <div className="benefit-item">
                <CheckIcon size={16} className="text-gold" />
                <span><strong>Inside Meet & Greet Service</strong> included as standard</span>
              </div>
              <div className="benefit-item">
                <CheckIcon size={16} className="text-gold" />
                <span><strong>Live Flight Tracking</strong> for early arrivals or delayed landings</span>
              </div>
              <div className="benefit-item">
                <CheckIcon size={16} className="text-gold" />
                <span><strong>Room for 6 Passengers</strong> with extensive luggage capacity</span>
              </div>
            </div>

            <div className="transfers-cta-wrap">
              <a href="#quote-section" className="btn-primary">
                Book Airport Transfer
              </a>
              <a href="tel:+442036335262" className="btn-call-outline">
                Call +44 20 3633 5262
              </a>
            </div>
          </div>

          <div className="transfers-hero-media">
            <div className="transfers-image-frame">
              <Image 
                src="/images/tower-bridge-cab.jpg" 
                alt="London Black Taxi crossing Tower Bridge" 
                width={800}
                height={450}
                className="transfers-img"
              />
              <div className="transfers-image-badge">
                <ShieldCheckIcon size={16} className="text-gold" />
                <span>Fixed All-Inclusive Fares Guaranteed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Airport Route Cards */}
        <div className="airports-cards-grid">
          {AIRPORT_TRANSFERS.map((item, idx) => (
            <div key={idx} className="airport-card">
              <div className="airport-card-top">
                <div className="airport-icon-pin">
                  <MapPinIcon size={18} />
                </div>
                <div>
                  <h3 className="airport-name">{item.airport}</h3>
                  <span className="airport-terminals">{item.terminals}</span>
                </div>
              </div>

              <p className="airport-details">{item.details}</p>

              <div className="airport-card-meta">
                <div className="meta-time">
                  <ClockIcon size={14} className="text-muted" />
                  <span>Transit: {item.typicalTime}</span>
                </div>
                <div className="meta-price">
                  <span className="price-tag">{item.fixedPrice}</span>
                </div>
              </div>

              <a href="#quote-section" className="btn-airport-quote">
                <span>Reserve Transfer</span>
                <ArrowRightIcon size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
