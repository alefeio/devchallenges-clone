import Image from "next/image";
import styles from "@/styles/page.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ImageSection from "@/components/ImageSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SoftwareEngineer from "@/components/SoftwareEngineer";

export default function Home() {
  return (
    <div>
      <Header />
      <section className={styles.page}>
        <HeroSection />
      </section>
      <section className={styles.page2}>
        <div>
          <PortfolioSection />
          <ImageSection icon="🏃" title="Escape do inferno dos tutoriais de codificação com" description="Pare de assistir apenas tutoriais de codificação e aprenda de verdade criando projetos de programação e revisando códigos de outras pessoas." image="/intro-1.png" position="left" />
          <ImageSection icon="✨" title="Crie um portfólio de desenvolvedores excepcional" description="Projetos de construção ajudam a criar um portfólio de trabalho que mostra suas habilidades para potenciais empregadores." image="/intro-2.png" position="right" />
          <ImageSection icon="🏆" title="Colete novas habilidades de programação" description="Participar de projetos de codificação na vida real ou aprender novas tecnologias pode ajudar você a desenvolver um conjunto diversificado de habilidades e melhorar suas perspectivas de carreira." image="/intro-3.png" position="left" />
        </div>
      </section>
      <section className={styles.page3}>
        <div>
          <HowItWorksSection />
        </div>
      </section>
      <section className={styles.page4}>
        <div>
          <SoftwareEngineer />
        </div>
      </section>
      <Footer />
    </div>
  );
}
