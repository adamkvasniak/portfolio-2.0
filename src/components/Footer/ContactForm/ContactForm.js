import { useState } from "react";
import Image from "next/image";
import styles from "./ContactForm.module.scss";
import useTranslation from "../../../hooks/useTranslation";

export default function ContactForm() {
  const { t, locale } = useTranslation(); // 👈 add locale here
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (form.website) return;
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ type: "success", key: data.code }); // 'sent'
        setForm({ name: "", email: "", message: "", website: "" });
      } else {
        // ⚠️ if invalid -> show yellow, else red
        const type = data.code === "invalid" ? "warning" : "error";
        setStatus({ type, key: data.code });
      }
    } catch (err) {
      setStatus({ type: "error", key: "error" });
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <div className={styles.field}>
            <label htmlFor="name">{t("contact.fields.name")}</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">{t("contact.fields.email")}</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="message">{t("contact.fields.message")}</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <div className={styles.honeypotWrapper} aria-hidden="true">
            <input
              id="website"
              name="website"
              type="text"
              autoComplete="off"
              tabIndex="-1"
              value={form.website}
              onChange={handleChange}
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className={styles.submitBtn}
          >
            {t("contact.button")}
          </button>

          {status && (
            <div
              className={`${styles.statusMessage} ${
                status.type === "success"
                  ? styles.success
                  : status.type === "warning"
                  ? styles.warning
                  : styles.error
              }`}
            >
              {status.type === "success"
                ? "✅ "
                : status.type === "warning"
                ? "⚠️ "
                : "❌ "}
              {t(`contact.messages.${status.key}`)}
            </div>
          )}
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/hero.webp"
            alt={t("contact.imageAlt")}
            width={420}
            height={440}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
