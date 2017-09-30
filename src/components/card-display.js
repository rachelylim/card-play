import React from 'react';

import Card from './card';

class CardDisplay extends React.Component {
  render() {
    const { total, displayStyle, header, content, subcontent } = this.props;
    const cardProps = { displayStyle, header, content, subcontent };
    // TOOD: this is a temporary way to create an array of cards
    // eventually each card will have it's own unique content
    return (
      <div className="card-display-container flex">
        {Array(total).fill(total).map((c, i) => <Card key={i} {...cardProps} />)}
      </div>
    );
  }
}

export default CardDisplay;
