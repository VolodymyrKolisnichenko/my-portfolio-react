import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { projectsList } from "../components/helpers/projectsList";

const Project = () => {
  const { id } = useParams();
  const project = projectsList[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <a href={project.link} target="_blank" rel="noreferrer">
            <img
              src={project.imgBig}
              alt={project.title}
              className="project-details__cover"
            />
          </a>

          <div className="project-details__desc">
            <p>{project.skills}</p>
          </div>

          <BtnGitHub link={project.gitHubLink} />
        </div>
      </div>
    </main>
  );
};

export default Project;
