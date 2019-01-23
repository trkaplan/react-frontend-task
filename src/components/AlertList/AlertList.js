/* eslint-disable react/prop-types */
import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import queryExtractor from "./alert-query-helper"

const Wrapper = styled.div`
  padding: 24px;
`
const AlertList = ({ alerts, selectedFilter }) => {
  const { query } = selectedFilter

  const { key: filterKey, value: filterValue } = query
    ? queryExtractor(query)
    : {}
  return (
    <Wrapper>
      <h2>Alert List</h2>
      {alerts
        .filter(elem => (filterKey ? elem[filterKey] === filterValue : true))
        .map(item => (
          <Link to={`alert/show/${item.id}`} key={item.id}>
            <div>
              <i>{item.createdAt}</i> - <span>{item.owner}</span>
            </div>
          </Link>
        ))}
    </Wrapper>
  )
}

export default AlertList
