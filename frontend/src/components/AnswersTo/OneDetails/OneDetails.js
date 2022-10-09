import { useHistory,useState } from 'react';
import axios from 'axios';
import './OneDetails.css'
import Button from '@material-ui/core/Button';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import OutlinedInput from "@material-ui/core/OutlinedInput";





function Submit(props) {
    // const user = JSON.parse(localStorage.getItem('user'));
    //const progressID = props.match.params.id;
    //const history = useHistory()
    // const studentID = user._id;
    const questionName = props.match.params.name;
    const [answerName, setAnswerName] =  useState("");
   



    

    async function add(event){
        event.preventDefault();
        console.log()
        const newSubmission = { questionName, answerName}
        
        // const config = {
        //     headers: {
        //         "content-Type": "application/json",
        //         Authorization: `${localStorage.getItem("studentAuthToken")}`
        //     }
        // };

        axios.post("http://localhost:8070/answerdas/addAnswer", newSubmission ).then((res)=>{
            alert("Answer Added");
            
        }).catch((error)=>{         
           
             
        })
       // history.push(`/evolution/addProgress`)     
    }
    
    return (
    <div className="container" align="center" >
        <div className="row">
            <div className="col-12">
                <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                    <h2>&nbsp;Add Answer</h2>
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
                                        type="text" id="name" placeholder="Progress Name" 
                                        required fullWidth readOnly 
                                            value={questionName}
                                        inputProps={{style: {padding: 12}}} 
                                    />
                                </div>
                            </div>         
                            <div className="col-md-8 mb-4">
                                <div className="form-name">
                                    <OutlinedInput
                                        type="text" id="name" placeholder="Answer" 
                                        required fullWidth
                                        onChange={(e)=>setAnswerName(e.target.value)}
                                        inputProps={{style: {padding: 12}}} 
                                    />
                                </div>
                            </div>     
                        </div>
                        
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input className="form-submit-btn" type="submit" value="Add Answer" />
                        </div>
                    </div>
                </div>
            </form>            
        </div>                    
    </div>


        
    )
}

export default Submit
