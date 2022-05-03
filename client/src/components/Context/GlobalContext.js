import { createContext, useEffect, useState } from 'react';
import axios from 'axios';


export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [about, setAbout] = useState([]);
    const [education, setEducation] = useState([]);

    const state = {
        about: [about, setAbout],
        education: [education, setEducation]
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