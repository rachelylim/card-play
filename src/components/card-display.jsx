import React from 'react';

import Card from './card';

class CardDisplay extends React.Component {
  render() {
    return (
      <div className="card-display-container">
        {this.props.total.map(() => <Card />)}
      </div>
    );
  }
}

export default CardDisplay;
