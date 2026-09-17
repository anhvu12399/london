"use client";

import React, { useState } from "react";
import { CheckIcon, ShieldCheckIcon, PhoneIcon, ArrowRightIcon, CalendarIcon, MapPinIcon, ClockIcon, UsersIcon } from "./Icons";

export const HeroSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    service: "Royal London Highlights (3 - 4 Hours)",
    pickupLocation: "",
    date: "",
    time: "10:00 AM (Recommended)",
    passengers: "Up to 6 Passengers (One Flat Rate)",
    notes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="hero-section" id="quote-section">
      <div className="hero-background-overlay" />
      
      <div className="container hero-container">
        {/* Left Column: Authoritative Editorial Copy */}
        <div className="hero-content">
          <div className="hero-badge">
            <ShieldCheckIcon size={15} className="text-gold" />
            <span>Transport for London (TfL) Licensed</span>
          </div>

          <h1 className="hero-title">
            Authentic London Black Taxi Tours &amp; <span className="gold-gradient-text">Private Transfers</span>
          </h1>

          <p className="hero-lead">
            Discover London through the eyes of a certified "The Knowledge" Green Badge cabbie. 
            Private historical sightseeing, airport transfers, and bespoke day trips in 
            whisper-quiet electric cabs with panoramic glass roofs.
          </p>

          <div className="hero-features-list">
            <div className="hero-feature-item">
              <div className="feature-check-icon">
                <CheckIcon size={14} />
              </div>
              <div>
                <strong>Mastery of "The Knowledge"</strong>
                <p>Guided by cabbies who spent 3 to 5 years memorizing London's 25,000 streets.</p>
              </div>
            </div>

            <div className="hero-feature-item">
              <div className="feature-check-icon">
                <CheckIcon size={14} />
              </div>
              <div>
                <strong>Up to 6 Passengers — One Flat Rate</strong>
                <p>No per-person tickets. Entire family travels together in private comfort.</p>
              </div>
            </div>

            <div className="hero-feature-item">
              <div className="feature-check-icon">
                <CheckIcon size={14} />
              </div>
              <div>
                <strong>Panoramic Glass Skyview Roofs</strong>
                <p>Vertical views of Big Ben, Tower Bridge, and St Paul's from every seat.</p>
              </div>
            </div>

            <div className="hero-feature-item">
              <div className="feature-check-icon">
                <CheckIcon size={14} />
              </div>
              <div>
                <strong>100% Wheelchair &amp; Stroller Accessible</strong>
                <p>Built-in fold-out ramps, wide doors, and dedicated restraint anchors.</p>
              </div>
            </div>
          </div>

          <div className="hero-cta-group">
            <a href="tel:+442036335262" className="hero-call-button">
              <div className="call-icon-wrap">
                <PhoneIcon size={20} />
              </div>
              <div className="call-text-wrap">
                <span className="call-sub">Direct Line to Dispatch</span>
                <span className="call-number">+44 20 3633 5262</span>
              </div>
            </a>

            <div className="hero-guarantee-tag">
              <ShieldCheckIcon size={18} className="text-gold" />
              <span>Guaranteed Fixed Fares &bull; No Traffic Surcharges</span>
            </div>
          </div>
        </div>

        {/* Right Column: Professional Luxury Quote Card */}
        <div className="hero-form-wrapper">
          <div className="quote-form-card">
            <div className="form-header">
              <span className="form-eyebrow">Direct Booking &amp; Quote</span>
              <h2 className="form-title">Request a Tour Quote</h2>
              <p className="form-subtitle">All-inclusive fixed rate confirmed within minutes. No obligation.</p>
            </div>

            {submitted ? (
              <div className="form-success-state">
                <div className="success-icon-wrap">
                  <CheckIcon size={32} />
                </div>
                <h3>Quote Request Confirmed</h3>
                <p>
                  Thank you, <strong>{formData.fullname || "valued guest"}</strong>. Your tour itinerary request for 
                  <strong> {formData.service}</strong> on <strong>{formData.date || "your selected date"}</strong> has been received.
                </p>
                <div className="success-meta-box">
                  <p>Our senior dispatch team will send your confirmed itinerary &amp; fixed rate to:</p>
                  <p className="highlight-contact">{formData.email || "info@londonblacktaxitours.com"}</p>
                  <p className="highlight-contact">{formData.phone || "+44 20 3633 5262"}</p>
                </div>
                <div className="success-actions">
                  <a 
                    href={`https://wa.me/442036335262?text=Hello%20London%20Black%20Taxi%20Tours%2C%20I%20just%20submitted%20a%20quote%20request%20for%20${encodeURIComponent(formData.service)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-confirm"
                  >
                    Confirm via WhatsApp Now
                  </a>
                  <button 
                    type="button" 
                    className="btn-reset-form"
                    onClick={() => setSubmitted(false)}
                  >
                    Modify Request Details
                  </button>
                </div>
              </div>
            ) : (
              <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                  {/* Full Name */}
                  <div className="form-group col-span-2">
                    <label htmlFor="fullname">Your Full Name</label>
                    <input 
                      type="text" 
                      id="fullname" 
                      name="fullname" 
                      placeholder="e.g. Elizabeth Hastings" 
                      required
                      value={formData.fullname}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="e.g. elizabeth@example.com" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Phone */}
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      placeholder="+44 7700 900123" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Tour or Service Selection */}
                  <div className="form-group col-span-2">
                    <label htmlFor="service">Select Tour or Transfer Service</label>
                    <div className="input-field-wrap">
                      <select 
                        id="service" 
                        name="service" 
                        value={formData.service}
                        onChange={handleChange}
                        className="custom-select"
                      >
                        <optgroup label="London Sightseeing Tours">
                          <option value="Royal London Highlights (3 - 4 Hours)">
                            Royal London Highlights Tour (3 - 4 Hours)
                          </option>
                          <option value="Secret London & Hidden Medieval Gems (3 Hours)">
                            Secret London & Hidden Medieval Gems (3 Hours)
                          </option>
                          <option value="Harry Potter Magic & Filming Locations (3.5 Hours)">
                            Harry Potter Magic & Filming Locations (3.5 Hours)
                          </option>
                          <option value="Jack the Ripper & Victorian East End Noir (3 Hours)">
                            Jack the Ripper & Victorian East End Noir (3 Hours)
                          </option>
                          <option value="Windsor Castle, Stonehenge & Bath Day Excursion (8 - 10 Hours)">
                            Windsor Castle, Stonehenge & Bath Day Excursion (8 - 10 Hours)
                          </option>
                          <option value="Bespoke Hourly Hire (Custom Route, Min 3 Hours)">
                            Bespoke Hourly Hire (Custom Route, Min 3 Hours)
                          </option>
                        </optgroup>
                        <optgroup label="Airport & Cruise Port Transfers">
                          <option value="Heathrow Airport (LHR) Transfer">
                            Heathrow Airport (LHR) Private Transfer
                          </option>
                          <option value="Gatwick Airport (LGW) Transfer">
                            Gatwick Airport (LGW) Private Transfer
                          </option>
                          <option value="London City Airport (LCY) Transfer">
                            London City Airport (LCY) Private Transfer
                          </option>
                          <option value="Stansted Airport (STN) Transfer">
                            Stansted Airport (STN) Private Transfer
                          </option>
                          <option value="Southampton Cruise Terminal Transfer">
                            Southampton Cruise Terminal Private Transfer
                          </option>
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  {/* Pickup Location */}
                  <div className="form-group col-span-2">
                    <label htmlFor="pickupLocation">Pickup Location</label>
                    <div className="input-field-wrap icon-left">
                      <MapPinIcon size={16} className="field-icon-left" />
                      <input 
                        type="text" 
                        id="pickupLocation" 
                        name="pickupLocation" 
                        placeholder="Hotel name, London address, or Airport Terminal" 
                        required
                        value={formData.pickupLocation}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Date */}
                  <div className="form-group">
                    <label htmlFor="date">Tour Date</label>
                    <div className="input-field-wrap">
                      <input 
                        type="date" 
                        id="date" 
                        name="date" 
                        required
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div className="form-group">
                    <label htmlFor="time">Preferred Time</label>
                    <div className="input-field-wrap">
                      <select 
                        id="time" 
                        name="time" 
                        value={formData.time}
                        onChange={handleChange}
                        className="custom-select"
                      >
                        <option value="08:00 AM">08:00 AM</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="10:00 AM (Recommended)">10:00 AM (Recommended)</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="01:00 PM">01:00 PM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="04:00 PM (Twilight Tour)">04:00 PM (Twilight Tour)</option>
                        <option value="06:30 PM (Evening Noir)">06:30 PM (Evening Noir)</option>
                      </select>
                    </div>
                  </div>

                  {/* Passengers */}
                  <div className="form-group col-span-2">
                    <label htmlFor="passengers">Number of Passengers (Up to 6 per cab)</label>
                    <div className="input-field-wrap">
                      <select 
                        id="passengers" 
                        name="passengers" 
                        value={formData.passengers}
                        onChange={handleChange}
                        className="custom-select"
                      >
                        <option value="1 Passenger (Private Entire Cab)">1 Passenger (Private Entire Cab)</option>
                        <option value="2 Passengers (Couples Private Tour)">2 Passengers (Couples Private Tour)</option>
                        <option value="3 Passengers">3 Passengers</option>
                        <option value="4 Passengers (Family / Friends)">4 Passengers (Family / Friends)</option>
                        <option value="5 Passengers">5 Passengers</option>
                        <option value="6 Passengers (Maximum Capacity - Best Value)">6 Passengers (Maximum Capacity - Best Value)</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="form-group col-span-2">
                    <label htmlFor="notes">Special Requests (Optional)</label>
                    <textarea 
                      id="notes" 
                      name="notes" 
                      rows={2} 
                      placeholder="Wheelchair ramp needed, child booster seat, specific landmark stops..."
                      value={formData.notes}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-submit-row">
                  <button type="submit" className="btn-submit-quote">
                    <span>Request Fixed-Rate Quote</span>
                    <ArrowRightIcon size={16} />
                  </button>
                  <p className="form-disclaimer">
                    100% Free &bull; No Hidden Booking Fees &bull; Instant Confirmation
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
