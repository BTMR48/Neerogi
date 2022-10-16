import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AddAudioIcon from '@material-ui/icons/LibraryMusic'
import OutlinedInput from "@material-ui/core/OutlinedInput";
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import Chip from '@material-ui/core/Chip';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import './UpdateQuestion.css';

function UpdateQuestion(props){

    const [questionNum, setQuestionNum] = useState("");
    const [question, setQuestion] = useState("");
    const [imageOne, setImageOne] = useState("");
    const [imageTwo, setImageTwo] = useState("");
    const [imageThree, setImageThree] = useState("");
    const [voiceRecord, setVoiceRecord] = useState("");

    const [fileInputState, setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [previewSource, setPreviewSource] = useState();

    const [previewSource1, setPreviewSource1] = useState();
    const [selectedFile1, setSelectedFile1] = useState();
    const [fileInputState1, setFileInputState1] = useState('');

    const [previewSource2, setPreviewSource2] = useState();
    const [selectedFile2, setSelectedFile2] = useState();
    const [fileInputState2, setFileInputState2] = useState('');

    const [previewSource3, setPreviewSource3] = useState();
    const [selectedFile3, setSelectedFile3] = useState();
    const [fileInputState3, setFileInputState3] = useState('');

    const history = useHistory();

    //fetching user data
    useEffect(()=>{
        async function fetchQuestion(){
            await axios.get(`http://localhost:8070/activityQuestions/getQuestionById/${props.match.params.id}`).then((res)=>{
                console.log(res)
                setQuestionNum(res.data.questionNum)
                setQuestion(res.data.question)
                setImageOne(res.data.imageOne)
                setImageTwo(res.data.imageTwo)
                setImageThree(res.data.imageThree)
                setVoiceRecord(res.data.voiceRecord)
            }).catch((error)=>{
                alert("Failed to fetch Question data")
            })
        }
        fetchQuestion()
    },[props]);

    //handling the image uploading
    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(event.target.value);
    };

    const handleFileInputChange1 = (event) => {
        const file = event.target.files[0];
        previewFile1(file);
        setSelectedFile1(file);
        setFileInputState1(event.target.value);
    };

    const handleFileInputChange2 = (event) => {
        const file = event.target.files[0];
        previewFile2(file);
        setSelectedFile2(file);
        setFileInputState2(event.target.value);
    };

    const handleFileInputChange3 = (event) => {
        const file = event.target.files[0];
        previewFile3(file);
        setSelectedFile3(file);
        setFileInputState3(event.target.value);
    };

    //display a preview of uploaded image
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }

    const previewFile1 = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource1(reader.result)
        }
    }

    const previewFile2 = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource2(reader.result)
        }
    }

    const previewFile3 = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource3(reader.result)
        }
    }

    //update the Question
    async function Update(event){

        event.preventDefault();

        let imageOne

        if(previewSource){
            const formData = new FormData();
            formData.append("file", selectedFile) 
            formData.append("upload_preset", "question_Images")

            try {
                await axios.post("https://api.cloudinary.com/v1_1/tbrmy/image/upload", formData).then((res) =>{
                    imageOne = res.data.secure_url
                })
            } catch (error) {
                alert(error)
            }
        }

        let imageTwo

        if(previewSource1){
            const formData = new FormData();
            formData.append("file", selectedFile1) 
            formData.append("upload_preset", "question_Images")

           
            try {
                await axios.post("https://api.cloudinary.com/v1_1/tbrmy/image/upload", formData).then((res) =>{
                    imageTwo = res.data.secure_url
                })
            } catch (error) {
                alert(error)
            }
        }

        let imageThree

        if(previewSource2){
            const formData = new FormData();
            formData.append("file", selectedFile2) 
            formData.append("upload_preset", "question_Images")

           
            try {
                await axios.post("https://api.cloudinary.com/v1_1/tbrmy/image/upload", formData).then((res) =>{
                    imageThree = res.data.secure_url
                })
            } catch (error) {
                alert(error)
            }
        }

        let voiceRecord 

        if(previewSource3){
            const formData = new FormData();
            formData.append("file", selectedFile3) 
            formData.append("upload_preset", "activity_Audio")

           
            try {
                await axios.post("https://api.cloudinary.com/v1_1/tbrmy/video/upload", formData).then((res) =>{
                    voiceRecord  = res.data.secure_url
                })
            } catch (error) {
                alert(error)
            }
        }

        const updateQuestion = {questionNum, question, imageOne, imageTwo , imageThree, voiceRecord}
        //header with authorization token
        const config = {
            headers: {
                "content-Type": "application/json",
                Authorization: `${localStorage.getItem("supervisorAuthToken")}`,
            }
        };

        try {
            await axios.put(`http://localhost:8070/activityQuestions/updateQuestion/${props.match.params.id}`,updateQuestion, config);
                alert("Updated Successfully")
                history.push('/admin/ViewAllQuestions')
        } catch (error) {
            if(error.response.status === 401){
                alert("Authentication failed. Please Sign In again")
                history.push('/supervisor/signin')
            } else{
                alert("Updating Failed")
            }
        }
        
    }

    return (
        <div className="container" align="center">
            <div className="row">
                <div className="col-1">
                </div>
                <div className="col-11">
                    <div className="pb-2 px-5 d-flex align-items-center justify-content-between">
                        <h2>Update Question</h2>
                    </div>
                </div>
            </div>
            <div className="">
                <form onSubmit={Update} encType="multipart/form-data" className="boxUpdateQuestions" >
                    <div className="row">
                        <div className="col-11" >
                            <div className="row">

                                <div className="col-md-6 mb-4">
                                    <div className="form-group">
                                        <OutlinedInput
                                            type="text" id="questionNum" placeholder="Question Number" 
                                            required fullWidth 
                                            value={questionNum}
                                            onChange={(event)=> {setQuestionNum(event.target.value)}}
                                            inputProps={{style: {padding: 12}}}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-7 mb-4">
                                    <div className="form-group">
                                        <OutlinedInput
                                            type="text" id="question" placeholder="Question" 
                                            required fullWidth 
                                            value={question}
                                            onChange={(event)=> {setQuestion(event.target.value)}}
                                            inputProps={{style: {padding: 12}}}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 d-flex justify-content-center" align="center">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                    { previewSource  ?
                                        <img src={previewSource} alt="preview" className="previewImg"/>
                                    : imageOne === ""? 
                                        <img src="/images/avatar.jpg" alt="preview" className="previewImg"/>
                                    :
                                        <img src={`${imageOne}`} className="previewImg" alt="profile pic"/>
                                    }
                                    <div className="form-group">
                                        <label htmlFor="imageOne">
                                            <input
                                                style={{ display: 'none' }}
                                                id="imageOne"
                                                name="imageOne"
                                                type="file"
                                                onChange={handleFileInputChange}
                                                value={fileInputState}
                                            />

                                            <Button color="primary" variant="contained" component="span">
                                                <AddAPhotoIcon/> &nbsp; Update
                                            </Button>
                                        </label>
                                    </div>
                                </div>

                                <br></br>
                                <br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                    { previewSource1  ?
                                        <img src={previewSource1} alt="preview" className="previewImg"/>
                                    : imageTwo === ""? 
                                        <img src="/images/avatar.jpg" alt="preview" className="previewImg"/>
                                    :
                                        <img src={`${imageTwo}`} className="previewImg" alt="profile pic"/>
                                    }
                                    <div className="form-group">
                                        <label htmlFor="imageTwo">
                                            <input
                                                style={{ display: 'none' }}
                                                id="imageTwo"
                                                name="imageTwo"
                                                type="file"
                                                onChange={handleFileInputChange1}
                                                value={fileInputState1}
                                            />

                                            <Button color="primary" variant="contained" component="span">
                                                <AddAPhotoIcon/> &nbsp; Update
                                            </Button>
                                        </label>
                                    </div>
                                </div>

                                <br></br>
                                <br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                    { previewSource2  ?
                                        <img src={previewSource2} alt="preview" className="previewImg"/>
                                    : imageThree === ""? 
                                        <img src="/images/avatar.jpg" alt="preview" className="previewImg"/>
                                    :
                                        <img src={`${imageThree}`} className="previewImg" alt="profile pic"/>
                                    }
                                    <div className="form-group">
                                        <label htmlFor="imageThree">
                                            <input
                                                style={{ display: 'none' }}
                                                id="imageThree"
                                                name="imageThree"
                                                type="file"
                                                onChange={handleFileInputChange2}
                                                value={fileInputState2}
                                            />

                                            <Button color="primary" variant="contained" component="span">
                                                <AddAPhotoIcon/> &nbsp; Update
                                            </Button>
                                        </label>
                                    </div>
                                </div>

                                <br></br>
                                <br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                    { previewSource3  ?
                                        <audio src={previewSource3} alt="Uploaded" className="previewImg"/>
                                    : voiceRecord === ""? 
                                        <audio src="/images/avatar.jpg" alt="Uploaded" className="previewImg"/>
                                    :
                                        <audio src={`${voiceRecord}`} className="previewImg" alt="profile pic"/>
                                    }
                                    <div className="form-group">
                                        <label htmlFor="voiceRecord">
                                            <input
                                                style={{ display: 'none' }}
                                                id="voiceRecord"
                                                name="voiceRecord"
                                                type="file"
                                                onChange={handleFileInputChange3}
                                                value={fileInputState3}
                                            />
                                            <Button color="red" variant="contained" component="span">
                                                <AddAudioIcon/> &nbsp; update
                                            </Button>
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input className="form-submit-btn mb-0" type="submit" value="Update" />
                            </div> 
                        </div>
                    </div> 
                </form>
            </div>
        </div>
    )
         
}
export default UpdateQuestion