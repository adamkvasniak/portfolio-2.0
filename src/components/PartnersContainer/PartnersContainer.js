import Image from "next/image";
import styles from "./PartnersContainer.module.scss";

export default function PartnersContainer() {
  return (
    <section className={styles.partners}>
      <Image
        src="/partners/uniza.webp"
        alt="uniza"
        width={370}
        height={110}
        loading="lazy"
      />
      <Image
        src="/partners/esn.webp"
        alt="esn"
        width={180}
        height={120}
        loading="lazy"
      />
      <Image
        src="/partners/cisco_badge.webp"
        alt="cisco"
        width={120}
        height={120}
        loading="lazy"
      />
      <Image
        src="/partners/aws_badge.webp"
        alt="AWS"
        width={120}
        height={120}
        loading="lazy"
      />
    </section>
  );
}
