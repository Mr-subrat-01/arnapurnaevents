import { config } from "@/lib/config";

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://www.arnapurnaevents.in",
          name: config.company.name,
          alternateName: "AEC BBSR",
          description: config.company.description,
          url: "https://www.arnapurnaevents.in",
          telephone: config.contact.phone.primary,
          email: config.contact.email.primary,
          foundingDate: config.copyright.year,
          image: "https://www.arnapurnaevents.in/assets/33X33_Logo_GOLD.png",
          logo: "https://www.arnapurnaevents.in/assets/33X33_Logo_GOLD.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: config.contact.address.line1,
            addressLocality: "Bhubaneswar",
            addressRegion: "Odisha",
            postalCode: "751019",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "20.2961",
            longitude: "85.8245",
          },
          sameAs: [
            config.social.facebook,
            config.social.instagram,
            config.social.youtube,
            config.social.linkedin,
          ],
          openingHours: [
            "Mo-Fr 09:00-20:00",
            "Sa 10:00-18:00",
          ],
          priceRange: "₹₹₹",
          areaServed: "Bhubaneswar",
        }),
      }}
    />
  );
}