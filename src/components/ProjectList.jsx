import React from "react";

class ProjectList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="projectsContainer">
                {this.props.projects.map(el => 
                    <img src={el.img} className="image"></img>
                )}
            </div>
        )
    }
}

export default ProjectList