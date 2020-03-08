import React from 'react'
import { Switch, Route, Redirect} from 'react-router'
import cookie from 'cookie'
import Listings from './Containers/Listings'
import Login from './Components/Login'
import Details from './Containers/Details'
import AddListing from './Containers/AddListing'


const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
      <Route
      {...rest}
      render={(props) => checkAuth()
          ? <Component {...props} />
          : <Redirect to="/login" />}
      />
  )
}

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Listings} />
            <Route path="/login" component={Login} />
            <Route path="/details" component={Details} />
            <ProtectedRoute path="/add" component={AddListing} />
        </Switch>
    );
};

export default Router;