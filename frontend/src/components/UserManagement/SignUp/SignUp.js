import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import axios from 'axios';
import './SignUp.css';

function SignUp() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmpassword,setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState();
    const history = useHistory();
    const [showMessage, setShowMessage] = useState(false)
    const role = 0;

    const [fileInputState, setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [previewSource, setPreviewSource] = useState();

    function passwordOnFocus(){
        setShowMessage(true)
    }

    function passwordOnBlur(){
        setShowMessage(false)
    }

    //show hide password
    function handleShowPassword(){
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }

    //handling the image uploading
    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(event.target.value);
    };

    //display a preview of uploaded image
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }

    //header
    const config = {
        headers: {
            "content-Type": "application/json"
        }
    };

    //register
    async function register(event){
        event.preventDefault();

        let imgUrl

        if(previewSource){
            const formData = new FormData();
            formData.append("file", selectedFile) 
            formData.append("upload_preset", "userss")

            try {
                await axios.post("https://api.cloudinary.com/v1_1/tbrmy/image/upload", formData).then((res) =>{
                    imgUrl = res.data.secure_url
                })
            } catch (error) {
                alert("Image Upload Failed")
            }
        }

        if(password === confirmpassword){

            const newUser = {name, email, password, imgUrl, role}

            try {
                await axios.post("http://localhost:8070/user/signup", newUser , config)
                    alert("Registration Successful")
                    history.push('/user/signin')
            } catch (error) {
                if(error.response.status === 409){
                    alert(error.response.data.message)
                }
                else{
                    alert("User Registration failed")
                } 
            }
        }else{
            alert("Passwords don't match");
        }        
    }

    return (
            <div className="container" align="center">
                <div className="row">
                    <div className="col-1">
                    </div>
                    <div className="col-11">
                        <div className="pb-2 px-5 d-flex align-items-center justify-content-between">
                            <h2 className="form-h1">ලියාපදිංචි වන්න</h2>
                        </div>
                    </div>
                </div>
                <div className="card-form">
                    <form onSubmit={register} className="boxSignUp">
                        <div className="row">
                            <div className="col-8">
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="form-group">
                                            <OutlinedInput
                                                type="text" id="name" placeholder="නම*" 
                                                required fullWidth
                                                onChange={(event)=> {setName(event.target.value)}}
                                                inputProps={{style: {padding: 12}}}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-8 mb-4">
                                        <div className="form-group">
                                            <OutlinedInput  
                                                type="email" id="email" placeholder="විද්යුත් තැපෑල*" 
                                                required fullWidth
                                                onChange={(event)=> {setEmail(event.target.value)}}
                                                inputProps={{style: {padding: 12}}}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <OutlinedInput 
                                                type={showPassword ? "text" : "password"}
                                                id="password" name="password" placeholder="මුරපදය*" required fullWidth
                                                onChange={(event)=> {setPassword(event.target.value)}}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                    <IconButton onClick={handleShowPassword}>
                                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                    </InputAdornment>
                                                }
                                                inputProps={{style: {padding: 12}}}
                                                onFocus={passwordOnFocus}
                                                onBlur={passwordOnBlur}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <OutlinedInput 
                                                type={showPassword ? "text" : "password"}
                                                id="confirmpassword" name="confirmpassword" placeholder="මුරපදය තහවුරු කරන්න*" required fullWidth
                                                onChange={(event)=> {setConfirmPassword(event.target.value)}}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                    <IconButton onClick={handleShowPassword}>
                                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                    </InputAdornment>
                                                }
                                                inputProps={{style: {padding: 12}, pattern: "[A-Za-z0-9]{8,}"}}
                                                onFocus={passwordOnFocus}
                                                onBlur={passwordOnBlur}
                                            />
                                        </div>
                                    </div>
                                    {/* <div className="col-xl-12 mb-4">
                                        {showMessage &&
                                            <div className="PWmessage">
                                                <p>Password must contain lowercase letters, uppercase letters, numbers and should consist minimum of 8 characters</p>
                                            </div>
                                        }
                                    </div> */}
                                    {/* <div className="col-md-12">
                                        <div className="form-group">
                                            <input id="terms" type="checkbox" required/>
                                            <label for="terms">&nbsp;I agree to the <Link to="/terms">Terms and Conditions</Link>.</label>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-4 d-flex justify-content-center">
                                <div>
                                    {previewSource ? 
                                        <img src={previewSource} alt="preview" className="previewImg"/>
                                    :
                                        <img src="/images/avatar.jpg" className="previewImg" alt="profile pic"/>
                                    }
                                    <div className="form-group">
                                        <label htmlFor="profilepic">
                                            <input
                                                style={{ display: 'none' }}
                                                id="profilepic"
                                                name="profilepic"
                                                type="file"
                                                onChange={handleFileInputChange}
                                                value={fileInputState}
                                            />

                                            <Button color="primary" variant="contained" component="span">
                                                <AddAPhotoIcon/> &nbsp; පින්තූරය උඩුගත කරන්න
                                            </Button>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input className="form-submit-btn" type="submit" value="ලියාපදිංචි වන්න" />
                                </div>
                            </div>
                        </div>
                        
                        <p>දැනටමත් ගිණුමක් තිබේද? <Link to="/user/signin">ලොග් වෙන්න</Link></p>
                    </form>             
                </div>                   
            </div>
    )
}

export default SignUp
