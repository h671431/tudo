import "./globals.css";
import { site } from "../lib/site";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientEffects from "../components/ClientEffects";
import DesignPicker from "../components/DesignPicker";

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
  d.dataset.theme = 'classic'; d.dataset.pattern = 'none'; d.dataset.look = 'modern';
  if (${site.showDesignPicker}) try {
    var t = localStorage.getItem('tudo-palette');
    if (t) d.dataset.theme = t;
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
    <html lang="en" suppressHydrationWarning>
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
