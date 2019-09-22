import React from 'react';
import './App.css';
import {fetchPokemons} from './services/fetchPokemons';
import PokeList from './components/PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);

		this.state = {
			pokemons: []
		}
  }

//La peticiones automáticas siempre en el componentdidmount, si es por boton etc en el elemento donde se hacen
componentDidMount() {
	this.getPokemons();
}

getPokemons() {
	fetchPokemons()
	.then(data => {
		this.setState({
			pokemons: data
		});
	})
}

  render() {
		const {pokemons} = this.state;
    return (
      <div className="app">
       <h1 className="app__title">my list of pokemon</h1>
			 <PokeList pokemons = {pokemons} />
      </div>
    );
  }
}

export default App;
