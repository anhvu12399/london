import React from "react";
import { ShieldCheckIcon, CertificateIcon, UsersIcon, WheelchairIcon, StarIcon } from "./Icons";

export const TrustBadges: React.FC = () => {
  return (
    <section className="trust-strip">
      <div className="container trust-strip-inner">
        <div className="trust-item">
          <div className="trust-icon-box">
            <ShieldCheckIcon size={22} className="text-gold" />
          </div>
          <div className="trust-text">
            <strong>TfL Licensed & Regulated</strong>
            <span>Official London Hackney Carriage standards</span>
          </div>
        </div>

        <div className="trust-item">
          <div className="trust-icon-box">
            <CertificateIcon size={22} className="text-gold" />
          </div>
          <div className="trust-text">
            <strong>Mastery of "The Knowledge"</strong>
            <span>Certified expert London historical guides</span>
          </div>
        </div>

        <div className="trust-item">
          <div className="trust-icon-box">
            <UsersIcon size={22} className="text-gold" />
          </div>
          <div className="trust-text">
            <strong>Fixed Vehicle Price</strong>
            <span>One price for 1 to 6 passengers</span>
          </div>
        </div>

        <div className="trust-item">
          <div className="trust-icon-box">
            <WheelchairIcon size={22} className="text-gold" />
          </div>
          <div className="trust-text">
            <strong>100% Accessible Fleet</strong>
            <span>Integrated fold-out wheelchair ramps</span>
          </div>
        </div>

        <div className="trust-item">
          <div className="trust-icon-box">
            <StarIcon size={22} className="text-gold" />
          </div>
          <div className="trust-text">
            <strong>4.98 / 5 Rating</strong>
            <span>Over 1,200+ five-star verified traveler reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};
