import React, { Component } from 'react'



export default class First extends Component {
  state = {
    mergeObjects: {},
    firststate: null,
    lastState: null,
    Country: null,
    stateList: null,
    someobject: {
      CountryCode: [{ 91: 'India' }, { 61: 'Australia' }],
      States: {
        India: ["Karnataka", "Delhi", "Maharashtra", "TamilNadu"],
        Australia: ["Queensland", "Tasmania", "Victoria"]
      }
    },
    someobject1: {
      India: ["TamilNadu", "Andra pradesh", "Bihar", "Maharashtra"],
      Australia: ["Westren Australia"]
    }

  }

  mergeObjects = () => {
    const { someobject, someobject1 } = this.state
    const out1 = Object.keys(someobject.States)
    let out3 = { ...someobject.States }
    let out4
    Object.keys(someobject1).map((country) => {
      const t = someobject1[country]
      const out2 = [...someobject.States[country], ...t]
      out3 = { ...out3, [country]: out2 }
    })
    out4 = { ...someobject, States: out3 }
    return out4;
  }

  uniqueObjects = (mergeObjects) => {
    let out3 = { ...mergeObjects.States }
    let out4
    Object.keys(mergeObjects.States).map((country) => {
      const t = mergeObjects.States[country]
      const out2 = [...new Set(t)]
      out3 = { ...out3, [country]: out2 }
    })
    out4 = { ...mergeObjects, States: out3 }
    return out4;
  }
  task1 = (e) => {
    const { someobject, } = this.state
    const CountryCode = e.target.value
    let stateList
    let country
    someobject.CountryCode.map((code, i) => {
      if (code[CountryCode]) {
        country = code[CountryCode]
        stateList = someobject.States[country]
      }
    })

    // console.log(firststate)
    this.setState({ stateList: stateList, Country: country })

  }



  render() {
    const { stateList, someobject, CountryCode, Country, mergeObjects } = this.state
    const listItems = (stateList !== null) ?
      (stateList.map((states) =>
        <ol>{states}</ol>
      )) : ('')

    let firststate = []
    let lastState = []
    Object.keys(someobject.States).map((country) => {
      firststate.push({ country: country, state: someobject.States[country][0] })
    })
    Object.keys(someobject.States).map((country) => {
      lastState.push({ country: country, state: someobject.States[country][someobject.States[country].length - 1] })
    })
    const fState = (firststate.map((states) =>
      <h5>Country:{states.country}     Firststate: {states.state}</h5>
    ))
    const lState = (lastState.map((states) =>
      <h5>Country:{states.country}    LastState: {states.state}</h5>
    ))
    const mergeObj = this.mergeObjects()
    const uniqueObj = this.uniqueObjects(this.mergeObjects())


    return (
      <div className="w3-container w3-margin" >
        <div className='w3-panel w3-card-4 w3-margin w3-center w3-theme-l3'>
          <label>
            <h3 > Task1 </h3>
            <h4>Country Code</h4>
            <label>91
           <input type="radio" name='countrycode' value="91" onClick={this.task1} />
            </label>
            <label >61
              <input type="radio" name='countrycode' value="61" onClick={this.task1} />
            </label>
          </label>
          <h4> Country Name : </h4>
          <h5><ol>{Country}</ol></h5>
          <h4>
            States in the Country :
          </h4>
          <h5>{listItems}</h5>
        </div>
        <div className='w3-panel w3-card-4 w3-margin w3-center w3-theme-l3'>
          <label>
            <h3> Task2 </h3>
            <h4>{fState}</h4>
          </label>
        </div>
        <div className='w3-panel w3-card-4 w3-margin w3-center w3-theme-l3'>
          <label>
            <h3> Task3 </h3>
            <h4>{lState}</h4>
          </label>
        </div>
        <div className='w3-panel w3-card-4 w3-margin w3-center w3-theme-l3'>
          <label>
            <h3> Task5 </h3>
            <h4> Merged Object : </h4>
            <h5>{JSON.stringify(mergeObj)},</h5>
          </label>
        </div>
        <div className='w3-panel w3-card-4 w3-margin w3-center w3-theme-l3'>
          <label>
            <h3> Task6 </h3>
            <h4> Ideal Object : </h4>
            <h5>{JSON.stringify(uniqueObj)},</h5>
          </label>
        </div>
      </div>
    );
  }
}

