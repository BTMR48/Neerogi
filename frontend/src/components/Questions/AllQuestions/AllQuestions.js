import React,{useEffect, useState} from 'react'
import { useHistory,useLocation } from 'react-router';
import './AllQuestions.css'
import axios from 'axios'
import { red,blue } from '@mui/material/colors';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


function AllQuestions() {
  const [isAdmin,setIsAdmin]= useState(true)
  const [questions, setQuestions] = useState([])
  const history = useHistory()
const location = useLocation()
//   const [user, setUser] =  useState("");

  useEffect(() => { 
    // if(localStorage.getItem("user")){
    //   setUser(JSON.parse(localStorage.getItem('user')))
    // }
    // if(localStorage.getItem("adminAuthToken")){
    //   setIsAdmin(true)
    // }
    async function getAllQuestions() {
        axios.get(`http://localhost:8070/question/questions`).then((res) => {
            setQuestions(res.data)  
            
        }).catch((error) => {
          alert("Failed to fetch Questions")
         
        })
      }
    
      getAllQuestions();
    })
    async function deleteQuestion(id){        
      await axios.delete(`http://localhost:8070/question/question/${id}`).then(() => {
          alert("Question deleted successfully")
          history.push('/question/AllQuestions')
      }).catch((error) => {
          alert(`Failed to delete the Questions\n${error.message}`)
      }) 
    } 

  function view(id){
    history.push(`/question/UpdateQuestion/${id}`)
  }
  
  function addQuestion(){
    history.push(`/question/AddQuestions`)
  }
//   function ProductHistory(){
//     navigate(`/pharmacy/product/history`)
// }


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
        <div className="progressGrid"  > 
          {isAdmin && 
            <Button  className="mx-2 progressBtn" style={{backgroundColor:blue[400],color:'white'}} onClick={()=>addQuestion()}>
            Add Question <AddIcon/>
            </Button>  
          }
          {questions.map((Question,key)=>( 
                <div key={key}> 
                    <div className="progressCard" >
                        
                        <div className="p-3">
                            {/* <h2>{Question.id}</h2> */}
                            <h2>{Question.name}</h2>
                            <div align="right">
                              <span> 
                                  {/* <button className="progressBtn" style={{backgroundColor:orange[600]}}
                                    onClick={()=>AddToCart(Progress._id, 
                                    //user._id, 
                                    Progress.date)}> 
                                    <ShoppingCartIcon/> 
                                  </button> */}
                                  &nbsp;&nbsp;&nbsp;
                                  <button className="progressBtn" style={{backgroundColor:blue[400]}} onClick={()=>view(Question.id)}> View Question </button> 
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  <button className="progressBtn" style={{backgroundColor:red[500]}} onClick={()=>deleteQuestion(Question.id)} >
                                        Delete <DeleteForeverIcon/>
                                        </button>
                              </span> 
                            </div>
                        </div>
                    </div>
                </div>
          ))} 
        </div>
      </div>
    )      
}

export default AllQuestions
