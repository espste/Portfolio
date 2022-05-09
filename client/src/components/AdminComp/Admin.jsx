import './admin.css';
// Admin Components
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
        <div className="admin-center">

          <h4 className="admin-title">About component</h4>
          <AboutAdmin />
          <br/>
          <br/>
          <hr style={{border:"1px solid lightgrey"}} />
          <br/>

          <h4 className="admin-title">Education component</h4>
          <EducationAdmin />
          <br/>
          <br/>
          <hr style={{border:"1px solid lightgrey"}} />
          <br/>

   
          <h4 className="admin-title">Projects component</h4>
          <ProjectsAdmin />
          <br/>
          <br/>
          <hr style={{border:"1px solid lightgrey"}} />
          <br/>

          <h4 className="admin-title">Experience component</h4>
          <ExperienceAdmin />
          <br/>

        </div>
      </div>
    </>
  )
}

export default Admin;