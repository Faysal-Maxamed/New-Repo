require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sendContactEmail } = require("./mail");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const oneTimeServices = [
  {
    id: 1,
    title: "Logo Design",
    price: 499,
    currency: "USD",
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
    id: 2,
    title: "Brand Package",
    price: 1299,
    currency: "USD",
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
    id: 3,
    title: "Website Launch",
    price: 2499,
    currency: "USD",
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

const freeServices = [
  {
    id: 4,
    title: "Starter Plan",
    price: 0,
    currency: "USD",
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
    id: 5,
    title: "Growth Plan",
    price: 0,
    currency: "USD",
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
    id: 6,
    title: "Creative Plan",
    price: 0,
    currency: "USD",
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

const projects = [
  {
    id: 1,
    title: "Nova Fashion Rebrand",
    category: "Branding",
    description: "Complete brand overhaul for a luxury fashion label.",
  },
  {
    id: 2,
    title: "TechFlow Campaign",
    category: "Digital Marketing",
    description: "Multi-channel digital campaign with 300% ROI increase.",
  },
  {
    id: 3,
    title: "GreenLeaf Identity",
    category: "Brand Identity",
    description: "Sustainable brand identity for an eco-friendly startup.",
  },
  {
    id: 4,
    title: "Pulse Fitness App",
    category: "UI/UX Design",
    description: "Mobile app design with 50K+ downloads in first month.",
  },
  {
    id: 5,
    title: "Artisan Coffee Co.",
    category: "Packaging",
    description: "Premium packaging design for artisan coffee brand.",
  },
  {
    id: 6,
    title: "Skyline Real Estate",
    category: "Web Design",
    description: "Luxury real estate website with virtual tour integration.",
  },
];

const contacts = [];

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", message: "Lumina Agency API is running" });
});

app.get("/api/services/onetime", (_req, res) => {
  res.json({ success: true, data: oneTimeServices });
});

app.get("/api/services/free", (_req, res) => {
  res.json({ success: true, data: freeServices });
});

app.get("/api/services", (_req, res) => {
  res.json({
    success: true,
    data: { onetime: oneTimeServices, free: freeServices },
  });
});

app.get("/api/projects", (_req, res) => {
  res.json({ success: true, data: projects });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email address",
    });
  }

  const contact = {
    id: contacts.length + 1,
    name,
    email,
    subject,
    message,
    createdAt: new Date().toISOString(),
  };

  try {
    await sendContactEmail({ name, email, subject, message });
    contacts.push(contact);

    res.status(201).json({
      success: true,
      message: "Message sent to Gmail successfully",
      data: { id: contact.id },
    });
  } catch (error) {
    console.error("Email send error:", error.message);
    res.status(500).json({
      success: false,
      message:
        "Failed to send email. Please check Gmail configuration or try again later.",
    });
  }
});

app.get("/api/contacts", (_req, res) => {
  res.json({ success: true, data: contacts });
});

app.listen(PORT, () => {
  console.log(`Lumina Agency API running on http://localhost:${PORT}`);
});
