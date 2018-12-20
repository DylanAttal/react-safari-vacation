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
  componentDidMount = () => {
    axios.get('http://localhost:4567/Animals').then(response => {
      this.setState({
        animal_list: response.data.animals
      })
    })
  }
  componentDidMount = () => {
    axios.get('http://localhost:4567/Animal/Jungle').then(response => {
      this.setState({
        animals_in_jungle: response.data.animals
      })
    })
  }
  _click = () => {
    axios.delete('http://localhost:4567/Animal/Desert').then(response => {
      this.setState({
        animals_in_desert: response.data.animals
      })
      console.log(response.data)
    })
  }
  componentDidMount = () => {
    axios.get('http://localhost:4567/Count').then(response => {
      this.setState({
        total_count: response.data.total_count_of_times_seen
      })
    })
  }
  componentDidMount = () => {
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
        {this.state.animal_list.map((animal, index) => {
          return <p key={index}>{animal.species}</p>
        })}
        <h3>List of Animals in the Jungle</h3>
        {this.state.animals_in_jungle.map((animal, index) => {
          return <p key={index}>{animal.species}</p>
        })}
        <h3>Delete the animals in the desert!</h3>
        <button onClick={this._click}>Delete em!</button>
        <p>{this.state.animals_in_desert} got deleted!</p>
        <h3>Total count of animals seen:</h3>
        <p>{this.state.total_count}</p>
        <h3>Total count of Lions, Tigers, and Bears:</h3>
        <p>{this.state.total_count_LTB}</p>
      </div>
    )
  }
}

export default App
