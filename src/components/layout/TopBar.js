import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./TopBar.module.scss";
import useTranslation from "../../hooks/useTranslation";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

export default function TopBar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // active when 60% visible
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
      setActiveSection(id);
    }
  };

  return (
    <header className={styles.topbar}>
      <div className={styles.logo}>AK</div>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        {["home", "about", "projects", "contact"].map((id) => (
          <a
            key={id}
            onClick={() => handleNavClick(id)}
            className={`${styles.link} ${
              activeSection === id ? styles.active : ""
            }`}
          >
            {t(`topbar.${id}`)}
          </a>
        ))}

        <div className={styles.mobileExtras}>
          <div className={styles.switchWrapper}>
            <LanguageSwitcher />
          </div>
          <a href="/resume.pdf" className={styles.resumeBtn} download>
            {t("topbar.resume")}
          </a>
        </div>
      </nav>

      <div className={styles.desktopExtras}>
        <a
          href="https://wa.me/421911690230"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.waBtn}
        >
          <Image
            src="/icons/whatsapp.webp"
            alt="WhatsApp"
            width={24}
            height={24}
            className={styles.waImg}
          />
        </a>
        <LanguageSwitcher />
      </div>

      <button
        className={styles.menuBtn}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <Image src="/menu.webp" alt="menu" width={26} height={26} priority />
      </button>
    </header>
  );
}
