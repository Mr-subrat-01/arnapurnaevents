// Configuration file for Annapurna Events
// This file contains all the configurable values for the website
// Update these values as needed for your business
// Environment variables can override these values

export const config = {
  // Company Information
  company: {
    title: process.env.NEXT_PUBLIC_SITE_TITLE || "Annapurna Events",
    name: process.env.NEXT_PUBLIC_COMPANY_NAME || "Arnapurna Events",
    tagline: process.env.NEXT_PUBLIC_COMPANY_TAGLINE || "Premier Event Management Services in Bhubaneswar",
    description: process.env.NEXT_PUBLIC_COMPANY_DESCRIPTION || "Professional event management services for weddings, birthdays, corporate events, DJ nights, and more.",
    foundedYear: "2020",
  },

  // Contact Information
  contact: {
    phone: {
      primary: process.env.NEXT_PUBLIC_PHONE_PRIMARY || "+91 XXXXX XXXXX",
      secondary: process.env.NEXT_PUBLIC_PHONE_SECONDARY || "+91 XXXXX XXXXX",
    },
    email: {
      primary:
        process.env.NEXT_PUBLIC_EMAIL_PRIMARY || "info@annapurnaevents.com",
      secondary:
        process.env.NEXT_PUBLIC_EMAIL_SECONDARY ||
        "bookings@annapurnaevents.com",
    },
    address: {
      line1:
        process.env.NEXT_PUBLIC_ADDRESS_LINE_1 || "123, Event Plaza, MG Road",
      line2:
        process.env.NEXT_PUBLIC_ADDRESS_LINE_2 || "Your City, State - 000000",
      country: process.env.NEXT_PUBLIC_ADDRESS_COUNTRY || "India",
      full:
        process.env.NEXT_PUBLIC_ADDRESS_FULL ||
        "123, Event Plaza, MG Road, Your City, State - 000000, India",
    },
  },

  // Business Hours
  businessHours: {
    weekdays:
      process.env.NEXT_PUBLIC_BUSINESS_HOURS_WEEKDAYS || "Mon - Fri: 9AM - 8PM",
    saturday:
      process.env.NEXT_PUBLIC_BUSINESS_HOURS_SATURDAY || "Saturday: 10AM - 6PM",
    sunday:
      process.env.NEXT_PUBLIC_BUSINESS_HOURS_SUNDAY || "Sunday: By Appointment",
  },

  // Social Media Links
  social: {
    facebook:
      process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK ||
      "https://facebook.com/annapurnaevents",
    instagram:
      process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ||
      "https://instagram.com/annapurnaevents",
    youtube:
      process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE ||
      "https://youtube.com/@annapurnaevents",
    linkedin:
      process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN ||
      "https://linkedin.com/company/annapurnaevents",
  },

  // Google Maps
  maps: {
    embedUrl:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.121813214429!2d73.87373287495659!3d18.563892982542426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
  },

  // Company Statistics
  stats: {
    eventsCompleted: process.env.NEXT_PUBLIC_STATS_EVENTS_COMPLETED || "500+",
    happyClients: process.env.NEXT_PUBLIC_STATS_HAPPY_CLIENTS || "450+",
    yearsExperience: process.env.NEXT_PUBLIC_STATS_YEARS_EXPERIENCE || "5+",
    successRate: process.env.NEXT_PUBLIC_STATS_SUCCESS_RATE || "98%",
  },

  // Team Information
  team: [
    {
      name: process.env.NEXT_PUBLIC_TEAM_MEMBER_1_NAME || "Priya Sharma",
      role:
        process.env.NEXT_PUBLIC_TEAM_MEMBER_1_ROLE || "Founder & Lead Planner",
      image:
        process.env.NEXT_PUBLIC_TEAM_MEMBER_1_IMAGE ||
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    },
    {
      name: process.env.NEXT_PUBLIC_TEAM_MEMBER_2_NAME || "Rajesh Kumar",
      role: process.env.NEXT_PUBLIC_TEAM_MEMBER_2_ROLE || "Operations Manager",
      image:
        process.env.NEXT_PUBLIC_TEAM_MEMBER_2_IMAGE ||
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
    },
    {
      name: process.env.NEXT_PUBLIC_TEAM_MEMBER_3_NAME || "Anjali Patel",
      role: process.env.NEXT_PUBLIC_TEAM_MEMBER_3_ROLE || "Creative Director",
      image:
        process.env.NEXT_PUBLIC_TEAM_MEMBER_3_IMAGE ||
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali",
    },
    {
      name: process.env.NEXT_PUBLIC_TEAM_MEMBER_4_NAME || "Vikram Singh",
      role: process.env.NEXT_PUBLIC_TEAM_MEMBER_4_ROLE || "Client Relations",
      image:
        process.env.NEXT_PUBLIC_TEAM_MEMBER_4_IMAGE ||
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
    },
  ],

  // Copyright
  copyright: {
    year: process.env.NEXT_PUBLIC_COPYRIGHT_YEAR || "2025",
    company: process.env.NEXT_PUBLIC_COMPANY_NAME || "Arnapurna Events",
  },

  // EmailJS Configuration (use environment variables for these)
  emailjs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
  },
} as const;

// Helper functions to get specific values
export const getCompanyName = () => config.company.name;
export const getContactInfo = () => config.contact;
export const getBusinessHours = () => config.businessHours;
export const getSocialLinks = () => config.social;
export const getStats = () => config.stats;
export const getTeam = () => config.team;
export const getCopyright = () => config.copyright;
