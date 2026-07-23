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
  descriptor: "Dental Tools Made Simple",
  email: "contact@dp-dental.example",
  phone: "+00 000 000 000",
  address: "Product and clinic support office",
};

export const products = [
  {
    number: "01",
    key: "activator" as ProductKey,
    category: "Irrigant Activation",
    name: "A1 Pro Endo Activator",
    shortName: "dp A1 Pro",
    description:
      "A light handpiece that helps dentists activate cleaning liquid during root canal treatment. It is simple to hold, simple to set, and easy to keep organized.",
    overview: "A simple handpiece for root canal irrigation support.",
    features: [
      "Slim grip that feels comfortable in the hand",
      "Simple modes for common treatment routines",
      "Removable tips with smooth surfaces for cleaning",
    ],
    specs: ["Simple modes", "Light handpiece", "Tip options"],
  },
];

export const principles = [
  {
    title: "Easy to see",
    text: "Clear feedback helps the dental team check settings quickly.",
    icon: LocateFixed,
  },
  {
    title: "Easy to control",
    text: "The grip and settings are arranged around the way the device is used.",
    icon: CircleGauge,
  },
  {
    title: "Easy to maintain",
    text: "Smooth surfaces and tidy accessories help with everyday clinic use.",
    icon: ShieldCheck,
  },
];

export const workflow = [
  {
    step: "01",
    title: "Select",
    product: "A1 Pro Endo Activator",
    text: "Choose the mode you want to use.",
    icon: Settings2,
    key: "activator" as ProductKey,
  },
  {
    step: "02",
    title: "Position",
    product: "A1 Pro Endo Activator",
    text: "Place the slim handpiece where it feels stable.",
    icon: LocateFixed,
    key: "activator" as ProductKey,
  },
  {
    step: "03",
    title: "Activate",
    product: "A1 Pro Endo Activator",
    text: "Activate the cleaning liquid during treatment.",
    icon: Activity,
    key: "activator" as ProductKey,
  },
];

export const benefits = [
  { title: "Comfortable to hold", icon: Hand },
  { title: "Controls are easy to read", icon: Sparkles },
  { title: "Simple treatment routine", icon: RotateCw },
  { title: "Smooth, cleanable surfaces", icon: Layers3 },
  { title: "Helpful product support", icon: Headphones },
  { title: "Easy to organize in the clinic", icon: Boxes },
];

export const trustItems = [
  { value: "Docs", label: "Product documents and use notes", icon: BadgeCheck },
  { value: "Simple", label: "Design focused on daily use", icon: CircleGauge },
  { value: "Local", label: "Distributor support when available", icon: RadioTower },
  { value: "Service", label: "Training and maintenance help", icon: Boxes },
];
