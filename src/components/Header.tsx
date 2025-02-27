import Link from 'next/link';
import styles from '@/styles/Header.module.scss';
import LoginButton from './LoginButton';
import Image from 'next/image';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/">
                    <Image
                        aria-hidden
                        src="/logo.svg"
                        alt="devChallenges"
                        width={160}
                        height={21.65938864628821}
                    />
                </Link>
                <nav>
                    <Link href="/">Roteiro de carreira</Link>
                    <Link href="/">Projetos</Link>
                    <Link href="/">Blogs</Link>
                    <Link href="/">Subscrição</Link>
                </nav>
                <LoginButton label="Entrar" />
            </div>
        </header>
    );
};

export default Header;
