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
  descriptor: "Endodontic Technology",
  email: "hello@placeholder.example",
  phone: "+00 000 000 000",
  address: "[Editable European office address]",
};

export const products = [
  {
    number: "01",
    key: "activator" as ProductKey,
    category: "Irrigant Activation",
    name: "A1 Pro Endo Activator",
    shortName: "dp A1 Pro",
    description:
      "Designed to support effective irrigant activation through a controlled and ergonomic workflow.",
    overview: "Controlled activation in the DP A1 Pro handpiece.",
    features: [
      "Ergonomic handpiece design",
      "Multiple operating settings",
      "Easy-to-clean components",
    ],
    specs: ["[Editable frequency range]", "[Editable weight]", "[Editable tip options]"],
  },
  {
    number: "02",
    key: "motor" as ProductKey,
    category: "Canal Preparation",
    name: "Endo Motor",
    shortName: "dp Motive X",
    description:
      "A compact preparation platform created for precise settings, clear feedback, and an organized chairside workflow.",
    overview: "Intuitive preparation controls with an architectural console.",
    features: [
      "Editable torque and speed presets",
      "High-contrast interface",
      "Compact charging base",
    ],
    specs: ["[Editable torque range]", "[Editable RPM range]", "[Editable battery life]"],
  },
  {
    number: "03",
    key: "locator" as ProductKey,
    category: "Working Length",
    name: "Apex Locator",
    shortName: "dp Locate S",
    description:
      "A clear, focused locator interface designed to support confident working-length assessment and efficient setup.",
    overview: "Focused visual guidance with a calm, distraction-free display.",
    features: [
      "Large visual indicator",
      "Compact footprint",
      "Simple accessory connection",
    ],
    specs: ["[Editable display size]", "[Editable dimensions]", "[Editable accessories]"],
  },
  {
    number: "04",
    key: "ultrasonic" as ProductKey,
    category: "Ultrasonic Irrigation",
    name: "Ultrasonic Irrigation System",
    shortName: "dp Sono Flow",
    description:
      "A refined ultrasonic platform developed to integrate controlled irrigation support into modern endodontic protocols.",
    overview: "A coordinated ultrasonic system with precise chairside control.",
    features: [
      "Adjustable operating levels",
      "Slim handpiece geometry",
      "Organized accessory system",
    ],
    specs: ["[Editable power settings]", "[Editable frequency]", "[Editable tip system]"],
  },
];

export const principles = [
  {
    title: "Precision",
    text: "Clear interfaces, deliberate tolerances, and carefully resolved handpiece geometry.",
    icon: LocateFixed,
  },
  {
    title: "Control",
    text: "Focused settings and tactile interactions built around a composed clinical workflow.",
    icon: CircleGauge,
  },
  {
    title: "Reliability",
    text: "Materials, connections, and service pathways designed for professional environments.",
    icon: ShieldCheck,
  },
];

export const workflow = [
  {
    step: "01",
    title: "Locate",
    product: "Apex Locator",
    text: "Establish working-length information with a clear visual reference.",
    icon: LocateFixed,
    key: "locator" as ProductKey,
  },
  {
    step: "02",
    title: "Prepare",
    product: "Endo Motor",
    text: "Set speed and torque parameters for the selected preparation protocol.",
    icon: Settings2,
    key: "motor" as ProductKey,
  },
  {
    step: "03",
    title: "Activate",
    product: "A1 Pro Endo Activator",
    text: "Introduce controlled activation as defined by the practice workflow.",
    icon: Activity,
    key: "activator" as ProductKey,
  },
  {
    step: "04",
    title: "Complete",
    product: "Ultrasonic System",
    text: "Complete the sequence with an organized ultrasonic irrigation setup.",
    icon: Waves,
    key: "ultrasonic" as ProductKey,
  },
];

export const benefits = [
  { title: "Ergonomic design", icon: Hand },
  { title: "Intuitive operation", icon: Sparkles },
  { title: "Consistent workflow", icon: RotateCw },
  { title: "Premium materials", icon: Layers3 },
  { title: "Professional support", icon: Headphones },
  { title: "Modern practice fit", icon: Boxes },
];

export const trustItems = [
  { value: "[CE / regulatory placeholder]", label: "Certification information", icon: BadgeCheck },
  { value: "[XX]+", label: "Years of engineering experience", icon: CircleGauge },
  { value: "[XX]", label: "Countries served", icon: RadioTower },
  { value: "[Logo placeholders]", label: "Authorized distributors", icon: Boxes },
];
