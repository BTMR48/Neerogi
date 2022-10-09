import React,{useEffect, useState} from 'react'
import { useHistory,useLocation } from 'react-router';
import './InAnswers.css'
import axios from 'axios'


function InAnswers() {
  const history = useHistory()
  const [answers ,setAnswers] = useState("");
  const [question ,setQuestion] = useState("");
  const[dayWord,setDayWord]=useState(""); //1
  const[seeObject,setSeeObject]=useState(""); //2
  const[identifyObject,setIdentifyObject]=useState(""); //3
  const[identifyColor,setIdentifyColor]=useState(""); //4
  const[firstWord,setFirstWord]=useState("");//5
  const[totalmarks,setMarks]=useState("");//5
  
  

  function submitMarks(event) {
    event.preventDefault();  
    var marks = 0;
    if (dayWord === 'wordmore5') marks += 10;
    if (seeObject === 'yessee') marks += 10;
    if (identifyObject === 'yesidentify') marks += 10;
    if (identifyColor === 'colorsyes') marks += 10;
    if (firstWord === 'firstword18') marks += 10;
    history.push(`/questions/markspage/${marks}`);
  }


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
    
     {/* </div> */}
     <div className="row">
            <h4 className="mb-4"> Questions </h4>
            <form onSubmit={submitMarks}>

               
                    <div> 
                        <div className="progressCard" >
                            
                            <div className="p-3">
                                <h2>1. how many words child talk in a day?</h2>
                                <div align="right">
                                <span> 
                                
                                <div className="col-md-8 mb-4">
                                    <div className="form-name">
                                    <div className="form-check form-check-inline">
                                            <input 
                                                className="form-check-input" type="radio" name="wordday" id="wordless5" value="wordless5" 
                                                onChange={(e)=>setDayWord(e.target.value)}
                                            />
                                            <label className="form-check-label" for="wordless5">
                                            less 5 
                                            </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                            <input 
                                                className="form-check-input" type="radio" name="wordday" id="wordmore5" value="wordmore5" 
                                                onChange={(e)=>setDayWord(e.target.value)}
                                            />
                                            <label className="form-check-label" for="wordmore5">
                                            more than 5
                                            </label>
                                    </div>
                                </div>
                                </div>
                                </span> 
                                </div>
                            </div>
                            
                        </div>

                        <br></br>
                        <div className="progressCard" >
                            
                            <div className="p-3">
                                <h2>2. when you show some thing to child then is child watch there?</h2>
                                <div align="right">
                                <span> 
                                
                                <div className="col-md-8 mb-4">
                                    <div className="form-name">
                                    <div className="form-check form-check-inline">
                                            <input 
                                                className="form-check-input" type="radio" name="see" id="nosee" value="nosee" required
                                                onChange={(e)=>setSeeObject(e.target.value)}
                                            />
                                            <label className="form-check-label" for="PUBLISH">
                                           no
                                            </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                            <input 
                                                className="form-check-input" type="radio" name="see" id="yessee" value="yessee" required
                                                onChange={(e)=>setSeeObject(e.target.value)}
                                            />
                                            <label className="form-check-label" for="UNPUBLISH">
                                            yes
                                            </label>
                                    </div>
                                </div>
                                </div>
                                </span> 
                                </div>
                            </div>
                            
                        </div>
                        <br></br>
                        <div className="progressCard" >
                            
                            <div className="p-3">
                                <h2>3.When you show some thing then is child identify that </h2>
                                <div align="right">
                                <span> 
                                
                                <div className="col-md-8 mb-4">
                                    <div className="form-name">
                                    <div className="form-check form-check-inline">
                                            <input 
                                                className="form-check-input" type="radio" name="identify" id="noidentify" value="noidentify" required
                                                onChange={(e)=>setIdentifyObject(e.target.value)}
                                            />
                                            <label className="form-check-label" for="PUBLISH">
                                            no
                                            </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                            <input 
                                                className="form-check-input" type="radio" name="identify" id="yesidentify" value="yesidentify" required
                                                onChange={(e)=>setIdentifyObject(e.target.value)}
                                            />
                                            <label className="form-check-label" for="UNPUBLISH">
                                          yes
                                            </label>
                                    </div>
                                </div>
                                </div>
                                </span> 
                                </div>
                            </div>
                            
                        </div>
                        <br></br>
                        <div className="progressCard" >
                            
                            <div className="p-3">
                                <h2>4. child can identify more than 5 colors</h2>
                                <div align="right">
                                <span> 
                                
                                <div className="col-md-8 mb-4">
                                    <div className="form-name">
                                    <div className="form-check form-check-inline">
                                            <input 
                                                className="form-check-input" type="radio" name="colors" id="colorsno" value="colorsno" required
                                                onChange={(e)=>setDayWord(e.target.value)}
                                            />
                                            <label className="form-check-label" for="PUBLISH">
                                           no
                                            </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                            <input 
                                                className="form-check-input" type="radio" name="colors" id="colorsyes" value="colorsyes" required
                                                onChange={(e)=>setDayWord(e.target.value)}
                                            />
                                            <label className="form-check-label" for="UNPUBLISH">
                                            yes
                                            </label>
                                    </div>
                                </div>
                                </div>
                                </span> 
                                </div>
                            </div>
                            
                        </div><br></br>
                        <div className="progressCard" >
                            
                            <div className="p-3">
                                <h2>5.The first word child told?</h2>
                                <div align="right">
                                <span> 
                                
                                <div className="col-md-8 mb-4">
                                    <div className="form-name">
                                    <div className="form-check form-check-inline">
                                            <input 
                                                className="form-check-input" type="radio" name="firstword" id="firstword19" value="firstword19" required
                                                onChange={(e)=>setFirstWord(e.target.value)}
                                            />
                                            <label className="form-check-label" for="firstword19">
                                          after 18 months
                                            </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                            <input 
                                                className="form-check-input" type="radio" name="firstword" id="firstword18" value="firstword18" required
                                                onChange={(e)=>setFirstWord(e.target.value)}
                                            />
                                            <label className="form-check-label" for="firstword18">
                                            before 18 months
                                            </label>
                                    </div>
                                </div>
                                </div>
                                </span> 
                                </div>
                            </div>
                            
                        </div>
                    </div>
               
           
                    <div className='col-xl-6 mb-4'></div>
          <div>
            <input
              type='submit'
              value='SUBMIT ANSWERS '
              className='form-submit-btn'
            />
          </div>

           </form>
          </div>
    </div>
    )      

    }
export default InAnswers