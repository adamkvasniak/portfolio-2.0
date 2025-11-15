import Image from "next/image";
import styles from "./OfferSection.module.scss";
import useTranslation from "../../hooks/useTranslation";

export default function OfferSection() {
  const { t } = useTranslation();

  const services = t("offer.whatIOffer.services");

  return (
    <section className={styles.offerSection} id="about">
      <Image
        src="/code.webp"
        alt="Background"
        fill
        priority
        className={styles.bgImage}
      />

      {/* ABOUT SECTION */}
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image
            src="/designs/profil.webp"
            alt="Showcase"
            width={500}
            height={500}
            loading="lazy"
            className={styles.showcase}
          />
        </div>
        <div className={styles.text}>
          <h2>{t("offer.about.title")}</h2>
          <p>{t("offer.about.text")}</p>
          <button className={styles.button}>{t("offer.about.button")}</button>
        </div>
      </div>

      {/* WHAT I OFFER SECTION */}
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>{t("offer.whatIOffer.title")}</h2>
          <p>{t("offer.whatIOffer.text")}</p>
          <ul>
            {Array.isArray(services) &&
              services.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <p>{t("offer.whatIOffer.closing")}</p>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/designs/Mobile friendly design10.webp"
            alt="Showcase"
            width={175}
            height={363}
            loading="lazy"
            className={styles.showcase2}
          />
        </div>
      </div>
    </section>
  );
}
