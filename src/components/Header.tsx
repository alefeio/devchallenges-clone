"use client"

import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.scss';
import LoginButton from './LoginButton';
import Image from 'next/image';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Image
                        aria-hidden
                        src="/logo.svg"
                        alt="devChallenges"
                        width={160}
                        height={21.65938864628821}
                    />
                </Link>

                <button 
                    className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
                    <ul>
                        <li><Link href="#about">Sobre</Link></li>
                        <li><Link href="#projects">Projetos</Link></li>
                        <li><Link href="#skills">Habilidades</Link></li>
                        <li><Link href="#contact">Contato</Link></li>
                    </ul>
                </nav>
                <LoginButton label="Entrar" />
            </div>
        </header>
    );
}

export default Header;
