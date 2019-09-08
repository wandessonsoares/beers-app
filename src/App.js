import React, {Component} from 'react'
import axios from 'axios'
import Details from './components/details'
import Button from './components/button'

class App extends Component {
  state = {
    beers: [],
    nomeBotao:'Ocultar detalhes',
    classeDiv:'show'
  }

  componentDidMount(){
    axios.get('https://api.punkapi.com/v2/beers')
    .then(res => {
      const beers = res.data;
      this.setState({ beers });
    })
  }

  alterarEstado(){
    var Estado;
    var NomeBotao;

    if(this.state.classeDiv === 'show'){
        Estado="hide";
        NomeBotao='Exibir detalhes';
    }else{
        Estado="show";
        NomeBotao='Ocultar detalhes';
    }
    this.setState({
        nomeBotao: NomeBotao,
        classeDiv: Estado
    })
  }

  render () {
    return (
      <div>
        <center><h1>Beers List</h1></center>
        <center><Button funcao={this.alterarEstado.bind(this)} valor={this.state.nomeBotao}/></center>
        {this.state.beers.map((beer) => (
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{beer.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{beer.tagline}</h6>
              <div>
                <Details classeSecundaria={this.state.classeDiv} text={beer.description}/>
              </div>
              <img src={beer.image_url}/>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default App