import React from 'react';

class SubContent extends React.Component {
  handleClick() {
    this.props.onclick && this.props.onclick();
  }

  render() {
    const { subcontent } = this.props;
    return (
      <div className="card-wrapper" onClick={() => this.handleClick()} >
        <p className="card-content">{subcontent}</p>
      </div>
    );
  }
}

export default SubContent;
