"use client";

import React, { useState } from "react";
import { FAQS_DATA } from "@/data/faqs";
import { ChevronDownIcon, MailIcon, PhoneIcon } from "./Icons";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section-padding faqs-section" id="faqs">
      <div className="container">
        <div className="section-header-center">
          <span className="section-eyebrow">Clear Answers</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Everything you need to know about booking, private tour itineraries, passenger capacity, 
            and airport transfers with London Black Taxi Tours.
          </p>
        </div>

        <div className="faqs-container">
          <div className="faqs-accordion">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? "open" : ""}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <span className={`faq-chevron ${isOpen ? "rotated" : ""}`}>
                      <ChevronDownIcon size={20} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="faqs-help-box">
            <div className="help-box-content">
              <h3>Have a Special Request or Custom Route?</h3>
              <p>
                Our London dispatch team is ready to design your custom itinerary or provide instant quotes.
              </p>
            </div>
            <div className="help-box-actions">
              <a href="mailto:info@londonblacktaxitours.com" className="btn-secondary">
                <MailIcon size={16} />
                <span>info@londonblacktaxitours.com</span>
              </a>
              <a href="tel:+442036335262" className="btn-primary">
                <PhoneIcon size={16} />
                <span>+44 20 3633 5262</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
