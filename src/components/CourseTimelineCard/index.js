import {Component} from 'react'
import {AiFillClockCircle} from 'react-icons/ai'

class CourseTimelineCard extends Component {
  render() {
    const {courseDetails} = this.props
    const {courseTitle, description, duration, tagsList} = courseDetails
    return (
      <div className="course-card-container">
        <div className="heading-container">
          <h2>{courseTitle}</h2>
          <div>
            <AiFillClockCircle />
            <span>{duration}</span>
          </div>
        </div>
        <p>{description}</p>
        {tagsList.map(each => (
          <button type="button">{each.name}</button>
        ))}
      </div>
    )
  }
}

export default CourseTimelineCard
