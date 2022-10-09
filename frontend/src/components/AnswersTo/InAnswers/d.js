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
  const[marks,setMarks]=useState("");//5
  
  




async function submitMarks(event){
    event.preventDefault();
        var marks = 0;
        switch (marks) {
          case "wordday" == "wordmore5" :
              setMarks(marks + 10);
              return setMarks;
            break;
          case "see" == "yessee ":
              setMarks(marks + 10);
              return setMarks;
            break;
          case "identify" == "yesidentify":
            setMarks(marks + 10);
            return setMarks;
            break;
          case "colors" == "colorsyes ":
            setMarks(marks + 10);
            return setMarks;
            break;
            case "firstword" == "firstword18 ":
                setMarks(marks + 10);
                return setMarks;
            break;
          default:
            setMarks(marks + 10);
            return setMarks;
            history.push(`/questions/markspage/${marks}`)
    }
        }


    // // calculate marks 

    
  
       
    


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
                                <h2>1. දරුවා දිනකට වචන කීයක් පවසනවා ද?</h2>
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
                                            වචන 5ට අඩුයි 
                                            </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                            <input 
                                                className="form-check-input" type="radio" name="wordday" id="wordmore5" value="wordmore5" 
                                                onChange={(e)=>setDayWord(e.target.value)}
                                            />
                                            <label className="form-check-label" for="wordmore5">
                                            වචන 5ට වැඩියී 
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
                                <h2>2. ඔබ කාමරය ඇති යමක් පෙනූ විට, ඔබේ දරුවා ඒ දෙස බලනවාද?</h2>
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
                                           නෑ බලන්නේ නෑ
                                            </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                            <input 
                                                className="form-check-input" type="radio" name="see" id="yessee" value="yessee" required
                                                onChange={(e)=>setSeeObject(e.target.value)}
                                            />
                                            <label className="form-check-label" for="UNPUBLISH">
                                            ඔව් බලනවා
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
                                <h2>3. ඔබ කාමරය ඇති යමක් පෙනූ විට, ඔබේ දරුවා එය හදුනා ගන්නවාද?</h2>
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
                                            නෑ හදුනා ගන්නෙ නෑ
                                            </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                            <input 
                                                className="form-check-input" type="radio" name="identify" id="yesidentify" value="yesidentify" required
                                                onChange={(e)=>setIdentifyObject(e.target.value)}
                                            />
                                            <label className="form-check-label" for="UNPUBLISH">
                                            ඔව් හදුනා ගන්නවා
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
                                <h2>4. දරුවා අවම වශයෙන් වර්ණ 5කට වඩා අවබෝධ කරගන්නවද?</h2>
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
                                            නෑ අවබෝධ කරගන්නේ නෑ
                                            </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                            <input 
                                                className="form-check-input" type="radio" name="colors" id="colorsyes" value="colorsyes" required
                                                onChange={(e)=>setDayWord(e.target.value)}
                                            />
                                            <label className="form-check-label" for="UNPUBLISH">
                                            ඔව් අවබෝධ කරගන්නවා
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
                                <h2>5. දරුවා පළමු වචනය පැවසුවේ?</h2>
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
                                            මාස 18ට පසු 
                                            </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                            <input 
                                                className="form-check-input" type="radio" name="firstword" id="firstword18" value="firstword18" required
                                                onChange={(e)=>setFirstWord(e.target.value)}
                                            />
                                            <label className="form-check-label" for="firstword18">
                                            මාස 18ට පෙර
                                            </label>
                                    </div>
                                </div>
                                </div>
                                </span> 
                                </div>
                            </div>
                            
                        </div>
                    </div>
               
            </form>       

            <div className="col-xl-6 mb-4">
             
            
            </div>
            <div>
              <input type="submit" value="SUBMIT ANSWERS " className="form-submit-btn" />
            </div>
          </div>
    </div>
    )      

    }
export default InAnswers