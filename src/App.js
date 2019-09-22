import React from 'react';
import './App.css';
import {fetchPokemons} from './services/fetchPokemons';
import PokeList from './components/PokeList';
import Filter from './components/Filter';

class App extends React.Component {
  constructor(props) {
    super(props);

		this.state = {
			pokemons: [],
			query: ''
		}

		this.getUserQuery = this.getUserQuery.bind(this);
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

getUserQuery(event) {
	const query = event.currentTarget.value;
//No dependemos del anterior estado, simplemente lo actualizamos.
	this.setState({query: query});
}

  render() {
		const {pokemons, query} = this.state;
    return (
      <div className="app">
       <h1 className="app__title">my list of pokemon</h1>
			 <Filter 
			 	getUserQuery = {this.getUserQuery} 
				query = {query}
			 />
			 <PokeList 
			  pokemons = {pokemons}
				query = {query} 
			 />
      </div>
    );
  }
}

export default App;
