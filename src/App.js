import React, { Fragment } from "react"
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import HomePage from "./screens/HomePage"
import AlertDetails from "./screens/AlertDetails"
import Header from "./components/Header"

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/alert/show/:id" component={AlertDetails} />
          <Redirect from="*" to="/" />
        </Switch>
      </Fragment>
    </Provider>
  </BrowserRouter>
)
export default App
