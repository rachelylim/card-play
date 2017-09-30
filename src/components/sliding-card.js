import React from 'react';

class SlidingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  getMainDisplay() {
    const { header, content } = this.props;
    return (
      <div className="card-wrapper">
        <p className="card-header">{header}</p>
        <p className="card-content">{content}</p>
      </div>
    );
  }

  getSubDisplay() {
    const { subcontent } = this.props;
    return (
      <div className="card-wrapper">
        <p className="card-content">{subcontent}</p>
      </div>
    );
  }

  render() {
    
  }
}

export default SlidingCard;
