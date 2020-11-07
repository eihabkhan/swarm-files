import React, { Component } from 'react'

import './App.css'

import { CardList } from './components/card-list/CardList.component'
import { SearchBox } from './components/search-box/SearchBox.component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      swarm: [],
      searchTerm: ''
    } 
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
        .then(data => this.setState({swarm: data}))
  }

  handleChange = e => {
    this.setState({searchTerm: e.target.value})
  }
  

  render() {
    const { swarm, searchTerm } = this.state
    const filteredSwarm = swarm.filter(
      locust => locust.name.toLowerCase().includes(searchTerm.toLowerCase()) 
    )

    return (
      <div className='App'>  
        <h1> Swarm Files </h1>       
        <SearchBox placeholder='Search swarm' handleChange={this.handleChange}/>
        <CardList swarm={filteredSwarm}/>
      </div>
    )
  }

  


}

export default App;
