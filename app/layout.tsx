import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Exploree Solutions | Empowering Digital Growth",
    description: "Innovative digital solutions for businesses in Ethiopia. We specialize in web development, mobile apps, and digital strategy.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
