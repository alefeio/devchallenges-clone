'use client';

import { useEffect, useReducer } from 'react';
import { dataSkills } from '../services/skills';

const initialState = {
    skills: []
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SET_SKILLS':
            return { ...state, skills: action.payload };
        default:
            return state;
    }   
}

const useSkills = () => {
    const [skills, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const data = dataSkills;

        console.log('data', data);

        dispatch({ type: 'SET_SKILLS', payload: data });
    }, []);

    return skills;
}

export default useSkills;
