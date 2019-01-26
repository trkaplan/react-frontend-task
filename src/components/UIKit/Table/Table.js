/* eslint-disable react/no-array-index-key */
import React from "react"
import PropTypes from "prop-types"
import { Tr, Td } from "./styled"

const Table = ({ head, body, width }) => (
  <table
    {...{
      ...(width && { width })
    }}
  >
    {head && (
      <thead>
        <tr>
          {head.cells.map(({ key, content }) => (
            <th key={key}>{content}</th>
          ))}
        </tr>
      </thead>
    )}
    <tbody>
      {body.rows.map(({ key, cells, onClickHandler }) => (
        <Tr key={key} onClick={onClickHandler}>
          {cells.map((cell, index) => (
            <Td key={index}>{cell.content}</Td>
          ))}
        </Tr>
      ))}
    </tbody>
  </table>
)
Table.defaultProps = {
  head: null,
  width: null
}
Table.propTypes = {
  width: PropTypes.string,
  head: PropTypes.shape({
    cells: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        content: PropTypes.node
      })
    )
  }),
  body: PropTypes.shape({
    rows: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        content: PropTypes.node,
        onClickHandler: PropTypes.func
      })
    )
  }).isRequired
}
export default Table
