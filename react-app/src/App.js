import React, { Component } from "react";
import RouterApp from "./RouteApp";
import _ from "lodash";

class App extends Component {

  handleClick = () => {
    const arr = [1, [2, [3, [4]], 5]];
    const result = _.flattenDeep(arr);
    console.log(result);
  };

  render() {
    return (
      <>
        <RouterApp />
        <button onClick={this.handleClick}>Flatten</button>
      </>
    );
  }
}

export default App;

// free API:
// get
// https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001
// https://jsonplaceholder.typicode.com/users/
// https://jsonplaceholder.typicode.com/posts/

// https://rapidapi.com/hub
