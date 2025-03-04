import { renderHook, act } from '@testing-library/react';
import useProjects from '@/hooks/useProjects';
import { dataProjects } from '@/services/projects';

jest.mock('@/services/projects', () => ({
  dataProjects: [
    {
      title: "Projeto Teste 1",
      level: "Iniciante",
      link: "https://teste1.com",
      img: "/test1.png",
      description: "Descrição do projeto teste 1",
      section: 1
    },
    {
      title: "Projeto Teste 2",
      level: "Intermediário",
      link: "https://teste2.com",
      img: "/test2.png",
      description: "Descrição do projeto teste 2",
      section: 2
    }
  ]
}));

describe('useProjects Hook', () => {
  it('deve carregar projetos do dataProjects no montar', () => {
    const { result } = renderHook(() => useProjects());
    
    act(() => {
      jest.runAllTimers();
    });

    expect(result.current.projects).toEqual(dataProjects);
  });

  it('deve manter a estrutura do projeto', () => {
    const { result } = renderHook(() => useProjects());
    
    act(() => {
      jest.runAllTimers();
    });

    const project = result.current.projects[0];
    expect(project).toHaveProperty('title');
    expect(project).toHaveProperty('level');
    expect(project).toHaveProperty('link');
    expect(project).toHaveProperty('img');
    expect(project).toHaveProperty('description');
    expect(project).toHaveProperty('section');
  });

  it('deve manter os projetos após o carregamento inicial', () => {
    const { result } = renderHook(() => useProjects());
    
    act(() => {
      jest.runAllTimers();
    });

    const initialProjects = [...result.current.projects];
    
    act(() => {
      jest.runAllTimers();
    });

    expect(result.current.projects).toEqual(initialProjects);
  });
}); 