import { useState } from 'react';
import axios from 'axios';
import './AddNewQuestion.css'
import Button from '@material-ui/core/Button';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { TextField } from '@material-ui/core';
import { red } from '@mui/material/colors';



function AddNewQuestion(){

    const[questionId, setQuestionId] = useState("");
    const[questionNum, setQuestionNum] = useState("");
    const[question, setQuestion] = useState("");
  

    const [previewSource, setPreviewSource] = useState();
    const [selectedFile, setSelectedFile] = useState();
    const [fileInputState, setFileInputState] = useState('');

    const [previewSource1, setPreviewSource1] = useState();
    const [selectedFile1, setSelectedFile1] = useState();
    const [fileInputState1, setFileInputState1] = useState('');

    const [previewSource2, setPreviewSource2] = useState();
    const [selectedFile2, setSelectedFile2] = useState();
    const [fileInputState2, setFileInputState2] = useState('');

    const [previewSource3, setPreviewSource3] = useState();
    const [selectedFile3, setSelectedFile3] = useState();
    const [fileInputState3, setFileInputState3] = useState('');

    //handling the pdf uploading
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
    
    //display a preview of uploaded pdf
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

    async function add(event){
        event.preventDefault();
        const config = {
            headers: {
                "content-Type": "application/json"
            }
        };

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
        

        const newQuestion = {questionId, questionNum, question, imageOne, imageTwo, imageThree, voiceRecord }
        
        try {
            await axios.post("http://localhost:8070/activityQuestions/addNewQuestion", newQuestion , config)
            alert("Question Added Successfully")  
            event.target.reset(); 
        }catch (error) {         
            alert(error,"Question can't be Added");
        }
    }


    return(
        <div className="container" align="center" >
            <div className="row">
                <div className="col-12">
                    <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                        <h2>&nbsp;Add New Question</h2>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="create_progress">
                <form onSubmit={add} className="addProgress">
                    <div className="row">
                        <div className="col-8">
                            <div className="row">
                                <div className="col-md-8 mb-4">
                                    <div className="form-name">
                                        <OutlinedInput
                                            type="text" id="QuestionId" placeholder="QuestionId" 
                                            required fullWidth
                                            onChange={(e)=>setQuestionId(e.target.value)}
                                            inputProps={{style: {padding: 12}}} 
                                        />
                                    </div>
                                </div>
                                <div> 
                                    <div className="col-md-8 mb-4">
                                        <div className="form-date">
                                            <OutlinedInput 
                                                type="text" id="QuestionNum" placeholder="QuestionNum" required fullWidth
                                                onChange={(e)=>setQuestionNum(e.target.value)}
                                                inputProps={{style: {padding: 12}}}
                                            />
                                        </div>
                                    </div>
                                </div>                       
                                <div> 
                                    <div className="col-md-8 mb-4">
                                        <div className="form-date">
                                            <OutlinedInput 
                                                type="text" id="Question" placeholder="Question" required fullWidth
                                                onChange={(e)=>setQuestion(e.target.value)}
                                                inputProps={{style: {padding: 12}}}
                                            />
                                        </div>
                                    </div>
                                </div>     
                            </div>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <div>
                                {previewSource3 ? 
                                    <img src={previewSource3} alt="Uploaded" className="previewImg"/>
                                :
                                    <img src="/images/progress.png" className="previewImg" alt="voice Record"/>
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

                                        <Button color="primary" variant="contained" component="span" style={{backgroundColor:red[400]}}>
                                             &nbsp; Upload Audio file
                                        </Button>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="col-4 d-flex justify-content-center">
                            <div>
                                {previewSource ? 
                                    <img src={previewSource} alt="preview" className="previewImg"/>
                                :
                                    <img src="/images/progress.png" className="previewImg" alt="imageOne"/>
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
                                            <AddAPhotoIcon />&nbsp; Upload Image 1
                                        </Button>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="col-4 d-flex justify-content-center">
                            <div>
                                {previewSource1 ? 
                                    <img src={previewSource1} alt="preview" className="previewImg"/>
                                :
                                    <img src="/images/progress.png" className="previewImg" alt="imageTwo"/>
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

                                        <Button color="primary" variant="contained" component="span" >
                                             <AddAPhotoIcon />&nbsp; Upload Image 2
                                        </Button>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="col-4 d-flex justify-content-center">
                            <div>
                                {previewSource2 ? 
                                    <img src={previewSource2} alt="preview" className="previewImg"/>
                                :
                                    <img src="/images/progress.png" className="previewImg" alt="imageThree"/>
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
                                             <AddAPhotoIcon />&nbsp; Upload Image 3
                                        </Button>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input className="form-submit-btn" type="submit" value="AddNewQuestion" />
                            </div>
                        </div>
                    </div>
                </form>            
            </div>                    
    </div>

    )


}

export default AddNewQuestion
