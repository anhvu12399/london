export interface TourItem {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  passengers: string;
  startingPrice: string;
  rating: string;
  reviewsCount: number;
  badge?: string;
  highlights: string[];
  description: string;
}

export const TOURS_DATA: TourItem[] = [
  {
    id: "london-highlights",
    title: "The Royal London & Iconic Landmarks Tour",
    subtitle: "The quintessential first-timer experience",
    duration: "3 - 4 Hours",
    passengers: "Up to 6 Passengers",
    startingPrice: "£240",
    rating: "5.0",
    reviewsCount: 342,
    badge: "Most Popular",
    highlights: [
      "Buckingham Palace & Changing of the Guard",
      "Tower of London & Tower Bridge",
      "Westminster Abbey & Houses of Parliament",
      "St Paul's Cathedral & Trafalgar Square",
      "Kensington Palace & Royal Albert Hall"
    ],
    description: "Witness London's most revered monuments and royal residences with your private Green Badge guide. Step out at key landmarks for framed photographs while hearing firsthand royal heritage anecdotes."
  },
  {
    id: "secret-london",
    title: "Secret London & Hidden Medieval Gems",
    subtitle: "Alleys, Roman ruins, and forgotten crypts",
    duration: "3 Hours",
    passengers: "Up to 6 Passengers",
    startingPrice: "£230",
    rating: "4.9",
    reviewsCount: 189,
    badge: "Unique Curated",
    highlights: [
      "St Dunstan in the East overgrown church ruin",
      "2,000-year-old Roman wall remnants",
      "Leadenhall Market & hidden Victorian passageways",
      "The oldest tavern in the City of London",
      "Knights Templar church and cloistered courtyards"
    ],
    description: "Venture down cobblestone lanes inaccessible to tour buses. Unveil hidden courtyards, Roman foundations, and atmospheric centuries-old taverns nestled in the heart of modern London."
  },
  {
    id: "harry-potter",
    title: "Harry Potter & Film Magic Locations",
    subtitle: "A cinematic voyage across the wizarding world",
    duration: "3.5 Hours",
    passengers: "Up to 6 Passengers",
    startingPrice: "£250",
    rating: "5.0",
    reviewsCount: 275,
    badge: "Family Favorite",
    highlights: [
      "King's Cross Station & Platform 9¾ photo point",
      "Entrance to the Leaky Cauldron & Diagon Alley",
      "The Ministry of Magic phone booth location",
      "Grimmauld Place (Sirius Black's ancestral home)",
      "Millennium Bridge (Death Eater attack site)"
    ],
    description: "Follow in the footsteps of Harry, Ron, and Hermione. Visit real-world film sets and inspiration sites across London, paired with behind-the-scenes cinematic lore told by your private guide."
  },
  {
    id: "jack-the-ripper",
    title: "Jack the Ripper & Victorian East End Noir",
    subtitle: "Autumn 1888 historical crime mystery tour",
    duration: "2.5 - 3 Hours",
    passengers: "Up to 6 Passengers",
    startingPrice: "£220",
    rating: "4.9",
    reviewsCount: 214,
    badge: "Evening Special",
    highlights: [
      "Atmospheric Whitechapel gaslit cobblestones",
      "The Ten Bells historic Victorian public house",
      "Original 1888 crime scenes & Scotland Yard files",
      "Spitalfields market & Christ Church architecture",
      "Historical criminological theories and suspects"
    ],
    description: "An evening journey through foggy Victorian London. Unravel the unsolved enigma of 1888 with authentic archival evidence and chilling social history presented with dignity and historical rigor."
  },
  {
    id: "windsor-stonehenge",
    title: "Windsor Castle, Stonehenge & Roman Bath",
    subtitle: "Full-day royal and ancient heritage excursion",
    duration: "8 - 10 Hours",
    passengers: "Up to 6 Passengers",
    startingPrice: "£580",
    rating: "5.0",
    reviewsCount: 164,
    badge: "Full Day Trip",
    highlights: [
      "Windsor Castle state apartments & St George's Chapel",
      "Stonehenge prehistoric megalithic stone circle",
      "City of Bath Roman thermal baths & Georgian Crescent",
      "Scenic countryside drive through Wiltshire downs",
      "Relaxed pub lunch in a historic English village"
    ],
    description: "Escape the metropolis in the whisper-quiet comfort of an electric black cab. Experience 5,000 years of British history from prehistoric stone circles to royal state residences."
  },
  {
    id: "custom-bespoke",
    title: "Tailored Bespoke Hourly Hire & Photography",
    subtitle: "Your personal London itinerary on demand",
    duration: "Flexible (Min 3 Hours)",
    passengers: "Up to 6 Passengers",
    startingPrice: "£75 / hr",
    rating: "5.0",
    reviewsCount: 142,
    badge: "100% Customized",
    highlights: [
      "Custom pickup & drop-off anywhere in Greater London",
      "Dedicated photo stops tailored to your schedule",
      "Art galleries, vintage fashion, or music heritage",
      "Seamless bus lane access to bypass traffic delays",
      "Luggage accommodation and climate-controlled comfort"
    ],
    description: "Design your dream day out in London. Whether visiting fashion boutiques in Mayfair, Beatles Abbey Road studios, or private family ancestral addresses, your cabbie accommodates every wish."
  }
];

export const AIRPORT_TRANSFERS = [
  {
    airport: "Heathrow Airport (LHR)",
    terminals: "Terminals 2, 3, 4 & 5",
    fixedPrice: "From £95",
    typicalTime: "45 - 60 min",
    details: "Meet & Greet inside arrivals with personal name board, flight tracking, and 60 min complimentary waiting."
  },
  {
    airport: "Gatwick Airport (LGW)",
    terminals: "North & South Terminals",
    fixedPrice: "From £135",
    typicalTime: "70 - 85 min",
    details: "Direct motorway route with live traffic bypass, premium luggage capacity, and doorstep drop-off."
  },
  {
    airport: "London City Airport (LCY)",
    terminals: "Main Terminal",
    fixedPrice: "From £75",
    typicalTime: "30 - 45 min",
    details: "Immediate curbside or arrivals pickup for corporate travelers connecting to Canary Wharf or Central London."
  },
  {
    airport: "Stansted Airport (STN)",
    terminals: "Main Terminal",
    fixedPrice: "From £145",
    typicalTime: "75 - 90 min",
    details: "Dedicated private transfer with flight monitoring and room for up to 6 passengers with full luggage."
  },
  {
    airport: "Southampton Cruise Terminal",
    terminals: "All Cruise Docks (Horizon, Mayflower, Ocean, City)",
    fixedPrice: "From £260",
    typicalTime: "110 min",
    details: "Door-to-quay luxury transfers for transatlantic Queen Mary 2, Royal Caribbean, and Princess cruise departures."
  }
];
