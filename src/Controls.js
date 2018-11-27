import React from 'react'

class Controls extends React.Component {
    addEmployee = () => {
      const name = prompt("The name:")
      const salary = parseInt(prompt("The salary:"), 10)
      this.props.store.pushEmployee( {name, salary} )
  
    }
  
    clearList = () => {
      this.props.store.clearList()
      // because table observes employeelist everything updates
    }
  
    render() {
      return (<div className="controls">
        <button onClick={this.clearList}>clear table</button>
        <button onClick={this.addEmployee}>add record</button>
      </div>)
    }
  }
  

export default Controls