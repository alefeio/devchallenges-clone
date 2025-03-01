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
                        src="/logo.svg"
                        alt="devChallenges"
                        width={160}
                        height={21.66}
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
                        <li className={styles.hasSubmenu}>
                            <Link href="#roadmap">Roteiro de carreira</Link>
                            <ul className={styles.submenu}>
                                <li>
                                    <Link href="#web">
                                        <Image src="/icons/icon1.png" alt="" width={20} height={20} />
                                        Roteiro de desenvolvimento web
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#frontend">
                                        <Image src="/icons/icon2.png" alt="" width={20} height={20} />
                                        Desenvolvedor Front-end
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#fullstack">
                                        <Image src="/icons/icon3.png" alt="" width={20} height={20} />
                                        Desenvolvedor Full-stack
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.hasSubmenu}>
                            <Link href="#projects">Projetos</Link>
                            <ul className={styles.submenu}>
                                <li>
                                    <Link href="#web">
                                        <Image src="/icons/icon4.png" alt="" width={20} height={20} />
                                        Projetos HTML e CSS
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#frontend">
                                        <Image src="/icons/icon5.png" alt="" width={20} height={20} />
                                        Projetos JavaScript
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#fullstack">
                                        <Image src="/icons/icon6.png" alt="" width={20} height={20} />
                                        Projetos frontend
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#fullstack">
                                        <Image src="/icons/icon3.png" alt="" width={20} height={20} />
                                        Projetos fullstack
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li><Link href="#skills">Blogs</Link></li>
                        <li><Link href="#contact">Subscrição</Link></li>
                    </ul>
                </nav>
                <LoginButton label="Entrar" />
            </div>
        </header>
    );
}

export default Header;
