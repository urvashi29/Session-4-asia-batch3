import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

class Employee extends Component {
  state = {
    post: [],
  };

  componentDidMount = () => {
    //api calls
    let url = "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001";

    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        this.setState({
          post: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    //conditional rendering: using tenary operator
    const postList = this.state.post.length ? (
      <p>
        {this.state.post.map((user) => {
          return (
            <React.Fragment key={user.id}>
              <img src={user.imageUrl} alt="image" />
              <p style={{ color: "red" }}>
                <Link to={"/employee/" + user.id}>
                  {user.firstName} {user.lastName}
                </Link>
              </p>
              <p> {user.email}</p>
            </React.Fragment>
          );
        })}
      </p>
    ) : (
      <ClipLoader
        color="blue"
        loading="true"
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );

    return <>{postList}</>;
  }
}

export default Employee;

// Lifecycle Method:
