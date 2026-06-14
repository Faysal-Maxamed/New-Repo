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

export const stats = [
  { value: "250+", label: "Projects Completed" },
  { value: "120+", label: "Happy Clients" },
  { value: "15+", label: "Years Experience" },
  { value: "40+", label: "Awards Won" },
];

export const services = [
  {
    icon: "Palette",
    title: "Brand Identity",
    description:
      "Crafting unique visual identities that make your brand unforgettable.",
  },
  {
    icon: "Megaphone",
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that reach the right audience at the right time.",
  },
  {
    icon: "Monitor",
    title: "Web Design",
    description:
      "Stunning, conversion-focused websites that tell your brand story.",
  },
  {
    icon: "Camera",
    title: "Content Creation",
    description:
      "Compelling visuals and copy that engage and inspire your audience.",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    slug: "nova-fashion-rebrand",
    title: "Nova Fashion Rebrand",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=800&fit=crop",
    description: "Complete brand overhaul for a luxury fashion label.",
    longDescription:
      "Nova Fashion approached us to reinvent their entire brand identity for the digital age. We conducted extensive market research, developed a sophisticated visual language, and created a cohesive brand system spanning logo, typography, color palette, packaging, and digital touchpoints. The rebrand resulted in a 45% increase in brand recognition and positioned Nova as a leader in luxury fashion.",
    client: "Nova Fashion Group",
    year: "2025",
    services: ["Brand Strategy", "Logo Design", "Packaging", "Digital Assets"],
    gallery: [
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1483985988354-763728e1935b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 2,
    slug: "techflow-campaign",
    title: "TechFlow Campaign",
    category: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    description: "Multi-channel digital campaign with 300% ROI increase.",
    longDescription:
      "TechFlow needed a comprehensive digital marketing campaign to launch their SaaS platform. We designed and executed a multi-channel strategy across social media, search, email, and content marketing. Our data-driven approach optimized ad spend in real-time, delivering exceptional results that exceeded all KPIs within the first quarter.",
    client: "TechFlow Inc.",
    year: "2025",
    services: ["Social Media", "PPC Ads", "Content Strategy", "Analytics"],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 3,
    slug: "greenleaf-identity",
    title: "GreenLeaf Identity",
    category: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    description: "Sustainable brand identity for an eco-friendly startup.",
    longDescription:
      "GreenLeaf is an eco-friendly startup committed to sustainable living. We crafted a warm, organic brand identity that communicates their environmental values while appealing to modern consumers. The identity system includes logo, stationery, product packaging, and a complete social media kit.",
    client: "GreenLeaf Co.",
    year: "2024",
    services: ["Brand Identity", "Packaging Design", "Social Media Kit"],
    gallery: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b782?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1473341303090-613dca712df9?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 4,
    slug: "pulse-fitness-app",
    title: "Pulse Fitness App",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=800&fit=crop",
    description: "Mobile app design with 50K+ downloads in first month.",
    longDescription:
      "Pulse Fitness needed a mobile app that would stand out in a crowded fitness market. We designed an intuitive, motivating user experience with personalized workout plans, progress tracking, and social features. The app achieved 50,000+ downloads in its first month and maintained a 4.8-star rating.",
    client: "Pulse Fitness Ltd.",
    year: "2024",
    services: ["UI/UX Design", "App Prototyping", "User Research"],
    gallery: [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 5,
    slug: "artisan-coffee-co",
    title: "Artisan Coffee Co.",
    category: "Packaging",
    image:
      "https://images.unsplash.com/photo-1495474473362-a45f79e40433?w=1200&h=800&fit=crop",
    description: "Premium packaging design for artisan coffee brand.",
    longDescription:
      "Artisan Coffee Co. wanted packaging that reflected the premium quality of their single-origin beans. We designed elegant, sustainable packaging with hand-illustrated labels, a cohesive product line system, and in-store display materials that elevated the brand's shelf presence.",
    client: "Artisan Coffee Co.",
    year: "2024",
    services: ["Packaging Design", "Label Design", "Retail Display"],
    gallery: [
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1514432324607-09f90a966a4a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1498804103079-a6881b0501a7?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 6,
    slug: "skyline-real-estate",
    title: "Skyline Real Estate",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop",
    description: "Luxury real estate website with virtual tour integration.",
    longDescription:
      "Skyline Real Estate required a premium web presence to showcase luxury properties. We built a stunning, high-performance website featuring immersive virtual tours, advanced property search, and a lead generation system that increased inquiries by 200% within three months of launch.",
    client: "Skyline Properties",
    year: "2025",
    services: ["Web Design", "Virtual Tours", "SEO", "Lead Generation"],
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const team = [
  {
    name: "Sarah Mitchell",
    role: "Creative Director",
    image: "from-pink-500 to-rose-600",
  },
  {
    name: "James Chen",
    role: "Lead Strategist",
    image: "from-blue-500 to-indigo-600",
  },
  {
    name: "Aisha Hassan",
    role: "Art Director",
    image: "from-violet-500 to-purple-600",
  },
  {
    name: "Marcus Rivera",
    role: "Digital Lead",
    image: "from-emerald-500 to-teal-600",
  },
];

export const oneTimeServices = [
  {
    title: "Logo Design",
    price: "$499",
    duration: "One-time",
    features: [
      "3 unique logo concepts",
      "Unlimited revisions",
      "All file formats (AI, PNG, SVG)",
      "Brand color palette",
      "Social media kit",
    ],
    popular: false,
  },
  {
    title: "Brand Package",
    price: "$1,299",
    duration: "One-time",
    features: [
      "Complete brand identity",
      "Logo + typography + colors",
      "Business card design",
      "Letterhead & envelope",
      "Brand guidelines document",
      "30-day support",
    ],
    popular: true,
  },
  {
    title: "Website Launch",
    price: "$2,499",
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
      "Monthly newsletter tips",
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
      "Color palette generator",
      "Font pairing suggestions",
      "Design resource library",
      "Priority community support",
    ],
    popular: false,
  },
];

export const testimonials = [
  {
    quote:
      "Lumina Agency transformed our brand completely. Their creative vision exceeded every expectation.",
    author: "Emily Watson",
    role: "CEO, Nova Fashion",
  },
  {
    quote:
      "The ROI from their digital campaign was incredible. Best agency we've ever worked with.",
    author: "David Park",
    role: "CMO, TechFlow",
  },
  {
    quote:
      "Professional, creative, and always on time. They truly understand modern advertising.",
    author: "Lisa Thompson",
    role: "Founder, GreenLeaf",
  },
];

export const trustedBrands = [
  "Nova Fashion",
  "TechFlow",
  "GreenLeaf",
  "Pulse Fitness",
  "Artisan Coffee",
  "Skyline",
];
