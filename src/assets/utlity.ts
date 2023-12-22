import { MdDashboard } from "react-icons/md";
import { PiPottedPlantFill } from "react-icons/pi";
import { FaCommentsDollar, FaPuzzlePiece,  } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IconType } from "react-icons";

interface LinkProps {
  id: number;
  link: string;
  icon: IconType;
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
    icon: FaPuzzlePiece,
  },
  {
    id: 4,
    link: "FAQ",
    icon: FaCommentsDollar ,
  },
  {
    id: 5,
    link: "Support",
    icon: CgProfile,
  },
];

export interface PlanProps {
  id: number;
  plan: string;
  discount: number;
  price: number;
  user: number;
  storage: number;
  support: string;
}

export const planItems = [
  {
    id: 1,
    plan: "Basic",
    discount: 89.9,
    price: 9.99,
    user: 25,
    storage: 25,
    support: "Email",
  },
  {
    id: 2,
    plan: "Standard",
    discount: 89.9,
    price: 9.99,
    user: 25,
    storage: 25,
    support: "Email+Chat",
  },
  {
    id: 3,
    plan: "Premium",
    discount: 89.9,
    price: 9.99,
    user: 25,
    storage: 25,
    support: "Email+Chat+Whatsapp",
  },
];

export interface QuickPlanProps {
  id:number
  label:string,
  plan: string;
  descr: string;
  user: number;
  storage?: number;
  support: string;
}

export const quickPlans = [
  
  {id:1,label:"Free Forever",
    plan: "Free Starter",
    descr:
      "The Quickest and easiest way to try protocols with basic functionalities",

    user: 8,
    storage: 3,
    support: "Email+Chat+Whatsapp",
  },
  
  {id:2,
    label:"Let's Connect",
    plan: "Free Starter",
    descr:
      "Effertless customize and fine-tune services as your needs shift, ensuring the perfect tools for success",
    user: 75,
    support: "Customization of all features",
  },
];
