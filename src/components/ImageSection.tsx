import Image from "next/image";
import styles from "../styles/ImageSection.module.scss";

interface ImageSectionProps {
  image: string;
  title: string;
  description: string;
  position: string;
  icon: string;
  width: number;
  height: number;
}

export default function ImageSection({ 
  image, 
  title, 
  description, 
  position = 'right',
  icon, 
  width = 624,
  height = 420
}: ImageSectionProps) {
  return (
    <section className={styles.imageSection}>
      <div className={`${styles.container} ${styles[position]}`}>
        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt={title}
            width={width}
            height={height}
            quality={100}
            priority={true}
          />
        </div>
        <div className={styles.content}>
          <h2>
            <span className={styles.icon}>{icon}</span>
            {title}
          </h2>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}
