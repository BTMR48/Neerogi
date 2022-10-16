import React,{useEffect, useState} from 'react'
import { useHistory,useLocation } from 'react-router';
import './Details.css'
import axios from 'axios'
import { red,blue } from '@mui/material/colors';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';

function AllQuestions() {
  const [questions, setQuestions] = useState([])
  const history = useHistory()
  const [itemList,setItemList]=useState([])
  const [ans,setAns]=useState([])

  const [questionsDetailsList, setquestionsDetailsList] = useState([{ question: "", answer: ""}]);


  useEffect(() => { 
    
    // handle click event of the Add button
  const handleAddClick = () => {
    setquestionsDetailsList([...questionsDetailsList, { question: "", answer: ""}]);
  };



    async function getAllQuestions() {
        axios.get(`http://localhost:8070/question/questions`).then((res) => {
            setQuestions(res.data)  
           
        }).catch((error) => {
          alert("Failed to fetch Questions")
         
        })
      }
    
      getAllQuestions();
    },[])





    return (
        <div className="container">
          <div className="row">
              <div className="col-4">
                <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                    <h2>Questions </h2>
                </div>
              </div>
              <div className="col-3">
              </div>
        </div>
    
     {/* </div> */}
     <div className="row">
            <h4 className="mb-4"> Questions </h4>
      

               {questions.map((Question,key)=>( 
                <div key={key}> 
                    <div className="progressCardtharindu" >
                        
                        <div className="p-3">
                            {/* <h2>{Question.id}</h2> */}
                            <h2>{Question.name}</h2>
                            <div align="right">
                              <span> 
                             
                            <div className="col-md-8 mb-4">
                                <div className="form-name">
                                    <OutlinedInput
                                        type="text" id="name" placeholder="Answer " 
                                        onChange={(e)=>ans(e.target.value)}
                                        inputProps={{style: {padding: 12}}} 
                                    />
                                </div>
                            </div>
                              </span> 
                            </div>
                        </div>
                    </div>
                </div>
          ))}
            {/* </form> */}
            


            <div className="col-xl-6 mb-4">
             
            
            </div>
            <div>
              <input type="submit" value="Add Prescription" className="form-submit-btn" />
            </div>
          </div>
    </div>
    )      
}

export default AllQuestions
