import {
  Activity,
  BadgeCheck,
  Boxes,
  CircleGauge,
  Hand,
  Headphones,
  Layers3,
  LocateFixed,
  RadioTower,
  RotateCw,
  Settings2,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react";

export type ProductKey = "activator" | "motor" | "locator" | "ultrasonic";

export const brand = {
  name: "dp",
  shortName: "dp",
  descriptor: "Advanced Endodontic Equipment",
  email: "contact@dp-dental.example",
  phone: "+00 000 000 000",
  address: "European product and clinical support office",
};

export const products = [
  {
    number: "01",
    key: "activator" as ProductKey,
    category: "Irrigant Activation",
    name: "A1 Pro Endo Activator",
    shortName: "dp A1 Pro",
    description:
      "A lightweight activation handpiece made for stable access, simple mode selection, and controlled irrigant movement throughout endodontic treatment.",
    overview: "Balanced irrigant activation for controlled chairside handling.",
    features: [
      "Slim grip for comfortable intraoral positioning",
      "Selectable modes for common activation protocols",
      "Removable tips with smooth cleanable surfaces",
    ],
    specs: ["Activation modes", "Handpiece weight", "Tip selection"],
  },
  {
    number: "02",
    key: "motor" as ProductKey,
    category: "Canal Preparation",
    name: "Endo Motor",
    shortName: "dp Motive X",
    description:
      "A compact motor platform that keeps speed, torque, and program selection easy to read, helping clinicians stay focused during canal preparation.",
    overview: "Readable preparation control in a compact motor platform.",
    features: [
      "Programmable speed and torque profiles",
      "Clear display for fast setting confirmation",
      "Compact base for an organized operatory",
    ],
    specs: ["Torque profile", "Speed range", "Power system"],
  },
  {
    number: "03",
    key: "locator" as ProductKey,
    category: "Working Length",
    name: "Apex Locator",
    shortName: "dp Locate S",
    description:
      "A focused apex locator designed for quick setup, clear visual guidance, and tidy accessory connections during working-length assessment.",
    overview: "Clear working-length feedback with a focused display.",
    features: [
      "Large visual indicator for fast orientation",
      "Compact footprint for flexible placement",
      "Organized accessory connection layout",
    ],
    specs: ["Display type", "Device footprint", "Accessory set"],
  },
  {
    number: "04",
    key: "ultrasonic" as ProductKey,
    category: "Ultrasonic Irrigation",
    name: "Ultrasonic Irrigation System",
    shortName: "dp Sono Flow",
    description:
      "An ultrasonic irrigation platform that brings power adjustment, handpiece comfort, and tip organization into one clean clinical setup.",
    overview: "Ultrasonic irrigation support with organized chairside control.",
    features: [
      "Adjustable power levels for treatment protocols",
      "Slim handpiece profile for better access",
      "Organized tip storage and accessory flow",
    ],
    specs: ["Power levels", "Frequency profile", "Tip system"],
  },
];

export const principles = [
  {
    title: "Precision",
    text: "Clear visual feedback and balanced handpieces help clinicians work with greater focus.",
    icon: LocateFixed,
  },
  {
    title: "Control",
    text: "Device settings and accessory handling are arranged around the real treatment sequence.",
    icon: CircleGauge,
  },
  {
    title: "Reliability",
    text: "Durable surfaces, tidy connections, and service resources support everyday practice use.",
    icon: ShieldCheck,
  },
];

export const workflow = [
  {
    step: "01",
    title: "Locate",
    product: "Apex Locator",
    text: "Review working-length feedback through a clear display and organized accessory setup.",
    icon: LocateFixed,
    key: "locator" as ProductKey,
  },
  {
    step: "02",
    title: "Prepare",
    product: "Endo Motor",
    text: "Set preparation parameters with readable speed, torque, and program feedback.",
    icon: Settings2,
    key: "motor" as ProductKey,
  },
  {
    step: "03",
    title: "Activate",
    product: "A1 Pro Endo Activator",
    text: "Use controlled activation modes to support the selected irrigation protocol.",
    icon: Activity,
    key: "activator" as ProductKey,
  },
  {
    step: "04",
    title: "Complete",
    product: "Ultrasonic System",
    text: "Complete the workflow with ultrasonic support and organized tip handling.",
    icon: Waves,
    key: "ultrasonic" as ProductKey,
  },
];

export const benefits = [
  { title: "Comfortable handpiece control", icon: Hand },
  { title: "Readable clinical interfaces", icon: Sparkles },
  { title: "Organized treatment sequence", icon: RotateCw },
  { title: "Refined material finishes", icon: Layers3 },
  { title: "Responsive product support", icon: Headphones },
  { title: "Clean operatory integration", icon: Boxes },
];

export const trustItems = [
  { value: "Ready", label: "Regulatory documentation support", icon: BadgeCheck },
  { value: "Focused", label: "Workflow-led product design", icon: CircleGauge },
  { value: "Regional", label: "Distributor support network", icon: RadioTower },
  { value: "Service", label: "Product training and maintenance", icon: Boxes },
];
