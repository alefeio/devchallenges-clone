'use client';

import { useEffect, useReducer } from 'react';
import { dataProjects } from '../services/projects';

const initialState = {
    projects: []
}

const reducer = (state: any, action: any) => {
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

        console.log('data', data);

        dispatch({ type: 'SET_PROJECTS', payload: data });
    }, []);

    return projects;
}

export default useProjects;
