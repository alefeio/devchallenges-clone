import Image from "next/image";
import styles from "../styles/HowItWorksSection.module.scss";
import LoginButton from "./LoginButton";

export default function HowItWorksSection() {
    return (
        <section className={styles.howItWorks}>
            <div className={styles.container}>
                <Image
                    aria-hidden
                    src="/monitor.svg"
                    alt="bg"
                    width={80}
                    height={80}
                />
                <h2>Como <span className={styles.gradient}>funciona</span></h2>
                <p>Comece facilmente com 3 etapas</p>
                <div className={styles.steps}>
                    <div className={styles.step}>
                        <div className={styles.number}>
                            <div className={styles.circle}>🔍</div>
                            <div className={styles.gradient}>[Passo 1]</div>
                        </div>
                        <h3>Escolha um desafio de programação</h3>
                        <p>Escolha um desafio, os caminhos ajudarão você a navegar. Você terá acesso ao editor de código, onde poderá baixar os recursos e obter os requisitos.</p>
                    </div>

                    <div className={styles.step}>
                        <div className={styles.number}>
                            <div className={styles.circle2}>👨🏻‍💻</div>
                            <div className={styles.gradient}>[Passo 2]</div>
                        </div>
                        <h3>Código e Enviar</h3>
                        <p>Codifique o projeto em seu próprio espaço. Para enviar o projeto, você deve fornecer um link de repositório do GitHub e um link de demonstração. O link de demonstração é onde seu projeto é implantado.</p>
                    </div>

                    <div className={styles.step}>
                        <div className={styles.number}>
                            <div className={styles.circle3}>💬</div>
                            <div className={styles.gradient}>[Passo 3]</div>
                        </div>
                        <h3>Revisão e Feedback</h3>
                        <p>Para melhorar seu código e ampliar seu conhecimento, revise o código de outros e dê a eles feedback para melhorar. Essas habilidades são essenciais no local de trabalho.</p>
                    </div>
                </div>
                <LoginButton label="Comece a codificar agora" />
            </div>
        </section>
    );
} 