import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

const initialState = {
  searchActive: false,
  show: false,
};

const Filter = ({ value, onChange, showInput, onChangeShow, onChangeForm }) => {
  const [state, setState] = useState(initialState);
  const { searchActive, show } = state;

  const handleSearchToggle = () => {
    if (showInput) {
      setState({ show: false });
    }

    setState({
      searchActive: !searchActive,
      show: !show,
    });
    onChangeShow();
  };

  return (
    <label className={s.search}>
      <Button
        className={s.iconSearch}
        onClick={!showInput || show ? handleSearchToggle : onChangeForm}
        color="primary"
        variant="outlined"
      >
        <SearchIcon className={s.icon} />
      </Button>
      <input
        className={
          searchActive ? [s.searchWrapper, s.active].join(' ') : s.searchWrapper
        }
        placeholder="John Connor"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
