"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SIDEBAR_MENU } from "../../lib/sidebar-menu";

export default function Sidebar({ role }) {
  const pathname = usePathname();
  const menu = SIDEBAR_MENU[role] || [];

  return (
    <aside className="w-64 min-h-screen border-r  px-4 py-6">
      <h2 className="mb-6 text-lg font-semibold">
        {role} PANEL
      </h2>

      <nav className="space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition
                ${active ? "bg-blue-600 text-white" : "hover:bg-gray-600"}
              `}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
