'use client';

import Image from "next/image";
import styles from "../styles/Footer.module.scss";
import { FaGithub, FaDiscord, FaYoutube, FaTimes } from "react-icons/fa";
import Link from "next/link";

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
        </div>

        <div className={styles.links}>
          <ul>
            <li><Link href="/">Todos os desafios</Link></li>
            <li><Link href="/">Opinião</Link></li>
            <li><Link href="/">Roteiros de carreira</Link></li>
            <li><Link href="/">Feed da Comunidade</Link></li>
            <li><Link href="/">Assinatura Pro</Link></li>
          </ul>
          <ul>
            <p>Trajetórias de Carreira</p>
            <li><Link href="/">Roteiro para Desenvolvedor Web</Link></li>
            <li><Link href="/">Desenvolvedor Full-stack</Link></li>
            <p>Projetos</p>
            <li><Link href="/">Projetos HTML e CSS</Link></li>
            <li><Link href="/">Projetos JavaScript</Link></li>
            <li><Link href="/">Projetos Front-end</Link></li>
            <li><Link href="/">Projetos Full-stack</Link></li>
          </ul>
          <ul>
            <li><Link href="/">Blogs</Link></li>
            <li><Link href="/">Termos e Condições</Link></li>
            <li><Link href="/">política de Privacidade</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        © 2025 devchallenge.io
      </div>
    </footer>
  );
}
