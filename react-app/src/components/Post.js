import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "./withRouter";
import ClipLoader from "react-spinners/ClipLoader";

class Post extends Component {
  state = {
    post: [],
  };

  componentDidMount = () => {
    let id = this.props.params.post_id;
    let url = "https://hub.dummyapis.com/employee?noofRecords=1&idStarts=" + id;
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
    const postList = this.state.post.length ? (
      <p>
        {this.state.post.map((user) => {
          return (
            <div key={user.id} style={{ textAlign: "center" }}>
              <img src={user.imageUrl} alt="image" />
              <p style={{ color: "red" }}>
                {user.firstName} {user.lastName}
              </p>
              <p> {user.email}</p>
              <p>{user.contactNumber} </p>
              <p>{user.age}</p>
              <p>{user.dob}</p>
              <p>{user.salary}</p>
              <p>{user.address}</p>
            </div>
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
    return <div>{postList}</div>;
  }
}

export default withRouter(Post);
