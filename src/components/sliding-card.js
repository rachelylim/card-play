import React from 'react';

import MainContent from './main-content';
import SubContent from './sub-content';

class SlidingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    const { open } = this.state;
    const { header, content, subcontent } = this.props;

    return (
      <div
        className={`sliding-card ${open ? 'open' : 'closed'}`}
        onClick={() => this.setState({ open: !this.state.open })}
      >
        <MainContent header={header} content={content} />
        { open ? <SubContent subcontent={subcontent} /> : null}
      </div>
    );
  }
}

export default SlidingCard;
