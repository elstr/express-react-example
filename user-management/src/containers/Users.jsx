import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './styles.css'
class Users extends Component {
  constructor() {
    super();
    this.state={
      user:{}
    }
  }
 
  render() {
    const { groups, users } = this.props;
    const showGroups = groups.length > 0;
    return (
      <div>
        <h1>Users</h1>
        {users.length > 0 ? (
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Groups</th>
                <th>Actions</th>
              </tr>
              {users.map((user, i) => (
                <tr key={i}>
                  <td>{user.name}</td>
                  <td>
                    <ul>
                      {showGroups &&
                        user.groups.map((group, i) => (
                          <li key={i}>
                            {groups.find(grp => grp.id === group.id).name}
                          </li>
                        ))}
                    </ul>
                  </td>
                  <td>
                    <Link to={`/users/${user.id}`}>
                      <Button bsStyle="info">Edit</Button>
                    </Link>
                    <Button
                      bsStyle="danger"
                      onClick={() => this.props.removeUser(user)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
            <p>Sorry... there are no users created</p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  groups: state.groups
});
const mapDispatchToProps = dispatch => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
