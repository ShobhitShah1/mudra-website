import sharedConfig from "../../shared-config.json";

export const SITE_NAME = sharedConfig.appName;
export const SITE_TITLE = `${sharedConfig.appName} - Track Smarter. Save Better.`;
export const SITE_DESCRIPTION = sharedConfig.appDescription;
export const APP_DOWNLOAD_URL =
  process.env.NEXT_PUBLIC_APP_DOWNLOAD_URL ??
  "https://play.google.com/store/apps";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? sharedConfig.siteUrl
).replace(/\/$/, "");

export const DEFAULT_OG_IMAGE = "/opengraph-image";
