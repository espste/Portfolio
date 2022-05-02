import './projects.css';
import logo from '../../images /cable.jpg';
import arduino1 from '../../images /Arduino1.jpg';
import panel from '../../images /panel.jpg';
import tablet from '../../images /tablet.jpg';

const Projects = () => {
  return (
    <div className='main-container'>
      <div className="projects">
        <h2 className="title">projects</h2>
          <div className="projects-center">
            
            <div className="single-project">
              <div className="single-project-img">
                <img src={tablet} alt="" />
              </div>

              <div className="single-project-info">
                <h3>smartphone project</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid labore dolorem eum pariatur eaque sapiente quasi? Autem accusamus quam, ipsum, quidem itaque, inventore deserunt ab eum est non sit vitae.</p>
              </div>
            </div>

            <div className="single-project">
              <div className="single-project-img">
                <img src={logo} alt="" />
              </div>

              <div className="single-project-info">
                <h3>smartphone project</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid labore dolorem eum pariatur eaque sapiente quasi? Autem accusamus quam, ipsum, quidem itaque, inventore deserunt ab eum est non sit vitae.</p>
              </div>
            </div>

            <div className="single-project">
              <div className="single-project-img">
                <img src={arduino1} alt="" />
              </div>

              <div className="single-project-info">
                <h3>smartphone project</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid labore dolorem eum pariatur eaque sapiente quasi? Autem accusamus quam, ipsum, quidem itaque, inventore deserunt ab eum est non sit vitae.</p>
              </div>
            </div>

            <div className="single-project">
              <div className="single-project-img">
                <img src={panel} alt="" />
              </div>

              <div className="single-project-info">
                <h3>smartphone project</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid labore dolorem eum pariatur eaque sapiente quasi? Autem accusamus quam, ipsum, quidem itaque, inventore deserunt ab eum est non sit vitae.</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Projects;