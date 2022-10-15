import React from 'react'
import { red,blue} from '@mui/material/colors';
import { useHistory } from 'react-router-dom';

function Feedback() {

    const history = useHistory()

    function next(){
        history.push(`/articles/list`)
      }

  return (
    <div className="container" align="center" >
            <div className="row">
                <div className="col-12">
                    <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                        <h4>&nbsp;දරුවාගේ තේරුම්ගැනීමේ හැකියාව කෙසේද යන්න පරික්‍ශා කරගනිමු.</h4>
                    </div>
                </div>
            </div>
            <br></br>
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
            </div> 
            </div>                   
    </div>
  )
}

export default Feedback