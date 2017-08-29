import React, { Component } from 'react';
import TopSpot from './topspot';
var axios = require('axios');

// const label = flipped => {
// 	if (flipped === null) {
//     	return null;
//     }
//     return flipped ? null : '<p>hello world</p>';
// }


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        topspots: [],
        flipped: Array(30).fill(null)
    };
  }

  
  componentWillMount () {
    axios
    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));
  }
  
  mouseEnter(i) {
    // console.log(i);
    this.state.flipped[i - 1] = true;
    console.log(this.state.flipped);
  }

  mouseLeave(i) {
    // console.log(i);
    this.state.flipped[i - 1] = null;
  }

  showHide(i) {
    console.log('label');
    if (this.state.flipped[i - 1] === true) {
      
      return 'hello world';
    }
  }


  render() {
    

    return (
      <div className='App container'>
        <div className='jumbotron'>
          <h1>San Diego Top Spots</h1>
          <p>A list of the top 30 places to see in San Diego, California.</p>
        </div>
        { 
        this.state.topspots.map(topspot => ( 
          <TopSpot
              key={topspot.id}
              name={topspot.name}
              description={topspot.description}
              location={topspot.location}
              mouseEnter={() => this.mouseEnter(topspot.id)}
              mouseLeave={() => this.mouseLeave(topspot.id)}
              showHide={() => this.showHide(topspot.id)} />
          ))
        }
      </div>
    );
  }
}

export default App;
