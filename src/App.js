import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import Content from "./Content"
import ButtonGroup from './ButtonGroup'
import { store } from './store/index'



export class App extends Component {



  render() {

    return (
      <Provider store={store}>
        <Fragment>
          <Content />
          <ButtonGroup />
        </Fragment>
      </Provider>






    )


  }
}



export default App