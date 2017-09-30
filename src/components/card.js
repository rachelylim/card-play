import React from 'react';

import SlidingCard from './sliding-card';
import MainContent from './main-content';
import SubContent from './sub-content';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayWithHoverSetting() {
    const { header, content, subcontent } = this.props;
    return (
      <div className="sub-hover">
        <MainContent header={header} content={content} />
        <SubContent subcontent={subcontent} />
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
