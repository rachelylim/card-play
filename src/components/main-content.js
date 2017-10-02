import React from 'react';

class MainContent extends React.Component {
  render() {
    const { header, content } = this.props;
    return (
      <div className="card-wrapper" onClick={() => this.props.onclick()}>
        <p className="card-header">{header}</p>
        <p className="card-content">{content}</p>
      </div>
    )
  }
}

export default MainContent;
