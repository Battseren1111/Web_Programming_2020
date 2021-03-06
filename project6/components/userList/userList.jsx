import React from "react";
import {  List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./userList.css";
const axios = require('axios').default;

/////
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: undefined
    }
    axios.get(`/user/list`)
      .then(response => {
        this.setState({users: response.data});
      })
      .catch(err => console.log(err.response));
  }

  render() {
    return this.state.users ? (
      <div>
        <List component="nav">
          {this.state.users.map(user => {
            return (
              <Link to={`/users/${user._id}`} key={user._id}>
                <ListItem divider margin = "dense">
                  <ListItemText
                    primary={`${user.first_name} ${user.last_name}`}
                  />
                </ListItem>
              </Link>
            );
          })}
        </List>
      </div>
    ) : (
      <div />
    );
  }
}

export default UserList;
