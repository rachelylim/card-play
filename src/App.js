import React from 'react';

import CardDisplay from './components/card-display';
import DummyCards from './dummy-cards';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="nav-bar-form-container">
          <form className="display-options">
            <label htmlFor="card-num">Number of Cards: </label>
            <input type="tel" id="card-num" />
            <button type="submit">Create</button>
          </form>
          <CardDisplay cards={DummyCards} />
        </div>
      </div>
    );
  }
}
export default App;
