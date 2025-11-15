import Image from "next/image";
import styles from "./FeaturedProjects.module.scss";
import useTranslation from "../../hooks/useTranslation";

export default function FeaturedProjects() {
  const { t } = useTranslation();

  const projects = t("featured.projects");

  return (
    <section className={styles.featuredProjects} id="projects">
      <div className={styles.header}>
        <h2>{t("featured.title")}</h2>
        <p>{t("featured.subtitle")}</p>
      </div>

      <div className={styles.grid}>
        {Array.isArray(projects) &&
          projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <Image
                src={project.image}
                alt={project.name}
                width={350}
                height={200}
                className={styles.projectImage}
                loading="lazy"
              />
            </a>
          ))}
      </div>
    </section>
  );
}
