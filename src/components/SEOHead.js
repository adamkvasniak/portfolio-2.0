import Head from "next/head";
import { useRouter } from "next/router";

export default function SEOHead() {
  const { locale } = useRouter();
  const isSk = locale === "sk";

  const meta = {
    title: isSk
      ? "Adam Kvasniak | Webový vývoj a Dizajn"
      : "Adam Kvasniak | Web Development & Design",
    description: isSk
      ? "Profesionálny webový vývojár zameraný na moderný dizajn, vývoj, hosting a nasadenie webových riešení."
      : "Professional web developer focused on modern design, performance, hosting, and deployment.",
    canonical: isSk
      ? "https://www.adamkvasniak.com/sk"
      : "https://www.adamkvasniak.com/",
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="author" content="Adam Kvasniak" />

      {/* canonical + hreflang tags */}
      <link rel="canonical" href={meta.canonical} />
      <link
        rel="alternate"
        href="https://www.adamkvasniak.com/"
        hrefLang="en"
      />
      <link
        rel="alternate"
        href="https://www.adamkvasniak.com/sk"
        hrefLang="sk"
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://www.adamkvasniak.com/"
      />

      {/* Open Graph */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta
        property="og:url"
        content={
          isSk
            ? "https://www.adamkvasniak.com/sk"
            : "https://www.adamkvasniak.com/"
        }
      />
      <meta property="og:image" content="/logo.png" />
      <meta name="twitter:image" content="/logo.png" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            url: "https://www.adamkvasniak.com",
            name: "Adam Kvasniak",
            logo: "https://www.adamkvasniak.com/logo.png",
          }),
        }}
      />
    </Head>
  );
}
