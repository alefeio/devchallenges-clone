import Image from "next/image";
import styles from "../styles/ImageSection.module.scss";

interface ImageSectionProps {
  image: string;
  title: string;
  description: string;
  position?: 'left' | 'right';
  icon: string, 
  width?: number, 
  height?: number
}

export default function ImageSection({ 
  image, 
  title, 
  description, 
  position = 'left',
  icon, 
  width, 
  height
}: ImageSectionProps) {
  return (
    <section className={styles.imageSection}>
      <div className={`${styles.container} ${styles[position]}`}>
        <div className={styles.imageContainer}>
          <Image
            aria-hidden
            src={image}
            alt={title}
            width={width}
            height={height}
          />
        </div>
        <div className={styles.content}>
          <h2>
            <span className={styles.icon}>{icon}</span> {title}
          </h2>
          <p>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
