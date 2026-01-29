import Navbar from "../../components/common/Navbar";
import Sidebar from "../../components/common/Sidebar";

export default function AgentLayout({ children }) {
  return (
    <>
      <Navbar role="AGENT" />
      <div className="flex">
        <Sidebar role="AGENT" />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </>
  );
}
