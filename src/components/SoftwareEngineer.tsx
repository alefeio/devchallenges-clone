import styles from "../styles/SoftwareEngineer.module.scss";
import Button from "./Button";

export default function SoftwareEngineer() {
  return (
    <section className={styles.softwareEngineer}>
      <div className={styles.container}>
        <h1>
          Torne-se um engenheiro de software com{" "}
          <span className={styles.gradient}>devChallenges.io</span>
        </h1>
        <p>
          A melhor maneira de aprender programação é construindo projetos. Criar projetos de codificação, como aplicativos simples ou sites, ajuda a entender os fundamentos da programação, pensar como um desenvolvedor e ganhar experiência prática.
        </p>
        <Button label="Comece a codificar agora" />
      </div>
    </section>
  );
}
