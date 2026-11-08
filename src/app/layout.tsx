import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "UNIPORT Accommodation",
    template: "%s · UNIPORT Accommodation",
  },
  description:
    "Find available student rooms near University of Port Harcourt. Real road distance, direct agent contact, room-level availability.",
  applicationName: "UNIPORT Accommodation",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#334EAC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-dvh flex flex-col">
        {children}
      </body>
    </html>
  );
}
