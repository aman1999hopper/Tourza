import Navbar from "@/components/common/Navbar";

export default function PublicLayout({ children }) {
  return (
    <>
      <Navbar role="USER" />
      <main className="min-h-screen">{children}</main>

      <footer className="bg-muted/50 py-6 text-center">
        I Love Travelling 🌍
      </footer>
    </>
  );
}
