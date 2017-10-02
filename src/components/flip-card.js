import React from 'react';

import MainContent from './main-content';
import SubContent from './sub-content';

class FlipCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flipped: false };
  }

  flipCard() {
    this.setState({ flipped: !this.state.flipped });
  }

  getRelevantCard() {
    const { header, content, subcontent } = this.props;
    const { flipped } = this.state;
    const onclick = this.flipCard.bind(this);
    if (flipped) return <SubContent subcontent={subcontent} onclick={onclick} />;
    return <MainContent header={header} content={content} onclick={onclick} />;
  }

  render() {
    return (
      <div>
        {this.getRelevantCard()}
      </div>
    );
  }
}

export default FlipCard;
