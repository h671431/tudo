import { site } from "../lib/site";

// Every public page. Add new pages here.
const pages = ["/", "/playkits", "/family", "/team", "/contact", "/privacy"];

export default function sitemap() {
  return pages.map((path) => ({ url: `${site.url}${path === "/" ? "" : path}` }));
}
