import React from 'react';

import CardDisplay from './components/card-display';
import DisplayOptionNavBar from './components/nav-bar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleSubmit(settings) {
    this.setState({ settings });
  }

  displayEmptyState() {
    return <div className="empty-display-case">Specify what you want to see, using the control panel above.</div>
  }

  displayCards() {
    return <CardDisplay {...this.state.settings} />;
  }

  render() {
    return (
      <div>
        <div className="nav-bar-form-container">
          <DisplayOptionNavBar handleSubmit={this.handleSubmit.bind(this)}/>
        </div>
        {!this.state.settings ? this.displayEmptyState() : this.displayCards()}
      </div>
    );
  }
}
export default App;
