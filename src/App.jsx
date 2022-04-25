import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import Tittle from './components/tittle';

import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const filterMonster = monsters.filter((monster) => {
      return monster.name.toUpperCase().includes(searchField);
    });
    setFilteredMonsters(filterMonster);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchText = event.target.value.toUpperCase();
    setSearchField(searchText);
  };

  return (
    <div className="App">
      <Tittle tittle='Yoyo test' />
      <SearchBox
        placeholder="Search monsters"
        className="search-monsters-box"
        onSearchHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
