import React,{useEffect, useState} from 'react'
import { useHistory  } from 'react-router';
import axios from 'axios';
import './UpdateQuestion.css'
import OutlinedInput from "@material-ui/core/OutlinedInput";

function UpdateQuestion(props){
    const [name,setName]= useState("");
    const[id,setID]=useState("");
    const history=useHistory();
        
    useEffect(()=>{

      async function fetchQuestion(){
        await axios.get(`http://localhost:8070/question/question/${props.match.params.id}`).then((res)=>{ 
            setID(res.data.id)
        setName(res.data.name)     
        }).catch((error)=>{
          alert("Failed to fetch question data")
          console.log(name)
        })   
      }
      fetchQuestion()
    },[props]);

      //update the progress
    async function Update(event){
        event.preventDefault();

        const updatedquestion = {name}

        const config = {
          headers: {
            "content-Type": "application/json",
          }
        };
        
        try {
          await axios.put(`http://localhost:8070/question/question/${props.match.params.id}`,updatedquestion, config);
          alert("Question Updated Successfully")
          history.push('/question/AllQuestions')
        } catch (error) {
          alert("Question Updating Failed")
        }
    } 

    return (
        <div className="container" align="center" >
            <div className="row">
                <div className="col-12">
                    <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                        <h2>Update Question</h2>
                    </div>
                </div>
            </div>
            <div className="update_progress">
                <form onSubmit={Update} className="updateProgress">
                    <div className="row">
                        <div className="col-24">
                            <div className="row">
                                <div className="col-md-18 mb-4">
                                    <div className="form-name">
                                        <OutlinedInput
                                            type="text" id="name" placeholder="Update Name" 
                                            required fullWidth 
                                            value={name}
                                            onChange={(event)=> {setName(event.target.value)}}
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
                                <input className="form-submit-btn" type="submit" value="Update Question" />  
                            </div>
                        </div>
                    </div>   
                </form>             
            </div>                    
        </div> 
    )
}
export default UpdateQuestion
