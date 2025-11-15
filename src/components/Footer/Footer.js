import ContactForm from "./ContactForm/ContactForm";
import styles from "./Footer.module.scss";
import useTranslation from "../../hooks/useTranslation";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer} id="contact">
      {/* Contact Form Section */}
      <div className={styles.contactHeader}>
        {/* Title uses HTML from JSON (allows <br /> and <span>) */}
        <h2 dangerouslySetInnerHTML={{ __html: t("footer.header.title") }}></h2>
        <p>{t("footer.header.text")}</p>
      </div>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer Links (commented out for now, can be localized later) */}
      <div className={styles.linksSection}>
        {/* 
        <div className={styles.column}>
          <h3>Company</h3>
          <ul>
            <li>How it works</li>
            <li>Features</li>
            <li>Docs</li>
            <li>Blog</li>
            <li>About</li>
          </ul>
        </div>
        */}
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
}
