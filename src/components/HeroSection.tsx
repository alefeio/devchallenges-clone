'use client';
import styles from "../styles/HeroSection.module.scss";
import Button from "./Button";

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.new}>
                    <small>Novo</small>
                    <strong>Comece com o novo currículo gratuitamente</strong>
                </div>
                <h1>
                    Aprenda a programar <br />
                    com <span className={styles.gradient}>projetos de <br />
                        codificação da vida real</span>
                </h1>
                <p className={styles.description}>
                    Torne-se um proficiente programador front-end ou full-stack com 
                    nossos desafios de codificação cuidadosamente selecionados. 
                    Melhore suas habilidades e consiga o emprego de desenvolvedor 
                    dos seus sonhos.
                </p>
                <Button label="Melhore suas habilidades de front-end agora" />
                <p><small>Mais de 120.000 desafios concluídos.</small></p>
            </div>
        </section>
    );
}