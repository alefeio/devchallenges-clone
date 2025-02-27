import styles from "@/styles/ProjectSection.module.scss";

interface Project {
    title: string;
    level: string;
    link: string;
    img: string;
    description: string;
}

interface ProjectSectionProps {
    projects: Project[];
}

export default function ProjectSection({ projects }: ProjectSectionProps) {
    return (
        <section className={styles.projectSection}>
            <aside>
                <div className={styles.container}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.projectCard}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img src={project.img} alt={project.title} className={styles.image} />
                                <div className={styles.content}>
                                    <div className={styles.header}>
                                        <span className={styles.level}>{project.level}</span>
                                        <div className={styles.progressBar}>
                                            <div className={styles.progress}></div>
                                        </div>
                                    </div>
                                    <h3 className={styles.title}>{project.title}</h3>
                                    <p className={styles.description}>{project.description}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </aside>
        </section>
    );
}
