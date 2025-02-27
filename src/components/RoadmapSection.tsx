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
            className={styles.roadmap}
            style={{
                justifyContent: position === 'center' ? 'center' : position === 'left' ? 'flex-start' : 'flex-end',
                textAlign: position,
                display: 'flex',
                alignItems: position === 'center' ? 'center' : position === 'left' ? 'flex-start' : 'flex-end',
                backgroundImage: icon === '/roteiro1.svg' ? `url('/element3.svg')` : 'none',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div
                className={styles.container}
                style={{
                    backgroundImage: position === 'left' ? `url('/element2.svg')` : position === 'right' ? `url('/element4.svg')` : 'none',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: position === 'left' ? '50px top' : position === 'right' ? '90px top' : 'none',
                }}
            >
                <div
                    className={styles.content}
                    style={{
                        display: 'flex',
                        justifyContent: position === 'center' ? 'center' : position === 'left' ? 'flex-start' : 'flex-end',
                        alignItems: position === 'center' ? 'center' : position === 'left' ? 'flex-start' : 'flex-end',
                    }}
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
