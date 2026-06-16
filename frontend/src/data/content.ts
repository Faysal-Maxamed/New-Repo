export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  longDescription: string;
  client: string;
  year: string;
  services: string[];
  gallery: string[];
}

export const companyInfo = {
  name: "Guhaad Creatives & Advert",
  shortName: "Guhaad",
  tagline: "Creative Agency",
  overview:
    "Guhaad Creatives & Advert is a full-service creative agency dedicated to helping businesses build strong brands, reach wider audiences, and achieve measurable growth through innovative marketing and advertising solutions.",
  whoWeAre:
    "We are a team of creative thinkers, designers, marketers, videographers, and digital strategists committed to delivering impactful campaigns and professional brand experiences.",
  vision:
    "To become a leading creative and advertising agency recognized for innovation, quality, and results across Somalia and the East African region.",
  mission:
    "To empower businesses through creative storytelling, strategic marketing, and modern digital solutions that drive growth and visibility.",
  futureGoals:
    "To expand our creative services, strengthen our digital capabilities, and become a trusted regional creative partner.",
  phone: "0618240346",
  email: "guhaadcreatives@gmail.com",
  website: "guhaadadvert.com",
  address: "Mogadishu, Somalia",
  social: {
    facebook: "https://facebook.com/guhaadcreatives",
    instagram: "https://instagram.com/guhaadadvert",
    linkedin: "https://linkedin.com/company/guhaadadvert",
  },
};

export const coreValues = [
  { title: "Creativity", description: "We push boundaries to deliver fresh, original ideas that stand out." },
  { title: "Excellence", description: "We hold ourselves to the highest standards in every project we deliver." },
  { title: "Integrity", description: "Honest communication and transparent partnerships guide everything we do." },
  { title: "Innovation", description: "We embrace modern tools and strategies to stay ahead of the curve." },
  { title: "Client Success", description: "Your growth is our priority — we measure success by your results." },
  { title: "Professionalism", description: "Reliable, respectful, and dedicated service from start to finish." },
];

export const whyChooseUs = [
  "Experienced Creative Team",
  "High-Quality Production",
  "Modern Marketing Strategies",
  "Timely Delivery",
  "Customer-Focused Approach",
  "Affordable Business Solutions",
];

export const processSteps = [
  { step: "01", title: "Discovery & Consultation", description: "We learn about your business, goals, and audience through in-depth consultation." },
  { step: "02", title: "Research & Strategy", description: "We analyze your market and craft a tailored creative strategy." },
  { step: "03", title: "Concept Development", description: "Our team develops creative concepts aligned with your brand vision." },
  { step: "04", title: "Design & Production", description: "We bring concepts to life with professional design and production." },
  { step: "05", title: "Review & Feedback", description: "You review the work and we refine until it exceeds expectations." },
  { step: "06", title: "Launch & Delivery", description: "We launch your campaign and deliver all final assets." },
  { step: "07", title: "Continuous Support", description: "Ongoing support to ensure lasting success and growth." },
];

export const industries = [
  "Healthcare",
  "Education",
  "Real Estate",
  "Retail",
  "NGOs",
  "Government Institutions",
  "Technology Companies",
  "Hospitality",
  "Small Businesses",
];

export const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "10+", label: "Services Offered" },
  { value: "5+", label: "Years Experience" },
];

export const services = [
  {
    icon: "Palette",
    title: "Branding & Identity Design",
    description: "Memorable brand identities including logos, brand guidelines, and visual communication systems.",
  },
  {
    icon: "PenTool",
    title: "Graphic Design",
    description: "Professional marketing materials, posters, flyers, and visual content for all platforms.",
  },
  {
    icon: "Share2",
    title: "Social Media Management",
    description: "Strategic social media presence that engages audiences and builds community.",
  },
  {
    icon: "Video",
    title: "Video Production",
    description: "Promotional videos, commercials, corporate videos, interviews, and documentaries.",
  },
  {
    icon: "Film",
    title: "Motion Graphics & Animation",
    description: "Dynamic animated content that captures attention and tells your story.",
  },
  {
    icon: "Camera",
    title: "Photography",
    description: "Professional photography for products, events, portraits, and commercial use.",
  },
  {
    icon: "Megaphone",
    title: "Digital Marketing",
    description: "Social media, paid advertising, content marketing, and strategic campaigns.",
  },
  {
    icon: "Monitor",
    title: "Website Design & Development",
    description: "Modern, responsive, and user-friendly websites tailored to business goals.",
  },
  {
    icon: "FileText",
    title: "Content Creation",
    description: "Compelling copy, visuals, and multimedia content that engages your audience.",
  },
  {
    icon: "Target",
    title: "Advertising Campaign Management",
    description: "End-to-end campaign planning, execution, and performance tracking.",
  },
];

