import React from 'react';

import MainContent from './main-content';
import SubContent from './sub-content';

class HoverCard extends React.Component {
  render() {
    const { header, content, subcontent } = this.props;

    return (
      <div className="subhover">
        <MainContent header={header} content={content} />
        <SubContent subcontent={subcontent} />
      </div>
    );

  }
}

export default HoverCard;
