import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";


const inter = Inter({
    subsets: ["latin", "cyrillic"],
    variable: "--font-sans",
});

const mono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

export const metadata: Metadata = {
    title: "София Штокалова | Frontend & Email Developer",
    description: "Портфолио Frontend разработчика и специалиста по Email-верстке",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (

        <html lang="ru" suppressHydrationWarning={true}>
            <body
                className={`${inter.variable} ${mono.variable} font-sans antialiased min-h-screen flex flex-col bg-white text-slate-900 dark:bg-[#0a0a0a] dark:text-slate-100 transition-colors duration-300`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}