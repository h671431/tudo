// Brand name and short texts used in metadata. Change here.
export const site = {
  name: "Tudo",
  tagline: "Play With Purpose",
  description: "Tudo – Make learning fun, accessible and affordable.",
  // The live address, used in the sitemap and robots.txt.
  url: "https://tudo-store.vercel.app",
  // Public Web3Forms access key. The inbox forms are emailed to is set in the
  // Web3Forms account, so no email address needs to be in the code.
  web3formsKey: "862d07d3-862f-429b-bff5-22ca4caa56f5",
  // The colour palette the site uses. "playful" is the chosen look; "classic" is the
  // earlier purple and yellow ("Now"). All palettes are kept in globals.css, so
  // switching back is just changing this value.
  theme: "playful",
  // Shows the colour palette chooser (components/DesignPicker.js) in the
  // bottom-right corner. Set to true to let visitors switch palettes.
  showDesignPicker: false,
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/playkits", label: "T-Kits" },
  { href: "/family", label: "TUDO Family" },
  { href: "/team", label: "Meet the Team" },
  { href: "/contact", label: "Contact" },
];
