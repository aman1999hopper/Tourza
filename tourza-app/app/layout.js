import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"]});

export const metadata = {
  title: "Tourza App",
  description: "Tourza is a smart travel platform connecting travelers and travel businesses. Discover, book, and manage trips seamlessly with a modern, reliable experience for both customers and partners.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* Header Section */}
            <main>{children}</main>
            {/* Footer Section  */}
            <footer className="bg-muted/50 py-12">I Love Travelling</footer>
          </ThemeProvider>
      </body>
    </html>
  );
}
