import React, {Component} from 'react';
import axios from 'axios';
import './App.css';


class App extends Component {

  state = {
    people: []
  }
  
  componentDidMount() {
    axios.get('https://swapi.co/api/people').then(res => {
      console.log('res--->', res.data.results)
      this.setState({people: res.data.results})
    })
  
  }
  render() {
    const {people} = this.state
    
    console.log('people--->', people)
    return(
      <div>
        <h1>Hi</h1> 
        {/* this is implicit return meant no brackets just return */}
        {people.map(person => 
          <p>{person.name}</p>
        )}

         {/* {people.map(person => {
           return <h1>{person.name}</h1>
         })} */}
      </div>
    )

  }
  
}

export default App;