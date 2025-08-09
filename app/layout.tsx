import "./styles/globals.css";
import { Poppins, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700",  "900"],
    variable: "--font-poppins",
    display: "swap",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "900"],
    variable: "--font-montserrat",
    display: "swap",
});

export const metadata = {
    title: "Portfolio | Maxime Séchaud",
    description: "Un site développé avec Next.js",
    robots: {
        index: false,
        follow: false,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr" className={`${poppins.variable} ${montserrat.variable}`}>
            <head />
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
