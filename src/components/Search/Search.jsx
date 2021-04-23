import React, { useState } from 'react';
import Loading from '../Loading/Loading';

import s from './Search.module.css';

const initialState = {
  searchActive: false,
  request: false,
};

const Search = () => {
  const [state, setState] = useState(initialState);
  const [search, setSearch] = useState('');
  const { searchActive, request } = state;

  const handleSearchToggle = () => {
    setState({
      searchActive: !searchActive,
    });
    if (searchActive) {
      setSearch(search => (search = ''));
    }
  };

  const handleSearch = e => {
    setSearch(e.currentTarget.value);
  };

  const handleSearchRequest = e => {
    console.log(search);
    setState({ request: !request });
    if (searchActive) {
      setSearch(search => (search = ''));
    }
  };

  return (
    <>
      <div
        className={
          searchActive ? [s.searchWrapper, s.active].join(' ') : s.searchWrapper
        }
      >
        <div className={s.inputHolder}>
          <input
            type="text"
            className={s.searchInput}
            value={search}
            placeholder="What you find?"
            onChange={handleSearch}
          />
          <button
            className={s.searchIcon}
            onClick={searchActive ? handleSearchRequest : handleSearchToggle}
          >
            <span className={s.span}></span>
          </button>
        </div>
        <span className={s.close} onClick={handleSearchToggle}></span>
      </div>
      {request ? <Loading /> : null}
    </>
  );
};

export default Search;
