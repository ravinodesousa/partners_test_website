import rectangle10 from "../images/Rectangle10.png";
import rectangle11 from "../images/Rectangle11.png";
import rectangle12 from "../images/Rectangle12.png";

const worked_projects = [
  {
    img_src: rectangle10,
    img_alt: "Rectangle10",
    project_name: "GEORGIA LAMBROU RESIDENCE",
  },

  {
    img_src: rectangle11,
    img_alt: "Rectangle11",
    project_name: "GEORGIA LAMBROU RESIDENCE",
  },

  {
    img_src: rectangle12,
    img_alt: "Rectangle12",
    project_name: "GEORGIA LAMBROU RESIDENCE",
  },
];
function Projects() {
  return (
    <>
      <p
        id="Projects"
        style={{ fontSize: 25, fontWeight: 700 }}
        className="pt-5 titles pb-5 container"
      >
        Our Projects
      </p>
      <div className="row ">
        {worked_projects.map((project) => {
          return (
            <div
              className="project-img-container col-sm-12 col-md-4 p-1"
              // style={{ height: 366, width: 477 }}
            >
              <img
                src={project.img_src}
                alt={project.img_alt}
                className="img-fluid"
              />
              <div className="project-img-overlay ">
                <div className="project-img-text">{project.project_name}</div>
              </div>
            </div>
          );
        })}
      </div>

      <p
        style={{ fontWeight: 500, fontSize: 12 }}
        className="pb-5 pt-5 container"
      >
        {">"}Our Projects
      </p>
    </>
  );
}

export default Projects;
