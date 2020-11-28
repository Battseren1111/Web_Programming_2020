// export default States;
import React from 'react';
import './States.css';

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      substring: '',
    }
    console.log('window.cs142models.statesModel()', window.cs142models.statesModel());
  }

  handleFilterChange = (e) => {
    this.setState({substring: e.target.value})
  }

  render() {
    var results = window.cs142models.statesModel().filter(
      (state) => state.toLowerCase().includes(this.state.substring.toLowerCase())).map(
        (state) => <div key={state}> {state} </div>);
  
    return (
      <div className="container">
          <div className="search-table">
          <h2>Search:
            <a>{`${this.state.substring}`}</a></h2>
          <input id="Input" type="text" 
          value={this.state.substring} 
          onChange={event => this.handleFilterChange(event)} />
          </div>
          <h3>Result:</h3>
        <div id="list">
          <div className = "listItem">
            {results.length == 0 ? `"Not found"` : results}
          </div>
        </div>
      </div>
    );
  }
}

export default States;
