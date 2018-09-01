import React, { Component } from "react";
import { connect } from "react-redux";
import { edit } from "../services/api";

import "./styles.css";

import { editUser, editUserSuccess } from "../state/users/actions";
import { usersPath } from "../configs";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };
  }

  getUser = id => {
    const { users } = this.props;
    return users.filter(user => user.id === id);
  };

  handleChangeUserInput = e => {
    const { value } = e.target;
    this.setState(state => ({
      ...state,
      user: {
        ...state.user,
        name: value
      }
    }));
  };

  isGroupAssigned = group => {
    const { groups } = this.state.user;
    return groups.indexOf(group) !== -1;
  };

  doesUserHaveGroup = group => {
    const { groups } = this.state.user;
    return !!groups.filter(g => g.id === group.id).length;
  };

  handleGroupChange = (e, group) => {
    const { checked } = e.target;
    if (checked) {
      this.addGroupToUser(group);
    } else {
      this.removeGroupFromUser(group);
    }
  };

  removeGroupFromUser = (group = "") => {
    const { groups } = this.state.user;
    // const idx = groups.indexOf(group.id);
    const idx = groups.indexOf(groups.find(grp => grp.id === group.id));

    if (idx !== -1) {
      this.setState(state => ({
        ...state,
        user: {
          ...state.user,
          groups: [...groups.slice(0, idx), ...groups.slice(idx + 1)]
        }
      }));
    }
  };

  addGroupToUser = (group = "") => {
    this.setState(state => ({
      ...state,
      user: {
        ...state.user,
        groups: [...state.user.groups, group]
      }
    }));
  };

  editUser = () => {
    const { user } = this.state;
    const { editUser, editUserSuccess } = this.props;
    if (user.name !== "") {
      editUser();
      edit(usersPath, user).then(updatedUsers => {
        editUserSuccess(updatedUsers);
        this.props.history.push("/users");
      });
    }
  };

  render() {
    const { user, groups } = this.props;

    return (
      <div>
        {
          <div>
            <h1>User: {user.name}</h1>
            <label>Name: {user.name} </label>
            <div style={{ marginTop: 20 }}>
              <label>Groups Assigned:</label>
              <ul>
                {user.groups &&
                  user.groups.map((group, i) => (
                    <li key={i}>
                      <label>
                        {groups.find(grp => grp.id === group.id).name}
                      </label>
                    </li>
                  ))}
              </ul>
            </div>
            <hr />
            <div>
              <h3>Update with values:</h3>
              <label>New name:</label>
              <input
                type="text"
                onChange={this.handleChangeUserInput}
                value={this.state.user.name}
              />

              <div>
                <h4>Assign Groups:</h4>
                {groups.length > 0 ? (
                  <table>
                    <tbody>
                      <tr>
                        <th>Group</th>
                        <th>Assign</th>
                      </tr>

                      {groups.map((group, i) => (
                        <tr key={i}>
                          <td>
                            <label>{group.name}</label>
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              onChange={e => this.handleGroupChange(e, group)}
                              defaultChecked={this.doesUserHaveGroup(group)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div>
                    <p>Sorry... currently there are no groups to assign</p>
                  </div>
                )}
              </div>
              <div className="button-container">
                <button style={{ padding: 8 }} onClick={this.editUser}>
                  Save
                </button>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

const getUser = (id, users) => {
  return users.filter(user => user.id === parseInt(id));
};

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
    user: getUser(ownProps.match.params.id, state.users)[0],
    groups: state.groups
  };
};

const mapDispatchToProps = dispatch => ({
  editUser: () => dispatch(editUser()),
  editUserSuccess: params => dispatch(editUserSuccess(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
