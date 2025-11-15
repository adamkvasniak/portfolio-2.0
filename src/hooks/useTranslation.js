import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import sk from "../locales/sk/common.json";

export default function useTranslation() {
  const { locale } = useRouter();
  const translations = locale === "sk" ? sk : en;

  const t = (path) => {
    return (
      path.split(".").reduce((obj, key) => obj?.[key], translations) || path
    );
  };

  return { t, locale };
}
