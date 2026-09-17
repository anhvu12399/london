export interface VehicleFeature {
  title: string;
  description: string;
}

export interface VehicleModel {
  name: string;
  badge: string;
  tagline: string;
  passengers: number;
  luggage: string;
  powertrain: string;
  features: string[];
  specs: {
    seating: string;
    luggageCapacity: string;
    accessibility: string;
    power: string;
    connectivity: string;
    roof: string;
  };
}

export const FLEET_DATA: VehicleModel[] = [
  {
    name: "LEVC TX Electric London Cab",
    badge: "Flagship Luxury Fleet",
    tagline: "Ultra-quiet zero-emission luxury with panoramic glass skyview roof",
    passengers: 6,
    luggage: "3 Large Suitcases + 3 Cabin Bags",
    powertrain: "eCity Electric Powertrain with Onboard Generator",
    features: [
      "Panoramic glass roof offering vertical city views",
      "Spacious face-to-face seating for 6 passengers",
      "Fold-out integrated wheelchair accessibility ramp",
      "High-output dual-zone passenger climate control",
      "Fast USB-C charging sockets and onboard Wi-Fi",
      "Acoustic isolation cabin with driver intercom"
    ],
    specs: {
      seating: "6 Full Adult Passengers in Comfort",
      luggageCapacity: "Generous flat floor luggage bay & trunk",
      accessibility: "Built-in ramp, swivel seat, step & grab handles",
      power: "Whisper-quiet zero emissions in central London",
      connectivity: "Multi-device fast USB-A & USB-C ports",
      roof: "Panoramic anti-glare tinted skyview glass"
    }
  },
  {
    name: "Classic LTI TX4 London Cab",
    badge: "British Heritage Icon",
    tagline: "The world-famous silhouette that defined London's streets for decades",
    passengers: 5,
    luggage: "2 Large Suitcases + 3 Cabin Bags",
    powertrain: "Euro 6 Clean Diesel Engine",
    features: [
      "Authentic classic British taxi profile and design",
      "Generous headroom and legroom for 5 guests",
      "Intercom speaker system for clear tour commentary",
      "Wheelchair ramp and accessible step entry",
      "Classic pull-down jump seats and wide door openings"
    ],
    specs: {
      seating: "5 Adult Passengers (3 rear bench, 2 jump seats)",
      luggageCapacity: "Front luggage compartment & rear boot",
      accessibility: "Deployable boarding ramp and grab rails",
      power: "Transport for London compliant clean engine",
      connectivity: "12V charging ports",
      roof: "Insulated classic coach roof"
    }
  }
];
