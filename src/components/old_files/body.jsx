import React from 'react';

function clicker() {
  console.log('Нажата кнопка');
}
const Btn = (
  <button onClick={clicker} type="button">
    кнопка
  </button>
);

export default Btn;
