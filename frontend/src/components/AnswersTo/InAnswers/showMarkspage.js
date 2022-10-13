import React,{useEffect, useState} from 'react'
import { useHistory,useLocation } from 'react-router';
import './showMarkspage.css'
import axios from 'axios'
import { red,blue, yellow, brown, green } from '@mui/material/colors';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { amber } from '@material-ui/core/colors';


function InAnswers(props) {
  const history = useHistory()
  const marks = props.match.params.marks;
  
  function view(){
    history.push(`/evolution/level`)
  }

   
  function download(){
    history.push(`/InAnswers/MarksPDF/${marks}`)
  }
  const myStyle={
    backgroundImage: 
    "url('/images/backgroundimg.jpg')",
     height:'100vh',
     marginBottom:'-120px',
    // fontSize:'50px',
    backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
};

    return (
      <div style={myStyle}>
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
                                      <center ><h3>{marks}  </h3> </center> 
                                </div>
                                </span> 
                                </div>
                            </div>
                            
                          <center>
                            <h2>
                          ඔබට අවසිනම් අප නිර්දේශ කර ඇති වෛද්‍යවරුන්ගේ විස්තර අධ්‍යයනය කර සුදුසු වෛද්‍යවරයෙක් 
                          </h2>
                          <h2>
                         පහත බටනය ක්ලික් කර තෝරාගත හැක හෝ පර්යෙෂණ වාර්තාව බාගත කිරීම අදාල බටනය ක්ලික් කරන්න.නැතිනම් ඔටිසම් රෝගයට ඔබේ දරුවාට 
                          </h2>
                          <h2>
                          අධ්‍යාපනය ක්‍රියාකාරකම් සදහා අදාල බටනය ක්ලික් කරන්න.
                          </h2>
                          </center>
                          
                          <div className="p-3">
                                <h2>වෛද්‍ය විස්තර</h2>
                                <div align="right">
                                <span> 

                                <button className="progressBtn" style={{backgroundColor:blue[400]}} onClick={()=>view()}>වෛද්‍ය විස්තර</button>
                                </span> 
                                </div>
                            </div>
                            <div className="p-3">
                                <h2>පර්යෙෂණ වාර්තාව</h2>
                                <div align="right">
                                <span> 

                                <button className="progressBtn" style={{backgroundColor:green[600]}} onClick={()=>download()}>බාගත කරන්න</button>
                                </span> 
                                </div>
                            </div>
                            <div className="p-3">
                                <h2>ඔටිසම් රෝගය සදහා දරුවාට අධ්‍යාපනය ක්‍රියාකාරකම්</h2>
                                <div align="right">
                                <span> 

                                <button className="progressBtn" style={{backgroundColor:amber[800]}} onClick={()=>view()}> යොමුවන්න </button>
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
    </div>
    )      

    }
export default InAnswers