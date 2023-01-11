import {Component} from 'react'
import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    console.log(timelineItemsList)
    return (
      <>
        <h1>MY JOURNEY OF CCBP 4.0</h1>
        {/* {timelineItemsList.map(each =>
          each.categoryId === 'COURSE' ? (
            <CourseTimelineCard key={each.id} courseDetails={each} />
          ) : (
            <ProjectTimelineCard key={each.id} projectDetails={each} />
          ),
        )} */}
        <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
          {timelineItemsList.map(each =>
            each.categoryId === 'COURSE' ? (
              <CourseTimelineCard key={each.id} courseDetails={each} />
            ) : (
              <ProjectTimelineCard key={each.id} projectDetails={each} />
            ),
          )}
        </Chrono>
      </>
    )
  }
}

export default TimelineView
