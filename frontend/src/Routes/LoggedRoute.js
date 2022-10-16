import {Redirect, Route} from 'react-router-dom'

const LoggedRoute =({component: Component, ...rest}) => {
    console.log("hi")
    return (
        <Route
            {...rest}
            render={(props) => 
                (localStorage.getItem("adminAuthToken") || localStorage.getItem("userAuthToken") ) ? (
                    alert("You are already logged in!"),
                    localStorage.getItem("userAuthToken") ? (
                        <Redirect to="/ClientHome" />
                    ) : (
                        <Redirect to="/AdminHome" />
                    )
                ) : (
                    <Component {...props} />
                )
                    
            }
        />
    )
}

export default LoggedRoute