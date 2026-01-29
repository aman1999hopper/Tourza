import StatsCard from "@/components/agent/StatsCard";
import { Wallet } from "lucide-react";

export default function AgentDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Agent Dashboard</h1>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Bookings"
          value="1,248"
          description="All time bookings"
          icon={Wallet}
        />

        <StatsCard
          title="Wallet Balance"
          value="₹ 82,450"
          description="Available balance"
        />

        <StatsCard
          title="Monthly Revenue"
          value="₹ 3.2L"
          description="This month"
        />

        <StatsCard
          title="Pending Tickets"
          value="12"
          description="Need action"
        />
      </div>
    </div>
  );
}
