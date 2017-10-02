import React from 'react';

class MainContent extends React.Component {
  handleClick() {
    this.props.onclick && this.props.onclick();
  }

  render() {
    const { header, content } = this.props;
    return (
      <div className="card-wrapper" onClick={() => this.handleClick()}>
        <p className="card-header">{header}</p>
        <p className="card-content">{content}</p>
      </div>
    )
  }
}

export default MainContent;
