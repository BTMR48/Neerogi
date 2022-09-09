import { useState } from 'react';
import axios from 'axios';
import './AddQuestion.css'
import Button from '@material-ui/core/Button';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { TextField } from '@material-ui/core';




function AddQuestion() {
    const[name,setName]=useState(""); 
    const [fileInputState, setFileInputState] = useState('');

    

    

    async function add(event){
        event.preventDefault();
        const config = {
            headers: {
                "content-Type": "application/json"
            }
        };
        
    

        const newQuestion = {name}
        
        try {
            await axios.post("http://localhost:8070/question/addQuestion", newQuestion , config)
            alert("Question Added Successfully")  
            event.target.reset(); 
        }catch (error) {         
            alert("Question can't be Added");
        }
    }
    
    return (
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
                    <div className="col-24">
                        <div className="row">
                            <div className="col-md-12` mb-4">
                                <div className="form-name">
                                    <OutlinedInput
                                        type="text" id="name" placeholder="Question" 
                                        required fullWidth
                                        onChange={(e)=>setName(e.target.value)}
                                        inputProps={{style: {padding: 12}}} 
                                    />
                                </div>
                            </div>
                                                
                            
                        </div>
                     
                        </div>
                    </div>
                   
               
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input className="form-submit-btn" type="submit" value="Add Question" />
                        </div>
                    </div>
                </div>
            </form>            
        </div>                    
    </div>


        
    )
}

export default AddQuestion
