export const metadata = {
  title: "Rayora Grocery Demo",
  description: "South Asian grocery store demo built with Next.js + Tailwind",
};

import "./globals.css";
import { CartProvider } from "@/lib/cart";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
