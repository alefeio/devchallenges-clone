import Image from "next/image";
import styles from "../styles/ImageSection.module.scss";

export default function ImageSection(props: { icon: string, title: string, description: string, image: string, position?: string }) {
  return (
    <section className={styles.learn} style={{ flexDirection: props.position === 'left' ? 'row-reverse' : 'row' }}>
      <div className={styles.imageContainer}>
        <Image
          aria-hidden
          src={props.image}
          alt={props.title}
          width={624}
          height={420}
        />
      </div>
      <div className={styles.content}>
        <h2>
          <span className={styles.icon}>{props.icon}</span> {props.title}
        </h2>
        <p>
          {props.description}
        </p>
      </div>
    </section>
  );
}
