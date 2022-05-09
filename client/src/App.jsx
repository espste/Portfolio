import './App.css';
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import { DataContext } from './components/Context/GlobalContext';
// Pages
import Hero from './pages/Hero/Hero';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Education from './pages/Education/Education';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
// Admin Component
import Admin from './components/AdminComp/Admin';
// Edit Components
import EditAbout from './components/EditComp/EditAbout'
import EditEducation from './components/EditComp/EditEducation'
import EditExperience from './components/EditComp/EditExperience'
import EditProjects from './components/EditComp/EditProjects'

const App = () => {
  const state = useContext(DataContext);
  const [isLogin] = state.isLogin;


  return (
    <div className="App">
      <Navbar />

      <Element className="Hero" >
        <Routes>
          <Route exact index element={<Hero />} />
        </Routes>
      </Element>
      <Element className='About'>
        <Routes>
          <Route path="/" element={<About />}/> 
        </Routes>
      </Element>
      <Element className="Education">
        <Routes>
          <Route exact path="/" element={<Education />}/>
        </Routes>
      </Element>
      <Element className='Projects'>
        <Routes>
          <Route exact path="/" element={<Projects />}/>
        </Routes>
      </Element>
      <Element className='Experience'>
        <Routes>
          <Route exact path="/" element={<Experience />}/>
        </Routes>
      </Element>
      <Element className="Contact">
        <Routes>
          <Route exact path="/" element={<Contact />}/>
        </Routes>
      </Element>
      {/* ADMIN & LOGIN */}
      <Routes>
          <Route exact path="/admin" element={isLogin ? <Admin /> : <Login />}/> 
      </Routes>
      <Routes>
          <Route exact path="login" element={isLogin ? <Admin /> : <Login />}/> 
      </Routes>
      {/* EDIT ROUTES */}
      <Routes>
        <Route exact path="/edit/:id" element={<EditAbout />} /> 
      </Routes>
      <Routes>
        <Route exact path="/editEducation/:id" element={<EditEducation />} /> 
      </Routes>
      <Routes>
        <Route exact path="/editProject/:id" element={<EditProjects />} /> 
      </Routes>
      <Routes>
        <Route exact path="/editExperience/:id" element={<EditExperience />} /> 
      </Routes>
      {/* FOOTER */}
      <Routes>
          <Route exact path="/" element={<Footer />}/> 
      </Routes>
    </div>
  );
}

export default App;