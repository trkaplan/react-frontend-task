import React from "react"
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom"
import HomePage from "./screens/HomePage"
import AlertDetails from "./screens/AlertDetails"
import Header from "./components/Header"

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/alert/:id" component={AlertDetails} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  </BrowserRouter>
)
export default App
