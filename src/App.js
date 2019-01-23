import React from "react"
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"
import { reset } from "./utils/styled-reset-advanced-custom"
import HomePage from "./screens/HomePage"
import AlertDetails from "./screens/AlertDetails"
import Header from "./components/Header"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const GlobalStyle = createGlobalStyle`
  ${reset}
`
const App = () => (
  <BrowserRouter>
    <PageContainer>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/alert/show/:id" component={AlertDetails} />
        <Redirect from="*" to="/" />
      </Switch>
    </PageContainer>
  </BrowserRouter>
)
export default App
