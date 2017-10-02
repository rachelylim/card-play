import React from 'react';

class SubContent extends React.Component {
  render() {
    const { subcontent } = this.props;
    return (
      <div className="card-wrapper" onClick={() => this.props.onclick()} >
        <p className="card-content">{subcontent}</p>
      </div>
    );
  }
}

export default SubContent;