export const featuredServices = [
  {
    icon: "Palette",
    title: "Branding Solutions",
    description:
      "We create memorable brand identities including logos, brand guidelines, marketing materials, and visual communication systems.",
  },
  {
    icon: "Megaphone",
    title: "Digital Marketing",
    description:
      "Our marketing solutions help businesses reach their target audiences through social media, paid advertising, content marketing, and strategic campaigns.",
  },
  {
    icon: "Video",
    title: "Video Production",
    description:
      "We produce promotional videos, commercials, corporate videos, interviews, documentaries, and social media content.",
  },
  {
    icon: "Monitor",
    title: "Website Solutions",
    description:
      "We design and develop modern, responsive, and user-friendly websites tailored to business goals.",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    slug: "brand-identity-campaign",
    title: "Corporate Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop",
    description: "Complete brand identity design for a leading Somali business.",
    longDescription:
      "We developed a comprehensive brand identity including logo design, color palette, typography, brand guidelines, and marketing collateral. The new identity positioned the client as a modern, trustworthy leader in their industry.",
    client: "Confidential Client",
    year: "2025",
    services: ["Brand Identity", "Logo Design", "Brand Guidelines"],
    gallery: [
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1626785774573-4b799314346d?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 2,
    slug: "social-media-campaign",
    title: "Social Media Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    description: "Multi-platform social media campaign with measurable growth results.",
    longDescription:
      "We designed and executed a comprehensive social media strategy across Facebook, Instagram, and LinkedIn. The campaign increased engagement by 200% and significantly expanded the client's online reach.",
    client: "Confidential Client",
    year: "2025",
    services: ["Social Media", "Content Creation", "Analytics"],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 3,
    slug: "promotional-video",
    title: "Promotional Video Production",
    category: "Video Production",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=800&fit=crop",
    description: "High-quality promotional video for product launch campaign.",
    longDescription:
      "From concept to final edit, we produced a compelling promotional video that showcased the client's products and services. The video was used across social media, website, and advertising channels.",
    client: "Confidential Client",
    year: "2024",
    services: ["Video Production", "Motion Graphics", "Editing"],
    gallery: [
      "https://images.unsplash.com/photo-1574714566990-12f42a7f077d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 4,
    slug: "business-website",
    title: "Business Website Design",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop",
    description: "Modern responsive website with seamless user experience.",
    longDescription:
      "We designed and developed a fully responsive business website featuring modern UI/UX, fast loading speeds, and mobile-first design. The site increased online inquiries and strengthened the client's digital presence.",
    client: "Confidential Client",
    year: "2024",
    services: ["Web Design", "Development", "SEO"],
    gallery: [
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 5,
    slug: "event-photography",
    title: "Corporate Event Photography",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=800&fit=crop",
    description: "Professional event coverage and corporate photography.",
    longDescription:
      "We provided comprehensive photography coverage for a major corporate event, delivering high-quality images for marketing, social media, and press releases.",
    client: "Confidential Client",
    year: "2024",
    services: ["Photography", "Event Coverage", "Photo Editing"],
    gallery: [
      "https://images.unsplash.com/photo-1505373877841-8d25f39de3a4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 6,
    slug: "advertising-campaign",
    title: "Advertising Campaign",
    category: "Advertising",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992c1df96?w=1200&h=800&fit=crop",
    description: "Full-service advertising campaign across multiple channels.",
    longDescription:
      "We managed an end-to-end advertising campaign including creative development, media planning, and performance tracking. The campaign delivered strong ROI and increased brand awareness.",
    client: "Confidential Client",
    year: "2025",
    services: ["Campaign Management", "Creative Design", "Media Planning"],
    gallery: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const team = [
  { name: "Creative Director", role: "Leadership & Vision", image: "from-violet-500 to-purple-600" },
  { name: "Design Team", role: "Graphic & Brand Design", image: "from-blue-500 to-indigo-600" },
  { name: "Marketing Team", role: "Digital Strategy", image: "from-emerald-500 to-teal-600" },
  { name: "Production Team", role: "Video & Photography", image: "from-orange-500 to-rose-600" },
];

export const testimonials = [
  {
    quote: "Guhaad Creatives transformed our brand completely. Their creative vision and professionalism exceeded every expectation.",
    author: "Business Client",
    role: "CEO, Mogadishu",
  },
  {
    quote: "The quality of their video production and digital marketing is outstanding. Best creative agency in Somalia.",
    author: "Marketing Director",
    role: "Retail Company",
  },
  {
    quote: "Professional, creative, and always on time. They truly understand modern advertising and deliver results.",
    author: "NGO Representative",
    role: "Program Manager",
  },
];

export const trustedBrands = [
  "Healthcare",
  "Education",
  "Real Estate",
  "Retail",
  "NGOs",
  "Government",
  "Technology",
  "Hospitality",
];

export const oneTimeServices = [
  {
    title: "Logo Design",
    price: "$99",
    duration: "One-time",
    features: [
      "3 unique logo concepts",
      "Unlimited revisions",
      "All file formats (PNG, SVG, PDF)",
      "Brand color palette",
      "Social media kit",
    ],
    popular: false,
  },
  {
    title: "Brand Package",
    price: "$299",
    duration: "One-time",
    features: [
      "Complete brand identity",
      "Logo + typography + colors",
      "Business card design",
      "Brand guidelines document",
      "Marketing materials",
      "30-day support",
    ],
    popular: true,
  },
  {
    title: "Website Launch",
    price: "$499",
    duration: "One-time",
    features: [
      "Custom 5-page website",
      "Mobile responsive design",
      "SEO optimization",
      "Contact form integration",
      "2 weeks delivery",
      "60-day support",
    ],
    popular: false,
  },
];

export const freeServices = [
  {
    title: "Starter Plan",
    price: "Free",
    duration: "Forever",
    features: [
      "Basic brand consultation",
      "1 social media template",
      "Monthly marketing tips",
      "Community access",
    ],
    popular: false,
  },
  {
    title: "Growth Plan",
    price: "Free",
    duration: "3 months trial",
    features: [
      "Social media audit",
      "5 custom templates/month",
      "Basic analytics report",
      "Email support",
      "Marketing tips weekly",
    ],
    popular: true,
  },
  {
    title: "Creative Plan",
    price: "Free",
    duration: "Limited time",
    features: [
      "Free logo sketch",
      "Color palette suggestions",
      "Font pairing guide",
      "Design resource library",
      "Priority community support",
    ],
    popular: false,
  },
];
