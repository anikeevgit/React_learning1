import './App.css'
import React, { Component } from 'react'
import Car from './Car/Car'
import './App.css'

class App extends Component {
  state = {
    cars: [
      { name: 'Ford', year: 2018 },
      { name: 'Audi', year: 2016 },
      { name: 'Mazda', year: 2010 },
      { name: 'BWM', year: 2015 },
    ],
    pageTitle: 'Список',
    showCars: false,
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars,
    })
  }

  onChangeName = (name, index) => {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({ cars })
  }

  deleteHandler(index) {
    const cars = [...this.state.cars]
    cars.splice(index, 1)
    this.setState({ cars })
  }

  render() {
    let cars = null
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onChangeName={(e) => this.onChangeName(e.target.value, index)}
            onDelete={this.deleteHandler.bind(this, index)}
          />
        )
      })
    }

    return (
      <div className='App'>
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.toggleCarsHandler}>Click</button>

        {cars}
      </div>
    )
  }
}

export default App
