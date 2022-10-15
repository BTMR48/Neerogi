import React,{useEffect, useState} from 'react'
import { useHistory,useLocation } from 'react-router';
import './AdminHome.css'


function InAnswers() {
  const history = useHistory()



  function detailsQuestion(){
    history.push(`/question/AllQuestions`)
}
function userDetails(){
    history.push(`/question/AllQuestions`)
}

    return (
        <div className="container">
           
          <div className="row">
              <div className="col-4">
                <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                    <h2>Parent Learning</h2>
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
                                <h2>Articles</h2>
                            
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
                                <h2>Videos</h2>
                            
                            </div>   
                        </div>

                    </div>        
                </div>
            </div>
            
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <div className="col-md-4">

                <div className="progressCards" >
                            
                            <div className="pp">
                                <div align="center">
                                    <h2>Feedback</h2>
                                    <form onSubmit={add} className="addProduct">
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-md-8 mb-4">
                                <div className="form-name">
                                    <OutlinedInput
                                        type="text" id="name" placeholder="Video heading" 
                                        required fullWidth
                                        onChange={(e)=>setName(e.target.value)}
                                        inputProps={{style: {padding: 12}}} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <div className="col-4 d-flex justify-content-center">
                        <div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input className="form-submit-btn" type="submit" value="Add Video" />
                        </div>
                    </div>
                </div>
            </form>  
                                </div>   
                            </div>
                                
                        </div>
                </div>         
                     
            </div>
                
    </div>
               
            
   
    )      

    }
export default InAnswers