import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CLONE-AI",
  description: "Enterprise visualizer clone system with sandbox validation and Vercel cron hardening.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#050505" }}>{children}</body>
    </html>
  );
}
