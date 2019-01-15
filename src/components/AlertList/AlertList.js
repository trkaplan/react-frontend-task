/* eslint-disable react/prop-types */
import React, { Fragment } from "react"
import { Link } from "react-router-dom"

const AlertList = () => (
  <Fragment>
    <h2>Alert List</h2>
    <Link to="alert/1">Alert 1</Link>
  </Fragment>
)

export default AlertList
