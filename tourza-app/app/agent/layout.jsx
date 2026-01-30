import Navbar from "../../components/common/Navbar";
import Sidebar from "../../components/common/Sidebar";

export default function AgentLayout({ children }) {
  return (
      <div className="h-screen flex flex-col">
        {/* TOP NAVBAR */}
        <Navbar role="AGENT" />

        {/* BODY */}
        <div className="flex flex-1 overflow-hidden">
          {/* SIDEBAR (FIXED) */}
          <aside className="w-64 border-r bg-gray-50 dark:bg-background">
            <Sidebar role="AGENT" />
          </aside>

          {/* MAIN CONTENT (SCROLLABLE) */}
          <main className="flex-1 overflow-y-auto bg-gray-100 dark:bg-background p-6">
            {children}
          </main>
        </div>
      </div>
  );
}
