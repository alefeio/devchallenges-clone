import Image from "next/image";
import styles from "../styles/Footer.module.scss";
import { FaGithub, FaDiscord, FaYoutube, FaTimes } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Image
          aria-hidden
          src="/logo.svg"
          alt="devChallenges"
          width={160}
          height={21.65938864628821}
        />

        <div className={styles.social}>
          <nav>
            <button><FaGithub /></button>
            <button><FaDiscord /></button>
            <button><FaYoutube /></button>
            <button><FaTimes /></button>
          </nav>

          <div className={styles.links}>
            <ul>
              <li>Roteiros de carreira</li>
              <li>Feed da Comunidade</li>
              <li>Assinatura Pro</li>
            </ul>
            <ul>
              <li>Todos os desafios</li>
              <li>Opinião</li>
            </ul>
            <ul>
              <li>Termos e Condições</li>
              <li>Política de Privacidade</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        © 2025 devchallenge.io
      </div>
    </footer>
  );
}
