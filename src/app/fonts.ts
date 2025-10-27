import {
  Caveat,
  Montserrat,
  Poppins,
  Bebas_Neue,
  Source_Code_Pro,
  Raleway,
  Michroma,
} from "next/font/google";

const michroma = Michroma({
                          subsets: ["latin"],
                          weight: ["400"],
                          variable: "--font-michroma",
                          preload: true,
                          display: "swap",
                        });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-main",
  preload: true,
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-montserrat",
  preload: true,
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
  preload: true,
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
  display: "swap",
  preload: true,
});

const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
  preload: true,
  display: "swap",
});

const sourceCode = Source_Code_Pro({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-source-code',
  preload: true,
  display: "swap",
});

export {
  poppins,
  montserrat,
  // murs,
  caveat,
  raleway,
  sourceCode,
  bebas,
  michroma,
};
