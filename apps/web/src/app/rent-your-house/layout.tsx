import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dog House: Rent",
  description: "Generated by create next app",
};

export default function RentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="w-full min-h-screen">{children}</section>;
}
