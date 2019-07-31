import React from 'react';

import './App.css'
import { CardList } from './card-list/card-list.component';
import { SearchBox } from './search-box/search-box.component';

class App extends React.Component {

    state = {
        monsters: [],
        searchField: ''
    }

    async componentDidMount() {
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }

    render() {

        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div>
                <h1 class='header'>Monster Rolodex</h1>
                <SearchBox
                    placeholder='search monsters'
                    handleChange={e => this.setState({ searchField: e.target.value })}
                />
                <CardList monsters={filteredMonsters} />
            </div>
        )
    }
}

export default App;