import {
  Home,
  Wallet,
  Briefcase,
  FileText,
  Users,
  BarChart,
  ShieldCheck,
} from "lucide-react";

export const SIDEBAR_MENU = {
  AGENT: [
    { label: "Dashboard", href: "/agent/dashboard", icon: Home },
    { label: "Wallet", href: "/agent/wallet", icon: Wallet },
    { label: "Bookings", href: "/agent/bookings", icon: Briefcase },
    { label: "Invoices", href: "/agent/invoices", icon: FileText },
  ],

  CORPORATE: [
    { label: "Dashboard", href: "/corporate/dashboard", icon: Home },
    { label: "Approvals", href: "/corporate/approvals", icon: ShieldCheck },
    { label: "Reports", href: "/corporate/reports", icon: BarChart },
    { label: "Policies", href: "/corporate/policies", icon: FileText },
    { label: "Employees", href: "/corporate/employees", icon: Users },
  ],
};
