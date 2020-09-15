import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return(
       <div className="ui cards">
      {this.props.pets.map(petObj => 
      <Pet pet={petObj} adoptBtn={() => this.props.adopt(petObj.id)}/>)}
      </div>
    )

  }
}

export default PetBrowser
