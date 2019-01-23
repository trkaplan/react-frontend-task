import styled from "styled-components"

export const PageWrapper = styled.div`
  display: flex;
  height: 100%;
`

export const ListWrapper = styled.div`
  padding: 24px;
`

export const Column = styled.div`
  flex: ${props => `0 0 ${props.width};`};
  max-width: ${props => `${props.width};`};
`
