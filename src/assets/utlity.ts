import { MdDashboard } from "react-icons/md";
import { PiPottedPlantFill } from "react-icons/pi";
import { FaRegComments } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

interface LinkProps {
  id: number;
  link: string;
  icon: JSX.Element;
}

export const sideLinks: LinkProps[] = [
  {
    id: 1,
    link: "Dashboard",
    icon: MdDashboard,
  },
  {
    id: 2,
    link: "Perks",
    icon: PiPottedPlantFill,
  },
  {
    id: 3,
    link: "Addons",
    icon: null,
  },
  {
    id: 4,
    link: "FAQ",
    icon: FaRegComments,
  },
  {
    id: 5,
    link: "Support",
    icon: CgProfile,
  },
];

export interface PlanProps {
  plan: string;
  discount: number;
  price: number;
  user: number;
  storage: number;
  support: string[];
}

export const planItems = [
  {
    plan: "Basic",
    discount: 89.9,
    price: 9.99,
    user: 25,
    storage: 25,
    support: ["Email"],
  },
  {
    plan: "Basic",
    discount: 89.9,
    price: 9.99,
    user: 25,
    storage: 25,
    support: ["Email", "Chat"],
  },
  {
    plan: "Basic",
    discount: 89.9,
    price: 9.99,
    user: 25,
    storage: 25,
    support: ["Email", "Chat", "Whatsapp"],
  },
];

export interface QuickPlanProps {
    plan: string;
    descr: string;
    user: number;
    storage?: number;
    support: string[];
  }
  

export const quickPlans = [
  {
    plan: "Free Starter",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam nesciunt ullam minima, cum delectus velit amet pariatur harum ipsa ex sapiente est vero error necessitatibus tempora illum ea impedit!",

    user: 8,
    storage: 3,
    support: ["Email", "Chat", "Whatsapp"],
  },
  {
    plan: "Free Starter",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam nesciunt ullam minima, cum delectus velit amet pariatur harum ipsa ex sapiente est vero error necessitatibus tempora illum ea impedit!",
    user: 75,
    support: ["Customization of all features"],
  },
];
