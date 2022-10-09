import React,{useEffect, useState} from 'react'
import { useHistory,useLocation } from 'react-router';
import './showMarkspage.css'
import axios from 'axios'
import { red,blue } from '@mui/material/colors';
import OutlinedInput from "@material-ui/core/OutlinedInput";


function InAnswers(props) {
  const history = useHistory()
  const marks = props.match.params.marks;
  
  function view(){
    history.push(`/evolution/level`)
  }

   
  function download(){
    history.push(`/InAnswers/MarksPDF/${marks}`)
  }

    return (
        <div className="container">
          <div className="row">
              <div className="col-4">
                <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                    <h2>Marks </h2>
                </div>
              </div>
              <div className="col-3">
              </div>
        </div>
    
     {/* </div> */}
     <div className="row">
  
               
                    <div> 
                        <div className="progressCard" >
                            
                            <div className="p-3">
                                <h2>මුලු ලකුණු</h2>
                                <div align="right">
                                <span> 

                                <div className="marksCard" >
                                      <center><h3>{marks}  </h3> </center> 
                                </div>
                                </span> 
                                </div>
                            </div>
                            

                          <p>
                            dsfjsdjkfhjksdnfknsdjkfbhjsdhfnb dshbfhsdjhfbasdjhbfhsdfhbsaf fgdgdfgvdfvgbfdgbvdfsgbvfdgdfgfdgfdgfdgfdgf
                          </p>
                          <div className="p-3">
                                <h2>waiyda wisthara</h2>
                                <div align="right">
                                <span> 

                                <button className="progressBtn" style={{backgroundColor:red[400]}} onClick={()=>view()}> View submission </button>
                                </span> 
                                </div>
                            </div>
                            <div className="p-3">
                                <h2>PDF Download</h2>
                                <div align="right">
                                <span> 

                                <button className="progressBtn" style={{backgroundColor:red[400]}} onClick={()=>download()}>PDF Download</button>
                                </span> 
                                </div>
                            </div>
                            <div className="p-3">
                                <h2>waiyda wisthara</h2>
                                <div align="right">
                                <span> 

                                <button className="progressBtn" style={{backgroundColor:red[400]}} onClick={()=>view()}> View submission </button>
                                </span> 
                                </div>
                            </div>

                        <div>        
                      </div>
                            
                        </div>

                        <br></br>
                    </div>
               
   
          </div>
    </div>
    )      

    }
export default InAnswers