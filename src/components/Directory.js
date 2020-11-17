import React, {Component} from 'react'

class Directory extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      pictureInput: '',
      nameInput: '',
    }
  }

  handlePictureChange(event) {
    this.setState({
      pictureInput: event.target.value
    })
  }

  handleNameChange(event) {
    this.setState({
      nameInput: event.target.value
    })
  }

  handleAddFriend() {
    const friend = {
      name: this.state.nameInput,
      picture: this.state.pictureInput
    }

    this.setState({
      friends: [...this.state.friends, friend]
    })
  }

  render() {
    const friendsMap = this.state.friends.map(element=> {
      return( <div>
        <p>{element.name}</p>
      </div>
      )
    })


    return <div>
      <input 
      placeholder='picture'
      onChange={(event) => this.handlePictureChange(event)}
      />
      <input 
      placeholder='name'
      onChange={(event) => this.handleNameChange(event)}
      />
      <button onClick={() => this.handleAddFriend()}>Add a new friend</button>
      {friendsMap}
    </div>
  }

}

export default Directory