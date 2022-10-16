import React,{useEffect, useState} from 'react'
import { useHistory,useLocation } from 'react-router';
import './AdminHome.css'
import axios from 'axios'
import {white } from '@material-ui/core/colors';


function InAnswers() {
  const history = useHistory()



function detailsQuestion(){
    history.push(`/question/AllQuestions`)
}

function userDetails(){
    history.push(`/question/AllQuestions`)
}

function doctorDetails(){
    history.push(`/doctor/all`)
}

    return (
        <div className="container">
           
          <div className="row">
              <div className="col-4">
                <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                    <h2>Admin Home </h2>
                </div>
              </div>
              <div className="col-3">
              </div>
        </div>
    
    
     {/* </div> */}
    <div className="row">
            {/* <h4 className="mb-4"> Client Home  Page</h4> */}
           
            <br></br>
            <div className="col-md-4">

                <div className="progressCards" >
                    <div onClick={userDetails}>
                       
                        <div className="pp">
                            <div align="center">
                                <h2>Details Question</h2>
                            
                            </div>   
                        </div>

                    </div>        
                </div>
            </div>
            <div className="col-md-4">
            <div className="progressCards" >
                    <div onClick={detailsQuestion}>
                       
                        <div className="pp">
                            <div align="center">
                                <h2>User Details</h2>
                            
                            </div>   
                        </div>

                    </div>        
                </div>
            </div>
            
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <div className="col-md-4">

                <div className="progressCards" onClick={doctorDetails} >
                            
                            <div className="pp">
                                <div align="center">
                                    <h2>Doctor Details Management</h2>
                                
                                </div>   
                            </div>
                                
                        </div>
                </div>  
            <div className="progressCards" >
                    <div onClick={userDetails}>
                       
                        <div className="pp">
                            <div align="center">
                                <h2>User Details</h2>
                            
                            </div>   
                        </div>

                    </div>        
              
                    </div>             
                     
            </div>
                
    </div>
               
            
   
    )      

    }
export default InAnswers