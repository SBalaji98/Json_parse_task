import React, { Component } from 'react'
import First from './components/first'
import Second from './components/second'
// import DragDrop from './DragDrop'
export default class App extends Component {

  render() {

    return (
      <div className="w3-theme-d1">
        <h1 className="w3-center w3-text-red w3-card w3-theme-l3 ">First Part</h1>
        <First />
        <br />
        <h1 className="w3-center w3-text-red w3-card w3-theme-l3">Second Part</h1>
        <Second />
        {/* <h1 className="w3-center w3-text-red w3-card w3-theme-l3">Third Part</h1>
<DragDrop/> */}
      </div>
    )
  }
}
