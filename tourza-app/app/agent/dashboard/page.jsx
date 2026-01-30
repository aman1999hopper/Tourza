import WalletTransactions from "../../../components/agent/WalletTransactions";
import RecentBookingsTable from "../../../components/agent/RecentBookingsTable";
import StatsCard from "../../../components/agent/StatsCard";
import { ClipboardList, PoundSterling, Wallet } from "lucide-react";

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
          icon={ClipboardList}
        />

        <StatsCard
          title="Wallet Balance"
          value="₹ 82,450"
          description="Available balance"
          icon={Wallet}
        />

        <StatsCard
          title="Monthly Revenue"
          value="₹ 3.2L"
          description="This month"
          icon={PoundSterling}
        />

        <StatsCard
          title="Pending Tickets"
          value="12"
          description="Need action"
          icon={ClipboardList}
        />
      </div>

      {/* Recent Booking Table */}

      <RecentBookingsTable />

      {/* Wallet Transctions */}
      <WalletTransactions/>
    </div>
  );
}
