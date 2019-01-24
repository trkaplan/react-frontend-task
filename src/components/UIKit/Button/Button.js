import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledButton = styled.button`
  background-color: #f6f7f8;
  color: #4e5665;
  padding: 0 8px;
  line-height: 2em;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background-color: #eff0f2;
  }
`
const Button = ({ children, onClick, className }) => (
  <StyledButton
    type="button"
    {...{
      ...(className && { className }),
      ...(onClick && { onClick })
    }}
  >
    {children}
  </StyledButton>
)
Button.defaultProps = {
  onClick: () => {},
  className: null
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
}
export default Button
