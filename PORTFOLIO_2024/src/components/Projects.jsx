import { projects } from "../helpers";

const Projects = () => {
  return (
    <section>
        
        <div style={{padding: '0 3rem'}}>
            <h2 style={{marginBottom: '3rem', paddingBottom: '.5rem',borderBottom: '1px solid rgba(0,0,0,0.1)'}}>Projects</h2>
        </div>
        <ul className="projects-container">
            
        {
            projects && projects.map(project => {
                return (
                    <li key={project.name} className="project-card">
                        <a href={project.url} target="_blank" rel="noreferrer" className="project-img-container">
                        <picture>
                            <img src={project.img} alt={project.name} />
                        </picture>
                        </a>
                        <div style={{flex: 1}}>
                        <h2>{project.name}</h2>
                        <p className="project-type">{project.type}</p>
                        <p className="project-description">{project.description}</p>
                        </div>
                        <div className="btn-container">
                        <a href={project.code} className="btn" target="_blank" rel='noreferrer'>CODE</a>
                        <a href={project.url} className="btn" target="_blank" rel='noreferrer'>PREVIEW</a>
                        </div>
                    </li>
                )
            })
        }
        </ul>
    </section>
  )
}

export default Projects