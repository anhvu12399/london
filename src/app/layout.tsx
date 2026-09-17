import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://londonblacktaxitours.co.uk"),
  title: "London Black Taxi Tours | Private Sightseeing & Executive Transfers",
  description: "Experience London through the eyes of a certified Green Badge cabbie. Private bespoke sightseeing tours, airport transfers, and excursions in iconic London Black Cabs with panoramic glass roofs. Fixed vehicle rates for up to 6 passengers.",
  keywords: [
    "London Black Taxi Tours",
    "Private London Taxi Tour",
    "London Cabbie Sightseeing",
    "The Knowledge London Cab",
    "Heathrow Airport Black Taxi Transfer",
    "Gatwick Black Cab Transfer",
    "Royal London Tour",
    "Harry Potter London Cab Tour",
    "Wheelchair Accessible London Tours"
  ],
  authors: [{ name: "London Black Taxi Tours" }],
  openGraph: {
    title: "London Black Taxi Tours | Private Sightseeing & Executive Transfers",
    description: "Private London sightseeing tours guided by licensed Green Badge cabbies in luxury electric black cabs with panoramic glass roofs.",
    url: "https://londonblacktaxitours.co.uk",
    siteName: "London Black Taxi Tours",
    images: [
      {
        url: "/images/hero-taxi-westminster.jpg",
        width: 1200,
        height: 630,
        alt: "London Black Taxi at Westminster with Big Ben"
      }
    ],
    locale: "en_GB",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
