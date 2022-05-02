import './admin.css';
import AboutAdmin from './AboutAdmin';
import EducationAdmin from './EducationAdmin';
import ProjectsAdmin from './ProjectsAdmin';
import ExperienceAdmin from './ExperienceAdmin';


const Admin = () => {
  return (
    <>
      <div className='main-container'>
        <br />
        <h2 className='title'>Admin forms</h2>
        <div className='admin-center'>
          
          {/* About */}
          <h4 className='admin-title'>About Component</h4>
          <AboutAdmin />
          
          <br />
          <br />
          <hr style={{border: "1px solid lightgray"}} />
          <br />

          {/* Education */}
          <h4 className='admin-title'>Education Component</h4>
          <EducationAdmin />

          <br />
          <br />
          <hr style={{border: "1px solid lightgray"}} />
          <br />

          {/* Projects */}
          <h4 className='admin-title'>Projects Component</h4>
          <ProjectsAdmin />

          <br />
          <br />
          <hr style={{border: "1px solid lightgray"}} />
          <br />

          {/* Experience */}
          <h4 className='admin-title'>Experience Component</h4>
          <ExperienceAdmin />

        </div>
      </div>
    </>
  )
}

export default Admin;