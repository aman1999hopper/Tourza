"use client";

import Link from "next/link";
import { Button } from "../../components/ui/button";
import ModeToggle from "./ModeToggle";

export default function Navbar({ role }) {
  return (
    <nav className="w-full border-b sticky top-0 z-50 bg-muted/50 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-6">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          Tourza ✈️
        </Link>

        {/* Center Links (only for public users) */}
        {role === "USER" && (
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/flights">Flights</Link>
            <Link href="/hotels">Hotels</Link>
            <Link href="/support">Support</Link>
          </div>
        )}

        {/* Right Actions */}
        <div className="flex gap-3">
           <ModeToggle />
          <Button variant="outline">Login</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </nav>
  );
}
