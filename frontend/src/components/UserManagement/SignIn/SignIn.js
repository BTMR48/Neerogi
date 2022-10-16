import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import GoogleLogin from 'react-google-login';
import axios from 'axios';
import './SignIn.css';

function Login() {
    // const CLIENT_ID = process.env.REACT_APP_Google_ClientID;

    const [showPassword, setShowPassword] = useState()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    //show hide password
    function handleShowPassword(){
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }

    async function signIn(event){
        event.preventDefault();

        const config = {
            headers: {
                "content-Type": "application/json"
            }
        };
        
        try {
            //getting data from backend
            const {data} = await axios.post("http://localhost:8070/user/login", {email, password}, config);

            if(data.result.role === 0){
                //setting the patient authorization token
                localStorage.setItem("userAuthToken", `User ${data.token}`)
                history.push('/ClientHome')
            }else{
                localStorage.setItem("adminAuthToken", `Admin ${data.token}`)
                history.push('/AdminHome')
            }
            //setting user
            localStorage.setItem("user", JSON.stringify(data.result))
            
        } catch (error) {
            if(error.response.status === 404){
                alert("Invalid Email")
            }
            else if(error.response.status === 400){
                alert("Password Incorrect")
            }
            else{
                alert("Authentication Failed")
            }
        }
    }

 

    return (
        <div className="container" align="center">
            <div className="card-form">
                <form className="boxSignIn" onSubmit={signIn}>
                    <h1 className="form-h1">ලොග් වෙන්න</h1>
                    <br/>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        placeholder="විද්යුත් තැපෑල" 
                        onChange={(event)=> {setEmail(event.target.value)}} 
                        required 
                    />

                    <input
                        type={showPassword ? "text" : "password"} 
                        name="password"
                        id="password" 
                        placeholder="මුරපදය" 
                        onChange={(event)=> {setPassword(event.target.value)}} 
                        handleShowPassword={handleShowPassword}  
                        required 
                    />
                    <span className="showhide">
                        <IconButton onClick={handleShowPassword} >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </span>

                    {/* <Link className="forgot" to="/patient/forgotpassword">Forgot password?</Link>  */}
                    <input className="form-submit-btn" type="submit" value="ලොග් වෙන්න" />

                    <br></br><br></br><br></br>
                    <div className="text-muted">
                        <p>ගිණුමක් නැද්ද?<Link to="/user/signup">ලියාපදිංචි වන්න</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
