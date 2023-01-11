import {Component} from 'react'
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

class ProjectTimelineCard extends Component {
  render() {
    const {projectDetails} = this.props
    const {
      description,
      duration,
      imageUrl,
      projectTitle,
      projectUrl,
    } = projectDetails
    return (
      <div className="project-card-container">
        <img src={imageUrl} alt="project" className="card-image" />
        <div className="heading-container">
          <h2>{projectTitle}</h2>
          <div>
            <AiFillCalendar />
            <span>{duration}</span>
          </div>
        </div>
        <p>{description}</p>
        <a href={projectUrl}>Visit</a>
      </div>
    )
  }
}

export default ProjectTimelineCard
