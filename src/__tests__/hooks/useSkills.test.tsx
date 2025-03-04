import { renderHook, act } from '@testing-library/react';
import useSkills from '@/hooks/useSkills';
import { dataSkills } from '@/services/skills';

jest.mock('@/services/skills', () => ({
  dataSkills: [
    {
      name: "HTML",
      description: "Linguagem de marcação",
      link: "https://html.com",
      icon: "/html-icon.svg",
      section: 1
    },
    {
      name: "CSS",
      description: "Estilização",
      link: "https://css.com",
      icon: "/css-icon.svg",
      section: 2
    }
  ]
}));

describe('useSkills Hook', () => {
  it('deve carregar habilidades do dataSkills no montar', () => {
    const { result } = renderHook(() => useSkills());
    
    act(() => {
      jest.runAllTimers();
    });

    expect(result.current.skills).toEqual(dataSkills);
  });

  it('deve manter a estrutura da habilidade', () => {
    const { result } = renderHook(() => useSkills());
    
    act(() => {
      jest.runAllTimers();
    });

    const skill = result.current.skills[0];
    expect(skill).toHaveProperty('name');
    expect(skill).toHaveProperty('description');
    expect(skill).toHaveProperty('link');
    expect(skill).toHaveProperty('icon');
    expect(skill).toHaveProperty('section');
  });

  it('deve filtrar habilidades por seção', () => {
    const { result } = renderHook(() => useSkills());
    
    act(() => {
      jest.runAllTimers();
    });

    const section1Skills = result.current.skills.filter(s => s.section === 1);
    const section2Skills = result.current.skills.filter(s => s.section === 2);

    expect(section1Skills).toHaveLength(1);
    expect(section2Skills).toHaveLength(1);
  });

  it('deve ter caminhos de ícone válidos', () => {
    const { result } = renderHook(() => useSkills());
    
    act(() => {
      jest.runAllTimers();
    });

    result.current.skills.forEach(skill => {
      expect(skill.icon).toMatch(/^\/.*\.(svg|png|jpg|jpeg)$/i);
    });
  });

  it('deve manter as habilidades após o carregamento inicial', () => {
    const { result } = renderHook(() => useSkills());
    
    act(() => {
      jest.runAllTimers();
    });

    const initialSkills = [...result.current.skills];
    
    act(() => {
      jest.runAllTimers();
    });

    expect(result.current.skills).toEqual(initialSkills);
  });
}); 