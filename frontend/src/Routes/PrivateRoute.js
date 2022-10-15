import {Redirect, Route} from 'react-router-dom'

const PrivateRoute =({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => 
                localStorage.getItem("adminAuthToken") ? (
                    <Component {...props} />
                ) : (
                    alert("You do not have permission to access this content!"),
                    <Redirect to="/ClientHome" />
                )
                    
            }
        />
    )
}

export default PrivateRoute