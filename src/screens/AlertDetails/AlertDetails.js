import React from "react"
import PropTypes from "prop-types"

const AlertDetails = ({ match }) => {
  const { id } = match.params
  return (
    <div>
      <h1>Alert Details (id: {id})</h1>
    </div>
  )
}
AlertDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }).isRequired
}
export default AlertDetails
