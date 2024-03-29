/* eslint-disable react/prop-types */
import React from "react"
import queryExtractor from "./alert-query-helper"
import { Table } from "../UIKit"
import { TableWrapper } from "./styled"

const AlertList = ({ alerts, selectedFilter, openAlertDetails }) => {
  const { query } = selectedFilter
  const { key: filterKey, value: filterValue } = query
    ? queryExtractor(query)
    : {}
  const alertsFiltered = filterKey
    ? alerts.filter(elem => elem[filterKey] === filterValue)
    : alerts

  const tableData = {
    body: {
      rows: alertsFiltered.map(alert => ({
        key: `alert-${alert.tinyId}`,
        onClickHandler: () => openAlertDetails(alert.id),
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

export default AlertList
