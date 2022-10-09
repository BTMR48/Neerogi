import React,{useEffect, useState} from 'react'
import { useHistory,useLocation } from 'react-router';
import './Details.css'
import axios from 'axios'
import { red,blue } from '@mui/material/colors';
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
//import {AddToCart} from './../../../Utils/CartUtils'
//import GetAppIcon from '@material-ui/icons/GetApp'

function ProgressLevel() {
//   const [isAdmin,setIsAdmin]= useState(false)
  const [questions, setQuestions] = useState([])
  const history = useHistory()
  const location = useLocation()
  const [user, setUser] =  useState("");
  const[name,setName]=useState("");

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
        alert("Failed to fetch Progress")
      })
    }

   
    getAllQuestions();

  }, [])
  



  function view(name){
    history.push(`/AllDetails/onedetails/${name}`)
  }
  


    return (
        <div className="container">
          <div className="row">
              <div className="col-4">
                <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                    <h2>තොරතුරු ලබාදීම</h2>
                </div>
              </div>
              <div className="col-3">
              </div>
              <div className="col-5">
       
            
            
        
          </div>
        </div>
        <div className="progressGrid"  > 
       
          {questions.map((Questions,key)=>( 
                <div key={key}> 
                    <div className="progressCard" >
                        
                        <div className="p-3">
                            {/* <h2>{Questions.id}</h2> */}
                            <h2>{Questions.name}</h2>
                            <div align="right">
                              <span> 
                                  {/* <button className="progressBtn" style={{backgroundColor:orange[600]}}
                                    onClick={()=>AddToCart(Progress._id, 
                                    //user._id, 
                                    Progress.date)}> 
                                    <ShoppingCartIcon/> 
                                  </button> */}
                                  &nbsp;&nbsp;&nbsp;
                                  <button className="progressBtn" style={{backgroundColor:red[400]}} onClick={()=>view(Questions.name)}> Add Details </button>
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

export default ProgressLevel
