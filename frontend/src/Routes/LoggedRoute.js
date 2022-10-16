import {Redirect, Route} from 'react-router-dom'

const LoggedRoute =({component: Component, ...rest}) => {
    console.log("hi")
    return (
        <Route
            {...rest}
            render={(props) => 
                (localStorage.getItem("adminAuthToken") || localStorage.getItem("userAuthToken") ) ? (
                    alert("You do not have permission to access this content!"),
                    localStorage.getItem("userAuthToken") ? (
                        <Redirect to="/ClientHome" />
                    ) : (
                        <Redirect to="/AdmintHome" />
                    )
                ) : (
                    <Component {...props} />
                )
                    
            }
        />
    )
}

export default LoggedRoute