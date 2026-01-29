import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/common/Sidebar";

export default function CorporateLayout({ children }) {
  const role = "CORPORATE";

  return (
    <>
      <Navbar role={role} />
      <div className="flex">
        <Sidebar role={role} />
        <main className="flex-1 p-6 bg-gray-100">
          {children}
        </main>
      </div>
    </>
  );
}
