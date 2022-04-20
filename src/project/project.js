import React from "react";
import "./project.css";

const project = (props) => {
  const openProject = () => {
    if (props.url != null) {
      window.open(props.url);
    }
  };

  return (
    <div className="project-container">
      <div className="project-title">{props.title}</div>
      <img
        className={props.imageType}
        src={props.image}
        onClick={openProject}
      />
      <div className="project-description">{props.description}</div>
    </div>
  );
};
export default project;
