import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: '',
		};

		this.searchInputChangeHandler =
			this.searchInputChangeHandler.bind(this);
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {
				this.setState(() => {
					return {
						monsters: users,
					};
				});
			});
	}

	searchInputChangeHandler(event) {
		const searchField = event.target.value.toLocaleLowerCase();
		this.setState(() => {
			return { searchField };
		});
	}

	render() {
		const filteredMonsters = this.state.monsters.filter(monster => {
			return monster.name.toLowerCase().includes(this.state.searchField);
		});

		return (
			<div className='App'>
				<input
					className='search0box'
					type='search'
					placeholder='search monsters'
					onChange={this.searchInputChangeHandler}
				/>
				{filteredMonsters.map(monster => {
					return (
						<div key={monster.id}>
							<h1 key={monster.id}>{monster.name}</h1>
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;
