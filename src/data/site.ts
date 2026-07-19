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
    title: "Select",
    product: "A1 Pro Endo Activator",
    text: "Choose the activation mode that fits the selected irrigation protocol.",
    icon: Settings2,
    key: "activator" as ProductKey,
  },
  {
    step: "02",
    title: "Position",
    product: "A1 Pro Endo Activator",
    text: "Use the slim handpiece profile to keep access stable and comfortable.",
    icon: LocateFixed,
    key: "activator" as ProductKey,
  },
  {
    step: "03",
    title: "Activate",
    product: "A1 Pro Endo Activator",
    text: "Apply controlled movement to support consistent irrigant activation.",
    icon: Activity,
    key: "activator" as ProductKey,
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
