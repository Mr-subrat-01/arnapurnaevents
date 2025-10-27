// Configuration file for Annapurna Events
// This file contains all the configurable values for the website
// Update these values as needed for your business
// Environment variables can override these values

export const config = {
  // Company Information
  company: {
    title:
      "Arnapurna Events & Cater (AEC BBSR) - Premier Event Management Services in Bhubaneswar",
    name: "Arnapurna Events & Cater",
    tagline: "Premier Event Management Services in Bhubaneswar",
    description:
      "Professional event management services for weddings, birthdays, corporate events, DJ nights, and more.",
    foundedYear: "2018",
  },

  // Contact Information
  contact: {
    phone: {
      primary: "+91 99376 09076",
      secondary: "+91 93374 19929",
    },
    email: {
      primary: "mail@arnapurnaevents.in",
      secondary: "****************",
    },
    address: {
      line1: "Panchasakha Nagar",
      line2: "Bhubaneswar, Odisha - 751019",
      country: "India",
      full: "Panchasakha Nagar, BBSR, Odisha 751019",
    },
  },

  // Business Hours
  businessHours: {
    weekdays: "Mon - Fri: 9AM - 8PM",
    saturday: "Saturday: 10AM - 6PM",
    sunday: "Sunday: By Appointment",
  },

  // Social Media Links
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61577375545896",
    instagram: "https://www.instagram.com/arnapurnaevents.cater/",
    youtube: "https://www.youtube.com/@ARNAPURNAEVENTSCATER",
    linkedin: "https://www.linkedin.com/company/arnapurna-events-cater/",
  },

  // Google Maps
  maps: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12653.04467457189!2d85.798496!3d20.247484!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7d510000f25%3A0x258c96d4a3f3a445!2sArnapurna%20Events%20%26%20Cater!5e1!3m2!1sen!2sin!4v1761387872301!5m2!1sen!2sin",
  },

  // Company Statistics
  stats: {
    eventsCompleted: "500+",
    happyClients: "450+",
    yearsExperience: "5+",
    successRate: "98%",
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
    year: "2025",
    company: "Arnapurna Events & Cater",
  },

  // EmailJS Configuration
  emailjs: {
    serviceId: "service_axnvlhu",
    templateId: "template_l1yr2fj",
    publicKey: "0bZiLayophQq4bFTl",
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
