import React, {Component} from 'react';
import Beers from "./components/beers"

class App extends Component {
  componentDidMount(){
    fetch("https://api.punkapi.com/v2/beers")
    .then(res => res.json())
    .then((data) => {
      this.setState({ beers:data })
    })
    .catch(console.log)
  }

  state = {
    beers: []
  }

  render () {
    return (
      <Beers beers={this.state.beers} />
    )
  }
}

export default App;