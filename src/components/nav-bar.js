import React from 'react';

import { capitalize } from '../utils';

class DisplayOptionNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  getDisplayNumber() {
    return (
      <div className="option-wrapper flex">
        <label className="option-label" htmlFor="card-num">Number of Cards: </label>
        <input type="tel" id="card-num" placeholder="0" onChange={e => this.setState({ total: Number(e.target.value) })} />
      </div>
    );
  }

  getSubDisplayOptions() {
    const options = [
      { slug: '', label: 'Select Options'},
      { slug: 'flip', label: 'Flip on Click'},
      { slug: 'slide-down', label: 'Slide Down'},
      { slug: 'hover', label: 'Hover'},
    ];

    return options.map((o, i) => <option key={i} value={o.slug}>{o.label}</option>);
  }

  getSubContentDisplayOptions() {
    return (
      <div className="option-wrapper flex">
        <label className="option-label" htmlFor="card-num">Sub Content Display: </label>
        <select onChange={e => this.setState({ subcontentDisplayStyle: e.target.value })}>
          {this.getSubDisplayOptions()}
        </select>
      </div>
    );
  }

  getContentInput() {
    const inputTypes = ['header', 'content', 'subcontent']
    return inputTypes.map((type, i) => {
      return (
        <div className="option-wrapper flex" key={i}>
          <label className="option-label" htmlFor="card-num">{capitalize(type)}: </label>
          <textarea placeholder={`Enter ${capitalize(type)} (required):`} onChange={e => this.setState({ [type]: e.target.value })} />
        </div>
      );
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit({ ...this.state });
  }

  render() {
    return (
      <form className="display-options flex">
        <div className="display-option-wrapper flex">
          {this.getDisplayNumber()}
          {this.getSubContentDisplayOptions()}
          {this.getContentInput()}
        </div>
        <button type="submit" onClick={e => this.handleSubmit(e)}>Create</button>
      </form>
    );
  }
}

export default DisplayOptionNavBar;
