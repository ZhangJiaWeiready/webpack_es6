import * as React from "react"
import * as ReactDOM from "react-dom"
import Main  from "./components/Main"
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("app") as HTMLElement
)