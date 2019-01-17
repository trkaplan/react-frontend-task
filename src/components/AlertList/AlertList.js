/* eslint-disable react/prop-types */
import React, { Fragment } from "react"
import { Link } from "react-router-dom"

const AlertList = ({ data }) => {
  const { alerts } = data
  return (
    <Fragment>
      <h2>Alert List</h2>
      {alerts.map(item => (
        <Link to={`alert/${item.id}`} key={item.id}>
          <div>
            <i>{item.createdAt}</i> - <span>{item.owner}</span>
          </div>
        </Link>
      ))}
    </Fragment>
  )
}

export default AlertList
