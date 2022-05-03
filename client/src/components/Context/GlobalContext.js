import { createContext, useEffect, useState } from 'react';
import axios from 'axios';


export const DataContext = createContext();

export const DataProvider = ({props, children}) => {
    const [about, setAbout] = useState([]);
    
    const state = {
        about: [about, setAbout]
    };

    //fetching data from about route
    const fetchData = async () => {
        const res1 = await axios.get(`/about`);
        
        setAbout(res1.data);
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