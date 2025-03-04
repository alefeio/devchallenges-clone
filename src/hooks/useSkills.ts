'use client';

import { useEffect, useReducer } from 'react';
import { dataSkills } from '../services/skills';

interface Skill {
    name: string;
    description: string;
    link: string;
    icon: string;
    section: number;
}

interface SkillState {
    skills: Skill[];
}

type SkillAction = {
    type: 'SET_SKILLS';
    payload: Skill[];
}

const initialState: SkillState = {
    skills: []
}

const reducer = (state: SkillState, action: SkillAction): SkillState => {
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
        dispatch({ type: 'SET_SKILLS', payload: data });
    }, []);

    return skills;
}

export default useSkills;
