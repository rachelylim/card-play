import React from 'react';

import Card from './card';

class CardDisplay extends React.Component {
  render() {
    return (
      <div className="card-display-container flex">
        {this.props.cards.map((c, index) => <Card {...c} key={index} />)}
      </div>
    );
  }
}

export default CardDisplay;
