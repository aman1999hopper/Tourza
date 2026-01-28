import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-white">Tourza ✈️</h2>
          <p className="mt-4 text-sm text-gray-400">
            Book flights, hotels, and manage travel smarter.
            Built for travelers, agents, and enterprises.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/flights">Flights</Link></li>
            <li><Link href="/hotels">Hotels</Link></li>
            <li><Link href="/corporate/dashboard">Corporate Travel</Link></li>
            <li><Link href="/agent/dashboard">Agent Portal</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Help Center</Link></li>
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">FAQs</Link></li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Tourza. All rights reserved.
      </div>
    </footer>
  );
}
