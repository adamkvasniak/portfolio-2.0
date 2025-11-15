/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  reactStrictMode: true,

  i18n: {
    locales: ["en", "sk"], // list of supported languages
    defaultLocale: "en", // default language
  },
};

export default nextConfig;
