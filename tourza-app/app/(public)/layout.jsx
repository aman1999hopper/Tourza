import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export default function PublicLayout({ children }) {
  return (
    <>
      <Navbar role="USER" />
      <main className="min-h-screen">{children}</main>
      <Footer/>
    </>
  );
}
