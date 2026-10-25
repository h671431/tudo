import "./globals.css";
import { site } from "../lib/site";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientEffects from "../components/ClientEffects";
import DesignPicker from "../components/DesignPicker";

export const metadata = {
  title: {
    default: `${site.name} – Play that opens possibilities`,
    template: `%s – ${site.name}`,
  },
  description: site.description,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// Runs before first paint: enables the scroll-reveal styles and restores the saved design choice.
const earlyScript = `
(function () {
  var d = document.documentElement;
  d.classList.add('js');
  d.dataset.theme = 'orange'; d.dataset.pattern = 'dots'; d.dataset.look = 'sticker';
  try {
    var s = JSON.parse(localStorage.getItem('design-v2')) || {};
    ['theme', 'pattern', 'look'].forEach(function (k) { if (s[k]) d.dataset[k] = s[k]; });
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
        <Header />
        {children}
        <Footer />
        <ClientEffects />
        <DesignPicker />
      </body>
    </html>
  );
}
