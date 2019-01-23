import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import filterTypes from "./alert-list-filters"

const Wrapper = styled.div`
  background-color: #f4f5f7;
  height: 100%;
  padding: 24px;
`
const FilterTitle = styled.h3`
  border-bottom: 1px solid gray;
  margin-bottom: 6px;
  line-height: 1.4rem;
`
const styleFilterItemActive = css`
  color: white;
  background-color: #505f79;
`
const FilterItem = styled.div`
  display: block;
  padding: 4px;
  border-radius: 2px;
  margin: 2px 0;
  ${props => (props.checked ? styleFilterItemActive : "")};
  cursor: pointer;

  &:hover {
    background-color: #ebecf0;
  }
`
const AlertListFilter = ({ onFilterUpdate, selectedFilter }) => (
  <Wrapper>
    <FilterTitle>Saved Searches</FilterTitle>
    {filterTypes.map(item => (
      <FilterItem
        type="button"
        role="menuitem"
        checked={selectedFilter.id === item.id}
        key={item.id}
        onClick={() => onFilterUpdate(item)}
        onKeyDown={() => onFilterUpdate(item)}
      >
        {item.title}
      </FilterItem>
    ))}
  </Wrapper>
)

AlertListFilter.propTypes = {
  onFilterUpdate: PropTypes.func.isRequired,
  selectedFilter: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    query: PropTypes.string
  }).isRequired
}

export default AlertListFilter
