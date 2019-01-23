import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledHeader = styled.div`
  background: #0052cc;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 16px;
`
const Header = () => (
  <StyledHeader>
    <Link to="/">
      <img src="/assets/images/ops-logov2.png" alt="Logo" />
    </Link>
  </StyledHeader>
)

export default Header
