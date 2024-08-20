import {
    FiHome,
    // FiHardDrive,
    FiCreditCard,
    FiList,
    FiFolder,
    FiTrendingUp,
    FiHelpCircle,
    FiSettings,
  } from "react-icons/fi";
  import { TbMoneybag } from "react-icons/tb";
  
  export const mainMenuItems = [
    { name: "Dashboard", icon: FiHome, to: "/dashboard" },
    // { name: "Savings", icon: FiHardDrive, to: "/savings" },
    { name: "Loans", icon: TbMoneybag, to: "/loans" },
    { name: "Payments", icon: FiCreditCard, to: "/payments" },
    { name: "Transactions", icon: FiList, to: "/transactions" },
    { name: "Projects", icon: FiFolder, to: "/projects" },
    { name: "Investments", icon: FiTrendingUp, to: "/investments" },
  ];
  
  export const bottomMenuItems = [
    { name: "Help & Support", icon: FiHelpCircle, to: "/help" },
    { name: "My Profile", icon: FiSettings, to: "/profile", position: "bottom" },
  ];