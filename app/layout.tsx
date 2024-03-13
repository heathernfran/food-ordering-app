import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/ui/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import TopNav from "@/app/ui/top-nav";
import CartProvider from "@/app/context/cart";
import ToastProvider from "@/app/context/toast";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food Ordering App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          <CartProvider>
            <TopNav />
            <div className="mx-10">{children}</div>
            <Analytics />
            <SpeedInsights />
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
