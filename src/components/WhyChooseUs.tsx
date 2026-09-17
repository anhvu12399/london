import React from "react";
import Image from "next/image";
import { CertificateIcon, SparklesIcon, CompassIcon, UsersIcon, CheckIcon } from "./Icons";

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="section-padding why-choose-section" id="why-us">
      <div className="container">
        <div className="section-header-center">
          <span className="section-eyebrow">The London Difference</span>
          <h2 className="section-title">Why Choose London Black Taxi Tours?</h2>
          <p className="section-description">
            Forget crowded, impersonal coach buses and rigid schedules. Discover London with 
            the prestige, comfort, and unmatched expertise that only an authentic London cabbie can provide.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="why-choose-grid">
          <div className="why-card">
            <div className="why-card-icon">
              <CertificateIcon size={28} />
            </div>
            <h3 className="why-card-title">"The Knowledge" Certified Drivers</h3>
            <p className="why-card-text">
              Every London black cab driver spends 3 to 5 years memorizing all 25,000 streets, 
              100,000 landmarks, and hidden historical avenues. You are guided by a genuine, 
              born-and-bred London storyteller.
            </p>
            <ul className="why-card-list">
              <li><CheckIcon size={14} /> Full TfL background and CRB/DBS vetting</li>
              <li><CheckIcon size={14} /> Official London Tour Guiding accreditations</li>
            </ul>
          </div>

          <div className="why-card">
            <div className="why-card-icon">
              <SparklesIcon size={28} />
            </div>
            <h3 className="why-card-title">Panoramic Skyview Glass Roofs</h3>
            <p className="why-card-text">
              Our flagship LEVC TX electric cabs feature edge-to-edge transparent panoramic glass roofs. 
              Gaze straight up at the gothic pinnacles of Westminster, the dome of St Paul's, and the Shard 
              from the comfort of your leather seat.
            </p>
            <ul className="why-card-list">
              <li><CheckIcon size={14} /> Unobstructed upward photo angles</li>
              <li><CheckIcon size={14} /> UV-tinted glass for climate-controlled comfort</li>
            </ul>
          </div>

          <div className="why-card">
            <div className="why-card-icon">
              <CompassIcon size={28} />
            </div>
            <h3 className="why-card-title">Dedicated Bus Lane Privileges</h3>
            <p className="why-card-text">
              Unlike private hire vehicles and tour buses, London Black Cabs have legal priority access 
              to London's designated bus and taxi lanes. Glide past standstill traffic through Whitehall, 
              Mayfair, and the City without delay.
            </p>
            <ul className="why-card-list">
              <li><CheckIcon size={14} /> Effortless bypass of central London gridlock</li>
              <li><CheckIcon size={14} /> Maximizes your valuable sightseeing time</li>
            </ul>
          </div>

          <div className="why-card">
            <div className="why-card-icon">
              <UsersIcon size={28} />
            </div>
            <h3 className="why-card-title">Up to 6 Passengers — One Flat Rate</h3>
            <p className="why-card-text">
              Why pay £60 to £90 per person for an impersonal group tour bus? Our private tours are priced 
              strictly per vehicle for up to 6 guests, delivering supreme luxury, privacy, and outstanding value.
            </p>
            <ul className="why-card-list">
              <li><CheckIcon size={14} /> No per-passenger ticket charges</li>
              <li><CheckIcon size={14} /> 100% private to your family or travel group</li>
            </ul>
          </div>
        </div>

        {/* Highlight Feature Banner with Authentic Photo */}
        <div className="guide-showcase-banner">
          <div className="guide-photo-col">
            <div className="guide-photo-frame">
              <Image 
                src="/images/cabbie-guide.jpg" 
                alt="Authentic Licensed London Black Taxi Tour Guide" 
                width={700}
                height={525}
                className="guide-img"
              />
              <div className="guide-photo-caption">
                <span className="caption-badge">Master of The Knowledge</span>
                <span className="caption-text">Licensed Transport for London Guide</span>
              </div>
            </div>
          </div>

          <div className="guide-content-col">
            <span className="guide-pretitle">The Human Touch of London</span>
            <h3 className="guide-heading">Meet Your Driver: A True London Living Legend</h3>
            <p className="guide-paragraph">
              Since 1654, London's hackney carriages have stood as the gold standard of urban transport. 
              Our drivers are not automated navigation followers; they know the back alleys of Samuel Pepys, 
              the hidden pubs where Charles Dickens penned masterpieces, and the quietest scenic spots for your 
              family photos away from the tourist masses.
            </p>
            <div className="guide-specs-grid">
              <div className="guide-stat">
                <span className="stat-number">25,000+</span>
                <span className="stat-label">London Streets Memorized</span>
              </div>
              <div className="guide-stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Licensed TfL Operators</span>
              </div>
              <div className="guide-stat">
                <span className="stat-number">6 Guests</span>
                <span className="stat-label">Private Spacious Cabin</span>
              </div>
            </div>
            <div className="guide-quote-cta">
              <a href="#quote-section" className="btn-primary">
                Book Your Tour With a Licensed Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
