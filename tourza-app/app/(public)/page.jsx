import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-8">
      {/* HERO SECTION section */}
      <section className="bg-liner-to-b from-blue-500 to-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE – TEXT */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Travel Smarter with <br />
              <span className="text-blue-600">Tourza</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground">
              Book flights, reserve hotels, manage corporate travel, and grow
              your agency business — all in one powerful platform.
            </p>

            <div className="mt-8 flex gap-4">
              <Button size="lg">Search Flights</Button>
              <Button size="lg" variant="outline">
                Explore Hotels
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE – IMAGE */}
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src="/images/logo.png"
              alt="Travel illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Everything You Need to Travel
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Flights",
              desc: "Compare airlines and book at best prices worldwide.",
            },
            {
              title: "Hotels",
              desc: "Choose from thousands of hotels with real reviews.",
            },
            {
              title: "Corporate Travel",
              desc: "Manage approvals, policies & reports seamlessly.",
            },
          ].map((item) => (
            <Card key={item.title} className="hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* STATS Section*/}
      <section className="py-16 mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6 text-center">
          {[
            { label: "Happy Travelers", value: "1M+" },
            { label: "Flights Booked", value: "500K+" },
            { label: "Hotel Partners", value: "20K+" },
            { label: "Corporate Clients", value: "2K+" },
          ].map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <h3 className="text-3xl font-bold text-blue-600">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* DESTINATIONS */}
      <section className="max-w-6xl mx-auto px-6 mt-10">
        <h2 className="text-3xl font-bold text-center mb-10">
          Popular Destinations
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Dubai", "Paris", "Bali"].map((city) => (
            <Card key={city} className="overflow-hidden">
              <div className="h-40 bg-blue-500 flex items-center justify-center text-xl font-semibold">
                {city}
              </div>
              <CardContent className="p-4">
                <p className="text-muted-foreground">
                  Starting from best deals
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* CTA */}
      <section className="text-center py-20 bg-gradient-to-b from-blue-400 to-indigo-600 text-white mt-10 rounded-2xl">
        <h2 className="text-3xl font-bold">Ready to Start Your Journey?</h2>
        <p className="mt-4 opacity-90">
          Book your next trip in minutes with Tourza.
        </p>
        <Button size="lg" variant="secondary" className="mt-6">
          Get Started
        </Button>
      </section>
    </div>
  );
}
