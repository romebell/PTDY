import React from 'react';
import ReactDOM from 'react-dom';

function Person() {
  return (
    <div className="person">
    <h1>Rob</h1>
    <h1>Age: 30</h1>
  </div>
  );
}

ReactDOM.render(<Person />, document.querySelector('#p1'));