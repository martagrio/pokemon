import React from 'react';
import './App.css';
import {fetchPokemons} from './services/fetchPokemons';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import PokeDetail from './components/PokeDetail';

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
		//cuando no recibe props, componente, si recibe props, render

    return (
      <div className="app">
       <h1 className="app__title">my list of pokemon</h1>
			 
			 <Switch>
				<Route exact path = "/" render= {() => {
					return (
						<Home
							getUserQuery = {this.getUserQuery} 
							query = {query}
							pokemons = {pokemons} 
						/>
					);
				}} />
				<Route path = "/detail" component={PokeDetail} />
			 </Switch>	 
      </div>
    );
  }
}

export default App;


