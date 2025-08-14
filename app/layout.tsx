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
    description: "Portfolio de Maxime Séchaud, Médiamaticien en 2ᵉ année. Découvrez mes projets et compétences.",
    robots: {
        index: false,
        follow: false,
    },
    openGraph: {
        title: "Portfolio | Maxime Séchaud",
        description:
            "Portfolio de Maxime Séchaud, Médiamaticien en 2ᵉ année. Découvrez mes projets et compétences.",
        url: "https://www.maximesechaud.ch",
        siteName: "Portfolio | Maxime Séchaud",
        images: [
            {
                url: "https://www.maximesechaud.ch/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Aperçu du portfolio de Maxime Séchaud",
            },
        ],
        locale: "fr_CH",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Portfolio | Maxime Séchaud",
        description:
            "Portfolio de Maxime Séchaud, Médiamaticien en 2ᵉ année. Découvrez mes projets et compétences.",
        images: ["https://www.maximesechaud.ch/og-image.jpg"],
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
