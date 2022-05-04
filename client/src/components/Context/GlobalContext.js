import { createContext, useEffect, useState } from 'react';
import axios from 'axios';


export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [about, setAbout] = useState([]);
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [projects, setProjects] = useState([]);

    const state = {
        about: [about, setAbout],
        education: [education, setEducation],
        experience: [experience, setExperience],
        projects: [projects, setProjects]
    };

    //fetching data from routes
    const fetchData = async () => {

        //fetching about
        const res1 = await axios.get(`/about`);
        // console.log(res1);
        setAbout(res1.data);

        //fetching education
        const res2 = await axios.get(`/education`);
        // console.log(res2);
        setEducation(res2.data);
        
        //fetching experience
        const res3 = await axios.get(`/experience`);
        // console.log(res3);
        setExperience(res3.data);

        //fetching projects
        const res4 = await axios.get(`/project`);
        // console.log(res4);
        setProjects(res4.data);

    };

    useEffect(() => {
        try {
            fetchData();
        } catch (err) {
            console.log(err);            
        }
    }, []);

    return (
        <DataContext.Provider value={state}>
            {children}
        </DataContext.Provider>
    )
};