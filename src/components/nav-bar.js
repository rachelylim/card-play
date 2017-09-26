import React from 'react';

class DisplayOptionNavBar extends React.Component {
  getDisplayNumber() {
    return (
      <div className="option-wrapper flex">
        <label className="option-label" htmlFor="card-num">Number of Cards: </label>
        <input type="tel" id="card-num" placeholder="0" />
      </div>
    );
  }

  getSubContentDisplayOptions() {
    return (
      <div className="option-wrapper flex">
        <label className="option-label" htmlFor="card-num">Sub Content Display: </label>
        <select>
          <option value="">Select Option</option>
          <option value="flip">Flip on Click</option>
          <option value="slide-down">Slide Down</option>
          <option value="hover">Hover</option>
        </select>
      </div>
    );
  }

  render() {
    return (
      <form className="display-options flex">
        <div className="display-option-wrapper flex">
          {this.getDisplayNumber()}
          {this.getSubContentDisplayOptions()}
        </div>
        <button type="submit">Create</button>
      </form>
    );
  }
}

export default DisplayOptionNavBar;
