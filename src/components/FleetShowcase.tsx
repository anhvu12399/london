"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FLEET_DATA } from "@/data/fleet";
import { UsersIcon, LuggageIcon, SparklesIcon, CheckIcon, WheelchairIcon } from "./Icons";

export const FleetShowcase: React.FC = () => {
  const [activeModel, setActiveModel] = useState(0);
  const vehicle = FLEET_DATA[activeModel];

  return (
    <section className="section-padding fleet-section" id="fleet">
      <div className="container">
        <div className="section-header-center">
          <span className="section-eyebrow">The World's Most Iconic Fleet</span>
          <h2 className="section-title">Our Luxury London Black Cabs</h2>
          <p className="section-description">
            Combining timeless British heritage with cutting-edge comfort. Every vehicle in our fleet 
            is maintained to pristine executive standards, sanitized before every tour, and equipped 
            for all-weather sightseeing.
          </p>
        </div>

        {/* Model Tabs */}
        <div className="fleet-model-tabs">
          {FLEET_DATA.map((item, idx) => (
            <button
              key={idx}
              type="button"
              className={`fleet-tab-btn ${activeModel === idx ? "active" : ""}`}
              onClick={() => setActiveModel(idx)}
            >
              <span className="tab-name">{item.name}</span>
              <span className="tab-badge">{item.badge}</span>
            </button>
          ))}
        </div>

        {/* Active Vehicle Feature View */}
        <div className="fleet-display-grid">
          {/* Left Column: Interior Photo Showcase */}
          <div className="fleet-photo-box">
            <div className="fleet-img-wrapper">
              <Image 
                src="/images/cab-interior.jpg" 
                alt="LEVC TX Electric London Black Taxi Panoramic Roof and 6-Passenger Cabin" 
                width={800}
                height={450}
                className="fleet-main-img"
              />
              <div className="fleet-img-badge">
                <SparklesIcon size={16} className="text-gold" />
                <span>Panoramic Skyview Roof & 6-Seat Cabin</span>
              </div>
            </div>

            <div className="fleet-quick-stats">
              <div className="quick-stat">
                <UsersIcon size={20} className="text-gold" />
                <div>
                  <span className="stat-label">Passenger Capacity</span>
                  <strong className="stat-val">{vehicle.passengers} Adult Passengers</strong>
                </div>
              </div>

              <div className="quick-stat">
                <LuggageIcon size={20} className="text-gold" />
                <div>
                  <span className="stat-label">Luggage Room</span>
                  <strong className="stat-val">{vehicle.luggage}</strong>
                </div>
              </div>

              <div className="quick-stat">
                <WheelchairIcon size={20} className="text-gold" />
                <div>
                  <span className="stat-label">Accessibility</span>
                  <strong className="stat-val">100% Ramp Accessible</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Specifications & Feature List */}
          <div className="fleet-details-box">
            <div className="fleet-header-meta">
              <span className="vehicle-badge">{vehicle.badge}</span>
              <h3 className="vehicle-name">{vehicle.name}</h3>
              <p className="vehicle-tagline">{vehicle.tagline}</p>
            </div>

            <div className="features-checklist">
              <h4 className="features-title">Passenger Amenities:</h4>
              <ul className="features-ul">
                {vehicle.features.map((feat, i) => (
                  <li key={i} className="feature-li">
                    <CheckIcon size={16} className="text-gold" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="specs-table-box">
              <h4 className="specs-title">Technical & Comfort Specifications:</h4>
              <dl className="specs-dl">
                <div className="spec-row">
                  <dt>Seating Layout</dt>
                  <dd>{vehicle.specs.seating}</dd>
                </div>
                <div className="spec-row">
                  <dt>Roof Design</dt>
                  <dd>{vehicle.specs.roof}</dd>
                </div>
                <div className="spec-row">
                  <dt>Accessibility Features</dt>
                  <dd>{vehicle.specs.accessibility}</dd>
                </div>
                <div className="spec-row">
                  <dt>Power & Emissions</dt>
                  <dd>{vehicle.specs.power}</dd>
                </div>
                <div className="spec-row">
                  <dt>Connectivity & Power</dt>
                  <dd>{vehicle.specs.connectivity}</dd>
                </div>
              </dl>
            </div>

            <div className="fleet-cta">
              <a href="#quote-section" className="btn-primary w-full text-center">
                Book This Vehicle for Your Tour
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
