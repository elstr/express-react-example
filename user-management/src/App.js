import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { get } from "./services/api";
import { groupsPath, usersPath } from "./configs";
import { getUsers, getUsersSuccess } from "./state/users/actions";
import { getGroups, getGroupsSuccess } from "./state/groups/actions";

import Users from "./containers/Users";
import User from "./containers/User";
import Groups from "./containers/Groups";
import Home from "./components/Home";

import "./App.css";
{
  /* <Switch> returns only the first matching route.
  While exact returns any number of routes that match exactly. */
}

class App extends Component {
  componentDidMount() {
    const {
      getUsers,
      getUsersSuccess,
      getGroups,
      getGroupsSuccess
    } = this.props;
    getUsers();
    get(usersPath).then(users => {
      getUsersSuccess(users);
    });
    getGroups();
    get(groupsPath).then(groups => {
      getGroupsSuccess(groups);
    });
  }
  render() {
    return (
      <Router>
        <div id="container">
          <aside>
            <ul className="menu vertical-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/users/create">Create Users</Link>
              </li>
              <li>
                <Link to="/groups">Groups</Link>
              </li>
              <li>{/* <Link to="/groups/create">Create Groups</Link> */}</li>
            </ul>
          </aside>
          <div id="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/users" component={Users} />
              <Route path="/users/:id" component={User} />
              {/* <Route path="/users/:id" component={UserDetail} /> */}
              <Route exact path="/groups" component={Groups} />
              {/* <Route path="/groups/:id" component={GroupDetail} /> */}
              {/* <Route path="*" component={NotFound} /> */}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  getUsersSuccess: params => dispatch(getUsersSuccess(params)),
  getGroups: () => dispatch(getGroups()),
  getGroupsSuccess: params => dispatch(getGroupsSuccess(params))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
