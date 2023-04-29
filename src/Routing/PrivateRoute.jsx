import React from 'react'
import { useAuth } from '../Component/Auth/Auth'
import NoMatch from '../Component/pages/NoMatch';

const PrivateRoute = (props) => {
    const {isUser} = useAuth();

    if(isUser){
      return <div>{props.children}</div>
    }
    return <NoMatch/>
}

export default PrivateRoute
