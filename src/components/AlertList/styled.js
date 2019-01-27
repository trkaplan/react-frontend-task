import styled from "styled-components"
import { Button } from "../UIKit"

export const TableWrapper = styled.div`
  margin-top: 24px;
`

export const PageWrapper = styled.div`
  display: flex;
  height: 100%;
`
export const ToggleGraphButton = styled(Button)`
  display: flex;
  margin-left: auto;
`
export const Column = styled.div`
  ${({ width }) => width && `flex: 0 0 ${width};`};
  ${({ width }) => width && `max-width:${width};`};
  ${({ padding }) => padding && `padding:${padding};`};
`

export const toggleGraphButton = styled.button`
  border: 1px solid gray;
`
