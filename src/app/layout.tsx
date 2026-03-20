import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saravana L | DevOps Engineer",
  description:
    "DevOps Engineer skilled in Kubernetes, CI/CD, Terraform, AWS, Docker, and Automation. Passionate about building scalable and reliable systems.",

  keywords: [
    "Saravana L",
    "DevOps Engineer",
    "Kubernetes",
    "CI/CD",
    "Terraform",
    "AWS",
    "Docker",
    "Portfolio",
  ],

  authors: [{ name: "Saravana L" }],

  openGraph: {
    title: "Saravana L | DevOps Engineer",
    description: "DevOps Portfolio showcasing projects and skills",
    url: "https://portfolio-saravana-l.vercel.app",
    siteName: "Saravana Portfolio",
    images: [
      {
        url: "/images/home/banner/banner-img.png", // you can replace later
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Saravana L | DevOps Engineer",
    description: "DevOps Portfolio",
    images: ["/images/home/banner/banner-img.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
