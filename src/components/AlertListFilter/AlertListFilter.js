import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import filterTypes from "./alert-list-filters"
// TODO: move styled-somponents to external file.
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
const FilterItem = styled.div.attrs(props => ({
  className: props.isSelected ? "selected" : ""
}))`
  display: block;
  padding: 4px;
  border-radius: 2px;
  margin: 2px 0;
  cursor: pointer;
  &.selected {
    color: white;
    background-color: #505f79;
  }
  &:hover:not(.selected) {
    background-color: #ebecf0;
    color: black;
  }
`
const AlertListFilter = ({ onFilterUpdate, selectedFilter }) => (
  <Wrapper>
    <FilterTitle>Saved Searches</FilterTitle>
    {filterTypes.map(item => (
      <FilterItem
        type="button"
        role="menuitem"
        isSelected={selectedFilter.id === item.id}
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
