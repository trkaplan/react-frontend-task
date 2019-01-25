import styled from "styled-components"
import { Button } from "../UIKit"

export const PageWrapper = styled.div`
  display: flex;
  height: 100%;
`
export const ToggleGraphButton = styled(Button)`
  display: flex;
  margin-left: auto;
`
export const Column = styled.div`
  flex: ${props => `0 0 ${props.width};`};
  max-width: ${props => `${props.width};`};
  ${props => `padding:${props.padding};`};
`

export const toggleGraphButton = styled.button`
  border: 1px solid gray;
`
