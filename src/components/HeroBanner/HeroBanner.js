import styles from "./HeroBanner.module.scss";
import Image from "next/image";
import useTranslation from "../../hooks/useTranslation";
import Link from "next/link";

export default function HeroBanner() {
  const { t } = useTranslation();

  return (
    <section className={styles.heroSection} id="home">
      <Image
        src="/code.webp"
        alt="Hero background"
        fill
        quality={90}
        className={styles.bg}
        loading="lazy"
      />

      <div className={styles.textContainer}>
        <p className={styles.subtitle}>{t("hero.subtitle")}</p>
        <h1 className={styles.name}>{t("hero.name")}</h1>
        <h1 className={styles.title}>{t("hero.title")}</h1>
        <p className={styles.text}>{t("hero.text")}</p>

        <div className={styles.buttonsContainer}>
          <a href="#about" className={styles.button}>
            {t("hero.aboutMe")}
          </a>
          <a href="#projects" className={styles.transparentButton}>
            {t("hero.viewWork")}
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <h2>{t("hero.stats.projects.number")}</h2>
            <p>{t("hero.stats.projects.label")}</p>
          </div>
          <div className={styles.statItem}>
            <h2>{t("hero.stats.experience.number")}</h2>
            <p>{t("hero.stats.experience.label")}</p>
          </div>
          <div className={styles.statItem}>
            <h2>{t("hero.stats.clients.number")}</h2>
            <p>{t("hero.stats.clients.label")}</p>
          </div>
        </div>
      </div>

      <Image
        src="/hero.webp"
        alt="Adam Kvasniak - Web Developer"
        priority
        sizes="100%"
        width={513}
        height={728}
        className={styles.image}
      />
    </section>
  );
}
