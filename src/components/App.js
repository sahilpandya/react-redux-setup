/**
 * Created by sahilpandya on 18/03/18.
 */
import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import '../styles/style.scss';

const App = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
    </div>
);

export default App;