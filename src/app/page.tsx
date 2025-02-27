import Image from "next/image";
import styles from "@/styles/page.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ImageSection from "@/components/ImageSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SoftwareEngineer from "@/components/SoftwareEngineer";
import RoadmapSection from "@/components/RoadmapSection";
import ProjectSection from "@/components/ProjectSection";
import PracticeSection from "@/components/PracticeSection";

import { projects, projects2, projects3 } from "@/services/projects";

import { skills, skills2, skills3 } from "@/services/skills";


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
        <aside>
          <HowItWorksSection />
          <RoadmapSection icon="/roteiro1.svg" subtitle="Roteiro de carreira" title="Roteiro para Desenvolvedor Web Responsivo" description="Este roteiro foi criado para você praticar HTML, CSS e JavaScript básico. Você pode praticar com frameworks como Tailwind CSS, Bootstrap,... com base na sua necessidade." position="left" />
          <div className={styles.projectAndPractice} style={{ flexDirection: 'row' }}>
            <ProjectSection projects={projects} />
            <PracticeSection skills={skills} />
          </div>
          <RoadmapSection icon="/js.svg" subtitle="Trajetória profissional" title="Roteiro para Desenvolvedores JavaScript" description="Este roteiro foi criado para você praticar HTML, CSS e JavaScript básico. Você pode praticar com frameworks como Tailwind CSS, Bootstrap,... com base na sua necessidade." position="right" />
          <div className={styles.projectAndPractice} style={{ flexDirection: 'row-reverse' }}>
            <ProjectSection projects={projects2} />
            <PracticeSection skills={skills2} />
          </div>
          <RoadmapSection icon="/monitor.svg" subtitle="Trajetória profissional" title="Roteiro para Desenvolvedor Frontend" description="Este roteiro é o lugar onde você pratica frameworks populares que são necessários em quase todos os trabalhos de Frontend, como React, Vue.js e Svelte,..." position="left" />
          <div className={styles.projectAndPractice} style={{ flexDirection: 'row' }}>
            <ProjectSection projects={projects3} />
            <PracticeSection skills={skills3} />
          </div>
        </aside>
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
