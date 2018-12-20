import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      animal_list: [''],
      animals_in_jungle: [],
      animals_in_desert: [],
      total_count: '',
      total_count_LTB: ''
    }
  }
  displayAnimals = () => {
    axios.get('http://localhost:4567/Animals').then(response => {
      this.setState({
        animal_list: response.data.animals
      })
    })
  }
  displayAnimalsInJungle = () => {
    axios.get('http://localhost:4567/Animal/Jungle').then(response => {
      this.setState({
        animals_in_jungle: response.data.animals
      })
    })
  }
  deleteDesertAnimals = () => {
    axios.delete('http://localhost:4567/Animal/Desert').then(response => {
      this.setState({
        animals_in_desert: response.data.animals
      })
      console.log(response.data)
    })
  }
  displayTotalCount = () => {
    axios.get('http://localhost:4567/Count').then(response => {
      this.setState({
        total_count: response.data.total_count_of_times_seen
      })
    })
  }
  displayCountofLTB = () => {
    axios.get('http://localhost:4567/Count/LTB').then(response => {
      this.setState({
        total_count_LTB: response.data.total_count_of_times_seen_LTB
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>SAFARI VACATION</h1>
        </header>
        <h3>List of Animals</h3>
        <button onClick={this.displayAnimals}>Display Animals</button>
        {this.state.animal_list.map((animal, index) => {
          return <p key={index}>{animal.species}</p>
        })}
        <h3>List of Animals in the Jungle</h3>
        <button onClick={this.displayAnimalsInJungle}>
          Display Animals in Jungle
        </button>
        {this.state.animals_in_jungle.map((animal, index) => {
          return <p key={index}>{animal.species}</p>
        })}
        <h3>Delete the animals in the desert!</h3>
        <button onClick={this.deleteDesertAnimals}>
          Delete Desert animals!
        </button>
        <p>{this.state.animals_in_desert}</p>
        <h3>Total count of animals seen:</h3>
        <button onClick={this.displayTotalCount}>Display Total Count</button>
        <p>{this.state.total_count}</p>
        <h3>Total count of Lions, Tigers, and Bears:</h3>
        <button onClick={this.displayCountofLTB}>
          Display count of Lions, Tigers, and Bears
        </button>
        <p>{this.state.total_count_LTB}</p>
      </div>
    )
  }
}

export default App
