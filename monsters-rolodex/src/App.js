import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/search-box.component';

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
				<h1 className='app-title'>Monsters Rolodex</h1>
				<SearchBox
					onChangeHandler={this.searchInputChangeHandler}
					placeholder='search monsters'
					className='monsters-search-box'
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
