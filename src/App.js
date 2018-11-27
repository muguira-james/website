import React, { Component } from 'react';

import Table from './Table'
import Controls from './Controls'
import Store from './Store'

import './App.css'

const appStore = new Store()



class App extends Component {
  render() {
    return (
      <div>
        <h1 className="heading" >Mobx Table</h1>
        <Controls className="controls" store={appStore} />
        <Table store={appStore} />
      </div>
    )
  }
}

export default App;