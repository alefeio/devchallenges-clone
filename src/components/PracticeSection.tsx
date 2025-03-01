import React from "react";
import styles from "@/styles/PracticeSection.module.scss";
import Image from "next/image";

interface Skill {
    name: string;
    description: string;
    link: string;
    icon: string;
    section: number;
}

interface PracticeSectionProps {
    skills: Skill[];
}

const PracticeSection = ({ skills }: PracticeSectionProps) => {
    if (!skills) return (
        <section className={styles.practiceSection}>
            <div>Nenhuma habilidade encontrada</div>
        </section>
    );

    return (
        <section className={styles.practiceSection}>
            <div>
                <h3 className={styles.title}>Para praticar:</h3>
                <p className={styles.subtitle}>Habilidades sugeridas</p>
                <ul className={styles.skillsList}>
                    {skills.map((skill) => (
                        <li key={skill.name}>
                            <a href={skill.link} target="_blank" rel="noopener noreferrer" className={styles.skillItem}>
                                <div className={styles.iconContainer}>
                                    <Image src={skill.icon} alt={skill.name} width={40} height={40} />
                                </div>
                                <div>
                                    <label className={styles.skillName}>{skill.name}</label>
                                    <p className={styles.skillDescription}>{skill.description}</p>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.info}>
                ℹ️ Você pode trabalhar com idiomas sugeridos ou escolher qualquer habilidade que queira praticar
            </div>
        </section>
    );
};

export default PracticeSection;
