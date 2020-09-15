import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (value) => {
    this.setState({
      filters: {
        type: value
      }
    })
  }

onFindPetsClick = () => {
  this.state.filters.type === 'all'? fetch('/api/pets').then(res => res.json()).then(petArray => this.setState({
    pets: petArray
  })) : fetch(`/api/pets?type=${this.state.filters.type}`)
  .then(res => res.json())
  .then(petArray => this.setState({
    pets: petArray
  }))
}

onAdoptPet = (petId) => {
  // debugger
  this.setState({
    pets: [...this.state.pets,
      this.state.pets.find(pets =>
        pets.id === petId).isAdopted = true]
  })

}

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters typeChange={this.onChangeType} findPets={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adopt={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
