/* eslint-disable react/prop-types */
import React from "react"
import { withRouter } from "react-router"
import queryExtractor from "./alert-query-helper"
import { Table } from "../UIKit"
import { TableWrapper } from "./styled"

const AlertList = ({ alerts, selectedFilter, history }) => {
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
    <TableWrapper>
      <Table body={body} width="100%" />
    </TableWrapper>
  )
}

export default withRouter(AlertList)
