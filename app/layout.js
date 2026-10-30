import "./globals.css";
import { Manrope, Instrument_Serif, Fredoka, Grandstander, Caveat } from "next/font/google";
import { site } from "../lib/site";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientEffects from "../components/ClientEffects";
import DesignPicker from "../components/DesignPicker";

// Self-hosted by Next.js, so there is no extra request to Google and no layout shift.
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-manrope" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif" });
const fredoka = Fredoka({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-fredoka" });
const grandstander = Grandstander({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-grandstander" });
const caveat = Caveat({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-caveat" });
const fontVars = [manrope, serif, fredoka, grandstander, caveat].map((f) => f.variable).join(" ");

export const metadata = {
  title: {
    default: `${site.name} – ${site.tagline}`,
    template: `%s – ${site.name}`,
  },
  description: site.description,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// Runs before first paint: enables the scroll-reveal styles, restores the saved colour palette
// (only while the palette chooser is shown)
// and turns on the writing animation each time the home page is loaded.
const earlyScript = `
(function () {
  var d = document.documentElement;
  d.classList.add('js');
  d.dataset.theme = '${site.theme}'; d.dataset.pattern = 'none'; d.dataset.look = 'modern';
  if (${site.showDesignPicker}) try {
    var t = localStorage.getItem('tudo-palette');
    if (/^(classic|palette|crisp|pastel|playful)$/.test(t)) d.dataset.theme = t; // ids from DesignPicker.js
  } catch (e) {}
  try {
    if (location.pathname === '/' && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      d.classList.add('write-anim');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fontVars} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: earlyScript }} />
      </head>
      <body>
        {/* Slowly moving colour background behind every page */}
        <div className="bg-orbs" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Header />
        {children}
        <Footer />
        <ClientEffects />
        {site.showDesignPicker && <DesignPicker />}
      </body>
    </html>
  );
}
