'use client';

import { useEffect, useReducer } from 'react';
import { dataProjects } from '../services/projects';

interface Project {
    title: string;
    level: string;
    link: string;
    img: string;
    description: string;
    section: number;
}

interface ProjectState {
    projects: Project[];
}

type ProjectAction = {
    type: 'SET_PROJECTS';
    payload: Project[];
}

const initialState: ProjectState = {
    projects: []
}

const reducer = (state: ProjectState, action: ProjectAction): ProjectState => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return { ...state, projects: action.payload };
        default:
            return state;
    }
}

const useProjects = () => {
    const [projects, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const data = dataProjects;
        dispatch({ type: 'SET_PROJECTS', payload: data });
    }, []);

    return projects;
}

export default useProjects;
