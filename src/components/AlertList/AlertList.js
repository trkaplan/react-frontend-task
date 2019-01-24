/* eslint-disable react/prop-types */
import React, { Fragment } from "react"
import { withRouter } from "react-router"
import queryExtractor from "./alert-query-helper"
import { Table } from "../UIKit"
import { ToggleGraphButton } from "./styled"

const AlertList = ({
  alerts,
  selectedFilter,
  history,
  toggleGraph,
  graphVisible
}) => {
  const { query } = selectedFilter
  const { key: filterKey, value: filterValue } = query
    ? queryExtractor(query)
    : {}
  const alertsFiltered = filterKey
    ? alerts.filter(elem => elem[filterKey] === filterValue)
    : alerts

  const handleRowClick = alertId => {
    history.push(`alert/show/${alertId}`)
  }

  const tableData = {
    body: {
      rows: alertsFiltered.map(alert => ({
        key: `alert-${alert.tinyId}`,
        onClickHandler: e => handleRowClick(alert.id, e),
        cells: [
          { content: alert.tinyId },
          { content: alert.message },
          { content: alert.status }
        ]
      }))
    }
  }
  const { body } = tableData
  return (
    <Fragment>
      <h2>Alert List</h2>
      <ToggleGraphButton onClick={toggleGraph}>
        {graphVisible ? "Hide Graph" : "Show Graph"}
      </ToggleGraphButton>
      <Table body={body} />
    </Fragment>
  )
}

export default withRouter(AlertList)
