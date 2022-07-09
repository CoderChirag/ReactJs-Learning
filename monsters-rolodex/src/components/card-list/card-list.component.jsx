import { Component } from 'react';

class CardList extends Component {
	render() {
		return (
			<div>
				{this.props.monsters.map(monster => {
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

export default CardList;
