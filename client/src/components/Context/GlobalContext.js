import { createContext, useEffect, useState } from 'react';
import axios from 'axios';


export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [about, setAbout] = useState([]);
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [projects, setProjects] = useState([]);
    const [isLogin, setIsLogin] = useState(false);
    const [loginFin, setLoginFin] = useState(true);
    const [dataFin, setDataFin] = useState(true);

    const state = {
        about: [about, setAbout],
        education: [education, setEducation],
        experience: [experience, setExperience],
        projects: [projects, setProjects],
        isLogin: [isLogin, setIsLogin]
    };

    //checking login token
    const checkLogin = async () => {
        const token = localStorage.getItem('tokenStore');
        if(token) {
            const verified = await axios.get(`/user/verify`, {
                headers: {
                    Authorization: token
                }
            });
            // console.log(verified);

            setIsLogin(verified.data);
            if(verified.data === false) {
                return localStorage.clear();
            }
        } else {
            setIsLogin(false);
        }
    };

    useEffect(() => {
        try {
            
            if(loginFin) {
                checkLogin();
            }
            return setLoginFin(false);

        } catch (error) {
            console.log(error);
        }
    }, [loginFin])

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

            if(dataFin) {
                fetchData();
            }
            
            return setDataFin(false);

        } catch (err) {
            console.log(err);            
        }
    }, [dataFin]);

    return (
        <DataContext.Provider value={state}>
            {children}
        </DataContext.Provider>
    )
};