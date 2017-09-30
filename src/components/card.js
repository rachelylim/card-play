import React from 'react';

import SlidingCard from './sliding-card';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  displayWithHoverSetting() {
    return (
      <div className="sub-hover">
        {this.getMainDisplay()}
        {this.getSubDisplay()}
      </div>
    );
  }

  displayWithSlidingSetting() {
    return <SlidingCard {...this.props} />;
  }

  handleClick() {
    if (this.props.displayStyle === 'hover') return null;
    debugger
  }

  handleDisplaySettings() {
    const { displayStyle } = this.props;
    switch (displayStyle) {
      case('hover'): {
        return this.displayWithHoverSetting();
      }

      case('slide-down'): {
        return this.displayWithSlidingSetting();
      }

      default: {
        return displaySubContent ? this.getSubDisplay() : this.getMainDisplay();;
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
