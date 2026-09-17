import React from "react";
import { StarIcon, ShieldCheckIcon } from "./Icons";

interface Testimonial {
  name: string;
  location: string;
  tour: string;
  date: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Eleanor & David Thornton",
    location: "Boston, Massachusetts, USA",
    tour: "Royal London Highlights (4 Hours)",
    date: "August 2024",
    quote: "Our cabbie, John, was an absolute treasure! He had the green badge and told historical anecdotes that you would never find in guidebooks. Being able to look straight up through the glass roof at Big Ben while sitting in traffic-free bus lanes made this the highlight of our UK vacation."
  },
  {
    name: "The Morrison Family",
    location: "Sydney, Australia",
    tour: "Harry Potter & Secret London Tour",
    date: "July 2024",
    quote: "Traveling with two teenagers and elderly grandparents can be exhausting, but the black cab seated all six of us in absolute comfort. John stepped out to take magnificent family photos at Platform 9¾ and Leadenhall Market. Exceptional value compared to booking individual bus tickets."
  },
  {
    name: "Marcus Vance",
    location: "Edinburgh, Scotland",
    tour: "Heathrow (LHR) Airport Transfer & City Tour",
    date: "September 2024",
    quote: "After a long transatlantic flight, walking out of Heathrow Terminal 2 to find our driver holding a name board was pure relief. Smooth, silent electric drive straight to our Kensington hotel. Punctual, professional, and immaculate vehicle."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="section-padding testimonials-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-eyebrow">Verified Guest Feedback</span>
          <h2 className="section-title">What Our Guests Say</h2>
          <p className="section-description">
            Rated 4.98 out of 5 across more than 1,200 verified independent guest reviews from 
            travelers across the globe.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} size={16} className="text-gold" />
                ))}
                <span className="verified-tag">
                  <ShieldCheckIcon size={13} className="text-gold" />
                  <span>Verified Traveler</span>
                </span>
              </div>

              <blockquote className="testimonial-quote">
                "{t.quote}"
              </blockquote>

              <div className="testimonial-author">
                <div className="author-avatar-initials">
                  {t.name.split(" ")[0][0]}{t.name.split(" ")[1] ? t.name.split(" ")[1][0] : ""}
                </div>
                <div className="author-details">
                  <strong className="author-name">{t.name}</strong>
                  <span className="author-location">{t.location}</span>
                  <span className="author-tour">{t.tour} &bull; {t.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
