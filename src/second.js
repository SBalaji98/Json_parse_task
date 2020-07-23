import React, { Component } from 'react'


class second extends Component {
  state = {

    someobject2: [
      {
        "country": "India",
        "population": 5000,
        "populationbygender": [
          {
            "male": 3000
          },
          {
            "female": 2000
          }
        ],
        "populationbyage": [
          {
            "18": 1000
          },
          {
            "30": 1000
          },
          {
            "50": 3000
          }
        ],
        "TotalVechilescount": 8000,
        "Vechilecountbysector": [
          {
            "Public": 5000
          },
          {
            "Private": 2500
          },
          {
            "others": 500
          }
        ]
      },
      {
        "country": "China",
        "population": 8000,
        "populationbygender": [
          {
            "male": 6000
          },
          {
            "female": 2000
          }
        ],
        "populationbyage": [
          {
            "18": 2000
          },
          {
            "30": 2000
          },
          {
            "50": 4000
          }
        ],
        "TotalVechilescount": 4000,
        "Vechilecountbysector": [
          {
            "Public": 1000
          },
          {
            "Private": 2000
          },
          {
            "others": 1000
          }
        ]
      },
      {
        "country": "UAE",
        "population": 7000,
        "populationbygender": [
          {
            "male": 3000
          },
          {
            "female": 4000
          }
        ],
        "populationbyage": [
          {
            "18": 1000
          },
          {
            "30": 3000
          },
          {
            "50": 3000
          }
        ],
        "TotalVechilescount": 10000,
        "Vechilecountbysector": [
          {
            "Public": 5000
          },
          {
            "Private": 2500
          },
          {
            "others": 2500
          }
        ]
      },
      {
        "country": "UK",
        "population": 12000,
        "populationbygender": [
          {
            "male": 7500
          },
          {
            "female": 4500
          }
        ],
        "populationbyage": [
          {
            "18": 6000
          },
          {
            "30": 2000
          },
          {
            "50": 4000
          }
        ],
        "TotalVechilescount": 2000,
        "Vechilecountbysector": [
          {
            "Public": 500
          },
          {
            "Private": 1000
          },
          {
            "others": 1000
          }
        ]
      }
    ]
  }


  compareValues(key, order = 'desc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        console.log("property doesn't exist on either object")
        return 0;
      }

      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }


  calculateRatio(num_1, num_2) {
    let num
    for (num = num_2; num > 1; num--) {
      if ((num_1 % num) == 0 && (num_2 % num) == 0) {
        num_1 = num_1 / num;
        num_2 = num_2 / num;
      }
    }
    var ratio = num_1 + ":" + num_2;
    return ratio;
  }


  sortObject = (order) => {
    const { someobject2 } = this.state
    const popArray = someobject2.sort(this.compareValues('population', order));
    return popArray[0].country;
  }

  hlMalePopulation = (order) => {
    const { someobject2 } = this.state
    const rArray = this.state.someobject2.map((e) => {
      const male = e.populationbygender[0].male
      return ({ country: e.country, male: male })
    })
    const popArray = rArray.sort(this.compareValues('male', order));

    return popArray[0].country;
  }

  mwRatio = () => {
    const { someobject2 } = this.state
    const rArray = someobject2.map((e) => {
      const mratio = this.calculateRatio(e.populationbygender[0].male, e.population)
      const wratio = this.calculateRatio(e.populationbygender[1].female, e.population)
      return ({ country: e.country, mratio: mratio, wratio: wratio })
    })
    return rArray;
  }


  vpRatio = () => {
    const { someobject2 } = this.state
    const rArray = someobject2.map((e) => {
      const ratio = this.calculateRatio(e.TotalVechilescount, e.population)
      return ({ country: e.country, vpratio: ratio })
    })
    return rArray;
  }

  percentChina = () => {
    const { someobject2 } = this.state
    let obj = someobject2.find(obj => obj.country === 'China')
    return ((obj.Vechilecountbysector[0].Public / obj.TotalVechilescount) * 100)
  }

  percentCountries = () => {
    const { someobject2 } = this.state
    const rArray = someobject2.map((e) => {
      const vPublic = (e.Vechilecountbysector[0].Public / e.TotalVechilescount) * 100
      const vPrivate = (e.Vechilecountbysector[1].Private / e.TotalVechilescount) * 100
      const vOthers = (e.Vechilecountbysector[2].others / e.TotalVechilescount) * 100
      return ({ country: e.country, vPublic: vPublic, vPrivate: vPrivate, vOthers: vOthers })
    })
    return rArray
  }
  render() {
    const mw = this.mwRatio()
    const vp = this.vpRatio()
    const vehiclePercentage = this.percentCountries()
    return (
      <div className="w3-container w3-margin">
        <ol className="w3-panel w3-card-4 w3-margin w3-center w3-theme-l3">
          <h3>Task 1</h3>
          <h4>Highest Population = {this.sortObject('desc')}
            <br />
          Lowest Population = {this.sortObject('asc')}</h4>
        </ol>
        <ol className="w3-panel w3-card-4 w3-margin w3-center w3-theme-l3">
          <h3>Task 2</h3>
          <h4>Highest Male Population = {this.hlMalePopulation('desc')}
            <br />
          Lowest Male Population = {this.hlMalePopulation('asc')}</h4>
        </ol>
        <ol className="w3-panel w3-card-4 w3-margin w3-center w3-theme-l3">
          <h3>Task 3</h3>
          <h4>{mw.map((e) =>
            <ol>{"Country = " + e.country + ", male ratio = "
              + e.mratio + ", female ratio = " + e.wratio}</ol>
          )}</h4>
        </ol>
        <ol className="w3-panel w3-card-4 w3-margin w3-center w3-theme-l3">
          <h3>Task4</h3>
          <h4>{vp.map((e) =>
            <ol>{"Country = " + e.country + ", vehicle per person ratio = " + e.vpratio}</ol>
          )}</h4>
        </ol>
        <ol className="w3-panel w3-card-4 w3-margin w3-center w3-theme-l3">
          <h3>Task5</h3>
          <h4>{vehiclePercentage.map((e) =>
            <ol>{"Country = " + e.country + ",  percentage of Public = " + e.vPublic + " %,  percentage of Private = " + e.vPrivate + " %,  percentage of Others = " + e.vOthers + " %"}</ol>
          )}</h4>
        </ol>
        <ol className="w3-panel w3-card-4 w3-margin w3-center w3-theme-l3">
          <h3>Task6</h3>
          <h4>{"percentage of public vehicles wrt to total vehicles for country china = "
            + this.percentChina() + " %"}</h4>
        </ol>
      </div>
    );
  }
}

export default second;