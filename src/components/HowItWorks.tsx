import React from "react";
import { CalendarIcon, ShieldCheckIcon, TaxiIcon, ArrowRightIcon } from "./Icons";

export const HowItWorks: React.FC = () => {
  return (
    <section className="section-padding how-it-works-section" id="how-it-works">
      <div className="container">
        <div className="section-header-center">
          <span className="section-eyebrow">Effortless Private Travel</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-description">
            From initial booking to your hotel doorstep pickup, reserving your private London tour 
            is completely seamless and guaranteed.
          </p>
        </div>

        <div className="hiw-steps-grid">
          {/* Step 1 */}
          <div className="hiw-card">
            <div className="hiw-number">01</div>
            <div className="hiw-icon-wrap">
              <CalendarIcon size={30} />
            </div>
            <h3 className="hiw-title">Choose Your Tour & Date</h3>
            <p className="hiw-text">
              Select from our curated itineraries (Royal London, Secret London, Harry Potter, 
              Stonehenge) or request a tailored hourly route. Choose your date, pickup time, and location.
            </p>
          </div>

          {/* Step 2 */}
          <div className="hiw-card">
            <div className="hiw-number">02</div>
            <div className="hiw-icon-wrap">
              <ShieldCheckIcon size={30} />
            </div>
            <h3 className="hiw-title">Instant Confirmation & Cabbie Match</h3>
            <p className="hiw-text">
              Receive your confirmed all-inclusive vehicle quote with no hidden charges. We pair you 
              with an experienced, certified Green Badge London guide tailored to your interests.
            </p>
          </div>

          {/* Step 3 */}
          <div className="hiw-card">
            <div className="hiw-number">03</div>
            <div className="hiw-icon-wrap">
              <TaxiIcon size={30} />
            </div>
            <h3 className="hiw-title">Hotel Doorstep Pickup & Tour</h3>
            <p className="hiw-text">
              Your driver arrives at your Central London hotel lobby, apartment, or airport terminal in a 
              pristine black cab. Sit back, take photos through the glass roof, and enjoy London.
            </p>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="hiw-bottom-cta">
          <div className="cta-left">
            <h3>Ready to Experience London the Authentic Way?</h3>
            <p>Our tour advisors are on hand 7 days a week from 07:00 to 22:00 GMT to assist with all requests.</p>
          </div>
          <div className="cta-right">
            <a href="#quote-section" className="btn-primary">
              <span>Book Your Private Tour</span>
              <ArrowRightIcon size={16} />
            </a>
            <a href="tel:+442036335262" className="btn-call-outline">
              Call +44 20 3633 5262
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
