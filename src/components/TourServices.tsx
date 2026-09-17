import React from "react";
import { TOURS_DATA } from "@/data/tours";
import { ClockIcon, UsersIcon, StarIcon, CheckIcon, ArrowRightIcon } from "./Icons";

export const TourServices: React.FC = () => {
  return (
    <section className="section-padding tours-section" id="tours">
      <div className="container">
        <div className="section-header-center">
          <span className="section-eyebrow">Curated Sightseeing Excursions</span>
          <h2 className="section-title">Our Private London Black Taxi Tours</h2>
          <p className="section-description">
            Each private tour is conducted at your leisure. Step out for framed photography, enjoy 
            captivating historical storytelling, and relax in climate-controlled privacy.
          </p>
        </div>

        <div className="tours-grid">
          {TOURS_DATA.map((tour) => (
            <div key={tour.id} className="tour-card">
              <div className="tour-card-header">
                {tour.badge && <span className="tour-badge">{tour.badge}</span>}
                <div className="tour-rating">
                  <StarIcon size={14} className="text-gold" />
                  <span>{tour.rating}</span>
                  <span className="reviews-count">({tour.reviewsCount})</span>
                </div>
              </div>

              <div className="tour-card-body">
                <h3 className="tour-title">{tour.title}</h3>
                <p className="tour-subtitle">{tour.subtitle}</p>

                <div className="tour-meta-pills">
                  <div className="tour-meta-pill">
                    <ClockIcon size={14} />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="tour-meta-pill">
                    <UsersIcon size={14} />
                    <span>{tour.passengers}</span>
                  </div>
                </div>

                <p className="tour-description">{tour.description}</p>

                <div className="tour-highlights-box">
                  <h4 className="highlights-title">Tour Stops & Highlights:</h4>
                  <ul className="highlights-list">
                    {tour.highlights.slice(0, 4).map((h, i) => (
                      <li key={i}>
                        <CheckIcon size={13} className="text-gold" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="tour-card-footer">
                <div className="tour-pricing">
                  <span className="price-label">Vehicle Rate:</span>
                  <span className="price-amount">{tour.startingPrice}</span>
                  <span className="price-sub">Up to 6 guests</span>
                </div>

                <a href="#quote-section" className="btn-book-tour">
                  <span>Book Tour</span>
                  <ArrowRightIcon size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
