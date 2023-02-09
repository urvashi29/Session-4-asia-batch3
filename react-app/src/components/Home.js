import React, { Component } from "react";

class Home extends Component {
  state = {
    employee: [
      {
        name: "alex",
        age: 20,
        designation: "developer",
        id: 1,
      },
      {
        name: "alina",
        age: 40,
        designation: "manager",
        id: 2,
      },
      {
        name: "harry",
        age: 23,
        designation: "testing",
        id: 3,
      },
    ],
  };

  render() {
    const empList = this.state.employee.map((item) => {
      return (
        <React.Fragment key={item.id}>
          <p>{item.name}</p>
          <p>{item.age}</p>
          <p>{item.designation}</p>
        </React.Fragment>
      );
    });

    return <>{empList}</>;
  }
}

export default Home;
