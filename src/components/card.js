import React from 'react';

import HoverCard from './hover-card';
import SlidingCard from './sliding-card';
import FlipCard from './flip-card';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleDisplaySettings() {
    switch (this.props.displayStyle) {
      case('hover'): {
        return <HoverCard {...this.props} />;
      }

      case('slide-down'): {
        return <SlidingCard {...this.props} />;
      }

      default: {
        return <FlipCard {...this.props} />;
      }
    }
  }

  render() {
    const { displaySubContent } = this.state;
    return (
      <div className={`card-container`}>
        {this.handleDisplaySettings()}
      </div>
    );
  }
}

export default Card;
