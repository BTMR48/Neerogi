import React,{useEffect, useState,useRef} from 'react'
import { useHistory,useLocation } from 'react-router';
import './MarksPdf.css'
import axios from 'axios'
import { red,blue } from '@mui/material/colors';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import GetAppIcon from '@material-ui/icons/GetApp';
import { Button } from '@material-ui/core';
import { useReactToPrint } from "react-to-print";
import {green } from '@material-ui/core/colors';


function InAnswers(props) {
  const history = useHistory()

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
      content: () => componentRef.current,
  });

  
  const marks = props.match.params.marks;
  var w = marks;
    
    if (w < 20) {
                w = "Underage"
            } else {
                w = "Let em in!";
    }
  
    const myStyle={
        backgroundImage: 
        "url('/images/backgroundimg.jpg')",

         height:'160vh',
         marginBottom:'-120px',

          height:'160vh',
        // marginBottom:'-120px',

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
                                <h2>මුලු ලකුණු </h2>
                            </div>
                        </div>
                        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
                        <div className="col-3">
                        </div>
                </div>
                <div className="row">
                <div ref={componentRef}>
                    <div> 
                        <div className="progressCarddaspdf" >
                        <div className="col-xl-18" align="center">
                        <br/>
                        <img src="/images/Logo.png" className="logoFooter2" alt="logo"/>
                    </div>
                    <div className="col-xl-18" align="center">
                        <br/>
                        <h1>නීරෝගී </h1>
                    </div>
                            <br></br><br></br>
                                <div className="p-3">
                                            <h3>මුලු ලකුණු</h3>
                                    <div align="right">
                                        <span> 
                                            <div className="marksCard" >
                                                <center>
                                                    <div  >
                                                    <h3 className="marksCardA">{marks}</h3> 
                                                    </div>
                                                   
                                                </center> 
                                            </div>
                                        </span>
                                    </div> 
                                </div> 
                                { w === "Underage" ?
                                <div>
                                    <center><h3> ඔබ ඇතුලත් කල දත්ත අනුව ඔබේ දරුවාට ඔටිසම් රෝගය තිබිය හැක. එම නිසා ඔබේ දරුවාව වෛද්‍යවරයෙකු වෙත යොමු කිරීම සුදුසු වේ.‍ </h3> </center> 
                                    <br></br>  <br></br>  <br></br> 
                                    </div>
                                    :
                                    <div>
                                    <center><h1>සුබ පැතුම්!!! </h1>
                                    <br></br>  <br></br> 
                                    <h3> ඔබ ඇතුලත් කල දත්ත අනුව ඔබේ දරුවා නිරෝගී දරුවෙක් විය හැකී.  </h3></center> 
                                    <br></br>  <br></br>  <br></br> 
                                    </div>
                                     
                                    }
                                </div>
                                <br></br>  <br></br>  <br></br> 
                            </div>
                                    
                        </div>
                        <br></br> <br></br> <br></br> <br></br> <br></br>  <br></br>  <br></br> 
                        <center>
                            <div className="w-25 p-3" align='center'>
                                <Button
                                    className="print__button"
                                    variant="contained"
                                    color="secondary"
                                    endIcon={<GetAppIcon />}
                                    style={{ backgroundColor: green[700], color: 'white'}}
                                    disableElevation
                                    onClick={handlePrint}
                                    fullWidth
                                        >
                                    බාගත කරන්න
                                </Button>
                            </div>
                        </center>       
                    </div>
                    </div>
                    </div>


            
    
    )      
    }
export default InAnswers