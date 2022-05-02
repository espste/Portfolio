import './about.css';
import { useContext } from 'react';
import { DataContext } from '../../components/Context/GlobalContext';


const About = () => {
  const state = useContext(DataContext);
  // const [about] = state.about;

  return (
    <div className="main-container">
        <div className="about">
          <h2 className="title">
            about
          </h2>
        </div>

        <div className="about-info">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur deserunt quis consectetur, nemo voluptate odit totam ipsum repellat veritatis magnam consequatur, earum quaerat. Natus autem laborum voluptas! Dignissimos, reiciendis illum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur deserunt quis consectetur, nemo voluptate odit totam ipsum repellat veritatis magnam consequatur, earum quaerat. Natus autem laborum voluptas! Dignissimos, reiciendis illum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur deserunt quis consectetur, nemo voluptate odit totam ipsum repellat veritatis magnam consequatur, earum quaerat. Natus autem laborum voluptas! Dignissimos, reiciendis illum?</p>
        </div>
    </div>
  )
}

export default About;