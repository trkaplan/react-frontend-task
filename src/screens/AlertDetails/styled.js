import styled from "styled-components"

export const PageWrapper = styled.div`
  padding: 24px;
`
export const PageTitle = styled.h2`
  font-size: 24px;
  line-height: 1.5em;
  margin-bottom: 16px;
`
export const Message = styled.div`
  padding-bottom: 16px;
`
export const PriorityBadge = styled.div`
  background-color: ${props =>
    ({
      P1: "#1b8220",
      P2: "#71ce11"
    }[props.level])};
  display: inline-block;
  margin: 6px;
  width: 2em;
  height: 2em;
  line-height: 2em;
  text-align: center;
  border-radius: 1em;
`
export const Tag = styled.div`
  cursor: default;
  display: inline-block;
  padding: 0 8px;
  margin: 6px;
  background-color: #e0e0e0;
  border-radius: 4px;
  min-width: 45px;
  text-align: center;
  line-height: 2em;
  position: relative;

  & svg {
    font-size: 18px;
    vertical-align: middle;
  }
`

export const TagGroup = styled.div`
  display: inline-block;
  background-color: #f3f3f3;
  border-radius: 4px;
  padding: 0px 4px 0px 12px;
  margin: 4px;

  & ${Tag} {
    line-height: 24px;
  }
  & svg {
    vertical-align: middle;
  }
`

export const StatusTag = styled(Tag)`
  &.closed {
    border: 1px solid #e0e2e3;
    background-color: #ffffff;
  }

  &.open {
    background-color: #ff5f64;
    border: 1px solid #ff5055;
    color: #ffffff;
  }
`
export const NotesTag = styled(Tag)`
  cursor: pointer;
  &:hover {
    background-color: #c1c1c1;
  }
`
export const Row = styled.div`
  display: flex;
`
export const Column = styled.div``
export const SecondRow = styled.div`
  margin-top: 16px;
`

export const NotesBox = styled.div`
  border: 1px solid #bfbfbf;
  padding: 24px;
  margin-top: 16px;
  background-color: #fbfbfb;
`

export const Badge = styled.div`
  background-color: #5b5a5a;
  padding: 1px;
  text-align: center;
  font-size: 12px;
  position: absolute;
  right: 5px;
  top: 0;
  height: 16px;
  width: 16px;
  border-radius: 8px;
  color: white;
  line-height: 16px;
`
