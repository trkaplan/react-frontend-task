import React, { Fragment } from "react"
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom"
import HomePage from "./screens/HomePage"
import AlertDetails from "./screens/AlertDetails"
import Header from "./components/Header"

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/alert/show/:id" component={AlertDetails} />
        <Redirect from="*" to="/" />
      </Switch>
    </Fragment>
  </BrowserRouter>
)
export default App
