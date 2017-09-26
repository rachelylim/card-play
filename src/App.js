import React from 'react';

import CardDisplay from './components/card-display';
import DisplayOptionNavBar from './components/nav-bar';

import DummyCards from './dummy-cards';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="nav-bar-form-container">
          <DisplayOptionNavBar />
          <CardDisplay cards={DummyCards} />
        </div>
      </div>
    );
  }
}
export default App;
