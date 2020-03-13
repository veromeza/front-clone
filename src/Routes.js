import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import CreateHouse from './views/CreateHouse';
import SignUp from './views/SignUp';
import Detail from './views/DetailHouse';


function Routes(){

    const Logout = () => {
        localStorage.removeItem('clone')
        return <Redirect to="/"/>
    }

    return(
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/house/new" component={CreateHouse} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/house/:id" component={Detail} />
        </>
    )

}

export default Routes;