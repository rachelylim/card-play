import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverClass: props.displayStyle === 'hover' ? 'sub-hover' : '',
    };
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

  handleClick() {
    if (this.props.displayStyle === 'hover') return null;
    debugger
  }

  handleDisplaySettings() {
    if (this.props.displayStyle === 'hover') {
      return <div className={this.state.hoverClass}>{this.getMainDisplay()}{this.getSubDisplay()}</div>;
    }
    return displaySubContent ? this.getSubDisplay() : this.getMainDisplay();
  }

  render() {
    const { displaySubContent, hoverClass } = this.state;
    return (
      <div className={`card-container`} onClick={() => this.handleClick()}>
        {this.handleDisplaySettings()}
      </div>
    );
  }
}

export default Card;
