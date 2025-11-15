"use client";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./LanguageSwitcher.module.scss";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, asPath } = router;

  // Determine the opposite language
  const nextLang = locale === "sk" ? "en" : "sk";
  const flagSrc =
    nextLang === "en"
      ? "/flags/united-kingdom-1.webp"
      : "/flags/slovakia-1.webp";
  const altText =
    nextLang === "en" ? "Switch to English" : "Prepnúť do slovenčiny";

  const switchLanguage = () => {
    router.push(asPath, asPath, { locale: nextLang });
  };

  return (
    <button className={styles.flagBtn} onClick={switchLanguage}>
      <Image
        src={flagSrc}
        alt={altText}
        width={20}
        height={20}
        className={styles.flag}
        loading="lazy"
      />
    </button>
  );
}
