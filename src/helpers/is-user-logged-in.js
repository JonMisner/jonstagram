import React from 'react';
import PropTypes, from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
// import * as ROUTES from '../constants/routes';

export default function IsUserLoggedIN ({ user,loggedInPath, children, ...rest}) {
   return(
      <Route
      {...rest}
      render={({ location}) => {
         if (!user) {
            return children;
         } else if (user) {
            return (
               <Redirect
                  to={{
                     pathname: loggedInPath, 
                     state: { from: location }
                  }} />
            )
         }

         return null;
      }}
      />
   )
}

ProtectedRoute.propTypes = {
   user: PropTypes.object,
   children: PropTypes.object.isRequired
 };