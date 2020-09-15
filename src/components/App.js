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
  this.state.filters.type === 'all'? fetch('/api/pets').then(res => res.json()).then(console.log) : fetch(`/api/pets?type=${this.state.filters.type}`)
  .then(res => res.json())
  .then(console.log)


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
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
