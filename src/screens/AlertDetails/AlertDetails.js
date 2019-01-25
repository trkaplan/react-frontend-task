import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import {
  FaUser,
  FaUsers,
  FaCalendarAlt,
  FaTags,
  FaEye,
  FaEyeSlash,
  FaStickyNote
} from "react-icons/fa"
import {
  PageWrapper,
  PageTitle,
  Message,
  PriorityBadge,
  StatusTag,
  NotesTag,
  NotesBox,
  Tag,
  TagGroup,
  Column,
  Row,
  SecondRow,
  Badge
} from "./styled"
import callApi from "../../utils/apiCaller"
import PRIORITY_LIST from "./priority-list"
import { API_URL_ALERT_DETAILS, API_URL_ALERT_NOTES } from "../../constants"

class AlertDetails extends Component {
  state = {
    details: {},
    notes: {},
    isLoading: true
  }

  componentDidMount() {
    const { match } = this.props
    const { id } = match.params

    const options = { method: "GET" }
    const promises = [
      // TODO Convert querystrings to an object. Since fetch does not support
      // (https://github.com/github/fetch/issues/256) this, using Axios would be better.
      callApi(`${API_URL_ALERT_DETAILS}?id=${id}`, options),
      callApi(`${API_URL_ALERT_NOTES}?alertId=${id}`, options)
    ]
    Promise.all(promises).then(([details, notes]) => {
      // TODO handle empty service response
      const detailsObject = details[0]
      const { priority, tagsExtracted } = this.extractTags(
        detailsObject.tag,
        PRIORITY_LIST
      )
      this.setState({
        details: detailsObject,
        notes,
        priority,
        tagsExtracted,
        isLoading: false
      })
    })
  }

  extractTags = (tags, priorityList) => {
    let priority = ""
    const tagsExtracted = []
    tags.forEach(tag => {
      if (priorityList[tag]) {
        priority = priorityList[tag]
      } else {
        tagsExtracted.push(tag)
      }
    })
    return { priority, tagsExtracted }
  }

  toggleNotes = () => {
    this.setState(prevState => ({
      notesVisible: !prevState.notesVisible
    }))
  }

  render() {
    const {
      details,
      notes,
      isLoading,
      notesVisible,
      priority,
      tagsExtracted
    } = this.state
    return (
      <Fragment>
        {isLoading && <span>Loading...</span>}
        {details && (
          <PageWrapper>
            <PageTitle>Alert Details</PageTitle>
            <Message>{details.message}</Message>
            <Row>
              <Column>
                {priority && (
                  <PriorityBadge level={priority.id} title={priority.title}>
                    {priority.text}
                  </PriorityBadge>
                )}
                <div title="Owner">
                  <FaUser /> {details.owner ? details.owner : "No Owner"}
                </div>
                <div title="Created At">
                  <FaCalendarAlt /> {details.createdAt}
                </div>
              </Column>
            </Row>
            <SecondRow>
              <StatusTag className={details.status}>
                {details.status === "open" ? "Open" : "Closed"}
              </StatusTag>
              <Tag title="ID">{details.tinyId}</Tag>
              <Tag title="Count">{details.count}</Tag>
              <Tag title="isSeen">
                {details.isSeen ? <FaEye /> : <FaEyeSlash />}
              </Tag>
              <TagGroup title="Tags">
                <FaTags />
                {tagsExtracted &&
                  // eslint-disable-next-line react/no-array-index-key
                  tagsExtracted.map((tag, i) => <Tag key={i}> {tag} </Tag>)}
              </TagGroup>
              <TagGroup title="Teams">
                <FaUsers />
                {details.teams &&
                  // eslint-disable-next-line react/no-array-index-key
                  details.teams.map((team, i) => <Tag key={i}> {team} </Tag>)}
              </TagGroup>
              {notes.length && (
                <NotesTag onClick={this.toggleNotes}>
                  <FaStickyNote />
                  <Badge>{notes.length}</Badge>
                </NotesTag>
              )}
            </SecondRow>
            {notesVisible && (
              <NotesBox>
                <h2>Notes</h2>
                <ul>
                  {notes.map((item, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={i}>{item.note}</li>
                  ))}
                </ul>
              </NotesBox>
            )}
          </PageWrapper>
        )}
      </Fragment>
    )
  }
}
AlertDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }).isRequired
}
export default AlertDetails
