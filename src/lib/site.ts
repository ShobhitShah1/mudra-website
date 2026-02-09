export const SITE_NAME = "Mudra";
export const SITE_TITLE = "Mudra - Track Smarter. Save Better.";
export const SITE_DESCRIPTION =
  "A premium, privacy-focused expense tracking app that parses transaction SMS on-device with zero cloud dependency.";
export const APP_DOWNLOAD_URL =
  process.env.NEXT_PUBLIC_APP_DOWNLOAD_URL ?? "https://play.google.com/store/apps";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://mudra.app").replace(
  /\/$/,
  "",
);

export const DEFAULT_OG_IMAGE = "/opengraph-image";
