import Image from "next/image";
import styles from "../styles/RoadmapSection.module.scss";

interface RoadmapSectionProps {
    icon: string;
    subtitle: string;
    title: string;
    description: string;
    position?: 'left' | 'right' | 'center';
}

export default function RoadmapSection({
    icon,
    subtitle,
    title,
    description,
    position = 'left'
}: RoadmapSectionProps) {
    return (
        <section
            className={`${styles.roadmap} ${styles[position]}`}
            style={{
                backgroundImage: icon === '/roteiro1.svg' ? `url('/element3.svg')` : 'none',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div
                className={`${styles.container} ${styles[position]}`}
            >
                <div
                    className={`${styles.content} ${styles[position]}`}
                >
                    <div className={styles.icon}>
                        <Image src={icon} alt="Ícone do Roadmap" width={80} height={80} />
                    </div>
                    <p className={styles.subtitle}>{subtitle}</p>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
        </section>
    );
}
