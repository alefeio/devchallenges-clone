import Image from "next/image";
import styles from "../styles/PortfolioSection.module.scss";

export default function PortfolioSection() {
    return (
        <section className={styles.portfolio}>
            <h2>Construa seu portfólio para
                conseguir empregos nas
                principais empresas de
                tecnologia</h2>
            <div className={styles.companies}>
                <div className={styles.divImg}>
                    <Image
                        aria-hidden
                        src="/logos/apple.svg"
                        alt="bg"
                        width={70}
                        height={35}
                    />
                </div>
                <div className={styles.divImg}>
                    <Image
                        aria-hidden
                        src="/logos/microsoft.svg"
                        alt="bg"
                        width={70}
                        height={14.893617021276595}
                    />
                </div>
                <div className={styles.divImg}>
                    <Image
                        aria-hidden
                        src="/logos/google.svg"
                        alt="bg"
                        width={70}
                        height={23.529411764705884}
                    />
                </div>
                <div className={styles.divImg}>
                    <Image
                        aria-hidden
                        src="/logos/spotify.svg"
                        alt="bg"
                        width={70}
                        height={35}
                    />
                </div>
                <div className={styles.divImg}>
                    <Image
                        aria-hidden
                        src="/logos/amazon.svg"
                        alt="bg"
                        width={70}
                        height={21.052631578947366}
                    />
                </div>
            </div>
            <div className={styles.bestProgramming}>
                <Image
                    aria-hidden
                    src="/element.svg"
                    alt="bg"
                    width={80}
                    height={80}
                />
                <h1>A melhor maneira de aprender <br />
                    programação é <br />
                    <span className={styles.gradient}>construindo projetos</span></h1>
                <h3>Aprenda e melhore suas habilidades de programação fazendo e <br />
                    construindo um portfólio excepcional</h3>
            </div>
        </section>
    );
}
