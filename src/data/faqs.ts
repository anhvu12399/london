export interface FaqItem {
  question: string;
  answer: string;
  category: "booking" | "tours" | "vehicles" | "accessibility";
}

export const FAQS_DATA: FaqItem[] = [
  {
    question: "How many passengers can fit inside a London Black Cab?",
    answer: "Our modern LEVC TX electric cabs comfortably seat up to 6 adult passengers in a spacious, face-to-face seating configuration. Our classic TX4 cabs seat up to 5 passengers. The price quoted is per vehicle, not per person, making our private tours exceptional value for families and small travel groups.",
    category: "vehicles"
  },
  {
    question: "Do you pick up directly from our hotel, apartment, or airport?",
    answer: "Yes, all our private tours include door-to-door pickup and drop-off anywhere in Central London (Zones 1-2). For pickups outside Central London, Heathrow, Gatwick, or cruise terminals, we provide seamless door-to-door transfers at fixed transparent rates.",
    category: "booking"
  },
  {
    question: "What qualifications do your tour guides hold?",
    answer: "Every driver on our team is a licensed Transport for London (TfL) taxi driver who has mastered 'The Knowledge'—the world's most rigorous geographical exam requiring 3 to 5 years of full-time memorization of 25,000 streets and 100,000 landmarks. In addition, our guides hold official London taxi tour guiding qualifications with in-depth historical knowledge.",
    category: "tours"
  },
  {
    question: "Are your vehicles wheelchair and stroller accessible?",
    answer: "Yes, 100% of our fleet is fully wheelchair accessible. Each cab features an integrated fold-out ramp, wide passenger doors, a high ceiling, and specialized restraint anchor systems. Wheelchairs, motorized chairs, and folded strollers are accommodated with ease at no extra charge.",
    category: "accessibility"
  },
  {
    question: "Can we customize our itinerary on the day of the tour?",
    answer: "Absolutely. Because this is your private tour, the itinerary is completely flexible. If you would like to spend more time taking photos at Tower Bridge, visit a specific Beatles location, or stop at a historic pub for lunch, your driver will gladly adapt the route to your preferences.",
    category: "tours"
  },
  {
    question: "What happens if it rains during our tour?",
    answer: "London Black Cabs are the ideal all-weather sightseeing vehicle. You remain completely dry and warm in climate-controlled comfort, while the massive panoramic glass roof provides vertical views of Big Ben, Westminster Abbey, and skyscrapers without getting wet. When you wish to step out for photos, your driver carries umbrellas and parks steps from each landmark.",
    category: "tours"
  },
  {
    question: "Are there any hidden costs or parking fees?",
    answer: "No. Our quotes are 100% all-inclusive fixed rates. They cover the vehicle, licensed driver-guide, fuel, Central London Congestion Charge, ULEZ fees, and taxes. There are no surprise meters running in traffic.",
    category: "booking"
  },
  {
    question: "How do airport arrival pickups work?",
    answer: "For airport pickups, your driver monitors your incoming flight in real time to adjust for any early arrivals or delays. We provide an inside 'Meet & Greet' service where your driver waits at the arrivals barrier holding a personalized name board, assists with luggage, and escorts you straight to the cab.",
    category: "booking"
  }
];
