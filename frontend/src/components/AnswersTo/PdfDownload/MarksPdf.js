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
  

    return (
    <div className="container">
        <div ref={componentRef}>
                <div className="row">
                        <div className="col-4">
                            <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                                <h2>Marks </h2>
                            </div>
                        </div>
                        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
                        <div className="col-3">
                        </div>
                </div>
                <div className="row">
                    <div> 
                        <div className="progressCard" >
                                <div className="p-3">
                                            <h3>මුලු ලකුණු</h3>
                                    <div align="right">
                                        <span> 
                                            <div className="marksCard" >
                                                <center><h3>{marks}</h3></center> 
                                            </div>
                                        </span>
                                    </div> 
                                </div> 
                                { w === "Underage" ?
                                <div>
                                    <center><h3> ඔබේ දරුවාට ඕටිසම් රෝගය තිබිය හැක.  </h3> </center> 
                                    </div>
                                    :
                                    <div>
                                    <center><h3>ඔබේ දරුවා නිරෝගී දරුවෙක් විය හැකී.  </h3> </center> 
                                    </div>
                                    }
                                </div>
                            </div>
                                    
                        </div>
                        <br></br> <br></br> <br></br> <br></br>
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
                                    Download Details 
                                </Button>
                            </div>
                        </center>       
                    </div>
                </div>

    
            
    
    )      
    }
export default InAnswers