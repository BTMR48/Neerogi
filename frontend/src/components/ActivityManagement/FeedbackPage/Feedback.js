import React , {useEffect, useState, useRef} from 'react'
import { red,blue} from '@mui/material/colors';
import { useHistory } from 'react-router-dom';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { Button } from '@material-ui/core';
import { useReactToPrint } from "react-to-print";


function Feedback() {

    const history = useHistory()
    const [isAdmin,setIsAdmin]= useState(false)

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const myStyle={
        backgroundImage: 
        "url('/images/backgroundimg.jpg')",
          height:'120vh',
         marginBottom:'-120px',
        // fontSize:'50px',
        backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
    };

    function next(){
        history.push(`/articles/list`)
      }

  return (
    <div style={myStyle}>
        <br></br>
        <br></br>
        <div className="container" align="center" >
                <div className="row">
                    <div className="col-12">
                        <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                            <h4>&nbsp;දරුවාගේ තේරුම්ගැනීමේ හැකියාව කෙසේද යන්න පරික්‍ශා කරගනිමු.</h4>
                        </div>
                    </div>
                </div>
                <br></br>
                <div ref={componentRef}>
                    <div className="create_progress">
                        
                    <div className="feedbackCard"  >
                        <div align ="center">
                            <h6>* දරුවා ප්‍රශ්න සියල්ලටම නිවැරදිව පිලිතුරු ලබා දෙයි. &#128525;</h6>
                            <br></br>
                            <h6>* දරුවා ප්‍රශ්න 8 - 6 අතර නිවැරදිව පිලිතුරු ලබා දෙයි.	&#128519;</h6>
                            <br></br>
                            <h6>* දරුවා ප්‍රශ්න 6 - 4 අතර නිවැරදිව පිලිතුරු ලබා දෙයි.	&#128528;</h6>
                            <br></br>
                            <h6>* දරුවා ප්‍රශ්න 3 කට අඩුවෙන් නිවැරදි පිලිතුරු ලබා දෙයි. 	&#128549;</h6>
                            <br></br>
                            <h6>* දරුවා ප්‍රශ්න සියල්ලටම වැරදි පිලිතුරු ලබා දෙයි. &#128557;</h6>
                            <br></br>
                        
                            
                            <h5>ඔබේ දරුවා ලබාදුන් පිලිතුරු ගණ්න කීයද?</h5>
                            <br></br>
                            
                            <h6>වැඩිදුර තොරතුරු දැනගන්න.</h6>
                        </div>
                    
                        <div className='col-9' align="right">
                            <span> 
                            <button className="nextBtn" style={{backgroundColor:blue[400]}} onClick={()=>next()}> පිවිසෙන්න.</button>
                            </span> 
                        </div> 
                        <br></br>
                        <br></br>
                        <div className='col-9' align="left">
                            <span> 
                                
                                    <Button
                                    className="print__button"
                                    variant="contained"
                                    color="secondary"
                                    endIcon={<CloudDownloadIcon/>}
                                    style={{ backgroundColor: blue[700], color: 'white'}}
                                    disableElevation
                                    onClick={handlePrint}
                                    fullWidth
                                        >
                                    Generate Report
                                </Button>  
                                
                            </span> 
                        </div>   
                        <br></br>         
                    </div> 
                    </div>
                </div>                   
        </div>
    </div>
  )
}

export default Feedback