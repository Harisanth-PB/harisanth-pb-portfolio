import "./globals.css";
import { profile } from "@/data/profile";

const description = `${profile.title} based in Dubai. ${profile.statement}`;

export const metadata = {
  title: `${profile.name} | ${profile.title}`,
  description,
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description,
    type: "website",
  },
};

export const viewport = {
  themeColor: "#14305A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
