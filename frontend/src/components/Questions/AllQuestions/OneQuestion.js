import React,{useEffect, useState} from 'react';
import { Document, Page } from 'react-pdf';

import { useHistory  } from 'react-router';

import './OneQuestion.css'
import axios from 'axios'
import {orange,blue,red } from '@material-ui/core/colors';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';


//import {Submit} from './../../SubmissionManagement/AddSubmission/AddSubmissionstd'

function QuestionDetails(props) { 
    const [isAdmin,setIsAdmin]=useState(false)
    const[id,setId]=useState("");
    const[name,setName]=useState("");
    const history=useHistory()
    // const [user, setUser] = useState("");

    // const config = {
    //     headers: {
    //         "content-Type": "application/json"
    //     }
    // };

    useEffect(() => {
        // if(localStorage.getItem("user")){
        //     setUser(JSON.parse(localStorage.getItem('user')))
        // }
        
        // if(localStorage.getItem("adminAuthToken")){
        //     setIsAdmin(true)
        // }
        //get one Questions details
      async function getQuestions() {
        axios.get(`http://localhost:8070/question/question/${props.match.params.id}`).then((res) => {
          setId(res.data.question._id)   
          setName(res.data.question.name)
        }).catch((err) => {
          alert("Failed to Fetch question")
        })
      }
      getQuestions();

    }, [props]);

     //delete Questions
    async function deleteQuestion(id){        
        await axios.delete(`http://localhost:8070/question/question/delete/${id}`).then(() => {
            alert("Level deleted successfully")
            history.push('/question/questions')
        }).catch((error) => {
            alert(`Failed to delete the Questions\n${error.message}`)
        }) 
    } 

    function update(uid){
        history.push(`/question/question/updateQuestions/${uid}`)
    }
    function submit(){
        // navigate(`/patient/buyPayment/${id}/${date}`)
        history.push(`/submission/addSubmission/${id}/${name}`)
    }
   
    return (
        <div className = "container" align="center">
            <div className="detailProgress" >
                <div className="SubmissionCard" >     
                    <div className="detailProgress">      
                    
                        <table className="singleLevelBtn" >  
                            <div> 
                                {isAdmin === true ?
                                    <div>
                                        <button className="mx-2 progressBtn" style={{backgroundColor:blue[400]}} onClick={()=>update(id)}>
                                        Update <EditIcon/>
                                        </button>
                                        <button className="mx-2 progressBtn" style={{backgroundColor:red[500]}} onClick={()=>deleteQuestion(id)} >
                                        Delete <DeleteForeverIcon/>
                                        </button>
                                    </div>
                                    : 
                                    <div>
                                        <button className="mx-2 progressBtn" style={{backgroundColor:red[500]}} 
                                                    onClick={()=>submit()}>
                                                    Submit Project
                                        </button> 
                                    </div>  
                                }
                            </div>
                        </table> 
                    </div>               
                </div>
            </div>
        </div>          
    )
}

export default QuestionDetails