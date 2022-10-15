import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import './ViewAllQuestion.css'
import axios from 'axios'
import { red,blue} from '@mui/material/colors';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import playButton from '@mui/icons-material/PlayArrowRounded'
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import AudioPlayer from './AudioPlayer'
import ReactAudioPlayer from 'react-audio-player';

function ViewAllQuestions(){
    const [isAdmin,setIsAdmin]= useState(false)
    const [questions, setQuestion] = useState([])
    const history = useHistory()
    const location = useLocation()
    const [user, setUser] =  useState("");

    useEffect(() =>{

        if(localStorage.getItem("user")){
            setUser(JSON.parse(localStorage.getItem('user')))
        }
        if(localStorage.getItem("adminAuthToken")){
            setIsAdmin(true)
        }

        async function getViewAllQuestions(){
            axios.get('http://localhost:8070/activityQuestions/getAllQuestions').then((res) => {
                console.log(questions)
                setQuestion(res.data)
                
            }).catch((error) => {
                alert("FAiled to fetch all Questions")
            })
        }
        getViewAllQuestions()
    },[location])

    
  async function deleteQuestion(id){        
    await axios.delete(`http://localhost:8070/activityQuestions/deleteQuestion/${id}`).then(() => {
        alert("Question deleted successfully")
        history.push(`/admin/ViewAllQuestions`)
    }).catch((error) => {
        alert(`Failed to delete the Question\n${error.message}`)
    }) 
  }

    function filterContent(data, searchTerm){
        const result = data.filter((Question) =>
        Question.questionNum.toLowerCase().includes(searchTerm) ||
        Question.question.toLowerCase().includes(searchTerm)
        )
        setQuestion(result)
    }

    function handleSearch(event){
      const searchTerm = event.currentTarget.value
      axios.get(`http://localhost:8070/activityQuestions/getAllQuestions`).then((res) => {
        filterContent(res.data, searchTerm.toLowerCase())
      }).catch((error) => {
        alert("Failed to fetch Question")
      })
    }

    function handleSearchAll(event){
        const searchTerm = event.currentTarget.value
        axios.get(`http://localhost:8070/activityQuestions`).then((res) => {
          filterContent(res.data, searchTerm.toLowerCase())
        }).catch((error) => {
          alert("Admin Failed to fetch Question")
        })
      }

      function update(id){
        history.push(`/admin/ViewAllQuestions/updateQuestion/${id}`)
      }

      function addQuestions(){
        history.push(`/evolution/addProgress`)
      }

      function next(){
        history.push(`/evolution/addProgress`)
      }

      function play(){
        history.push(`/evolution/addProgress`)
      }

    return(
        <div className="container">
          <div className="row">
              <div className="col-4">
                <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                    <h2>Questions </h2>
                </div>
              </div>
              <div className="col-3">
              </div>
              <div className="col-5">
              
              {isAdmin === true ?
                <div className="px-3 search" align="right">
                  <input 
                    type="text" 
                    name="search" 
                    id="search"
                    placeholder="Search" 
                    onChange={handleSearchAll} 
                    required 
                  />
                </div>
                :
                <div className="px-3 search" align="right">
                    <input 
                      type="text" 
                      name="search" 
                      id="search"
                      placeholder="Search" 
                      onChange={handleSearch} 
                      required 
                    />
                </div> 
              }  
          </div>
        </div>
        <div className="questionGrid"  > 
          {isAdmin && 
            <Button  className="mx-2 progressBtn" style={{backgroundColor:blue[400],color:'white'}} onClick={()=>addQuestions()}>
            Add Question <AddIcon/>
            </Button>  
          }
          {questions.map((Question,key)=>( 
                <div key={key}> 
                    <div className="viewAllQuestionCard"  align ="center">
                        
                        <div className="p-3">
                            <h6>{Question.questionNum}.&nbsp;{Question.question}</h6>
                            <br></br>
                            <br></br>
                              <div className='questionsImg'>
                                  {Question.imageOne === ""?
                                  <img src="/images/avatar.jpg" className="questionImgHeight" alt="question"/>
                                  :
                                  <img src={`${Question.imageOne}`} className="questionImgHeight" alt="question"/>
                                  }
                                  &nbsp;&nbsp;&nbsp;
                                  {Question.imageTwo === ""?
                                  <img src="/images/avatar.jpg" className="questionImgHeight" alt="question"/>
                                  :
                                  <img src={`${Question.imageTwo}`} className="questionImgHeight" alt="question"/>
                                  }
                                  &nbsp;&nbsp;&nbsp;
                                  {Question.imageThree === ""?
                                  <img src="/images/avatar.jpg" className="questionImgHeight" alt="question"/>
                                  :
                                  <img src={`${Question.imageThree}`} className="questionImgHeight" alt="question"/>
                                  }
                                  <br></br>
                                  <br></br>
                                  <br></br>

                                  {/* <div>
                                      <ReactAudioPlayer ref="audio_tag" src="./assets/sound.ogg" controls autoPlay/>
                                  </div> */}
                                  {Question.voiceRecord  === ""?
                                  <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />
                                  :
                                  <ReactAudioPlayer src={`${Question.voiceRecord}`}/>
                                  }
                                  
                              </div>
                              <ReactAudioPlayer src="./audio.ogg" autoPlay controls />
                              {/* {isAdmin &&  */}
                                <div align="right">
                                  <div style={{verticalAlign:'middle'}}>
                                    <IconButton onClick={() => deleteQuestion(Question.id)}>
                                      <DeleteIcon style={{ color: red[500] }} ></DeleteIcon>
                                    </IconButton> 
                                    <span> 
                                      <button className="mx-2 progressBtn" style={{backgroundColor:red[400]}} onClick={()=>update(Question.id)}>
                                          Update <EditIcon/>
                                      </button>                                  </span>       
                                  </div>
                                </div>
                              {/* } */}
                        </div>
                    </div>
                </div>
          ))} 
        </div>
        <div align="right">
          <span> 
          <button className="nextBtn" style={{backgroundColor:blue[400]}} onClick={()=>next()}> NEXT</button>
          </span> 
        </div>
      </div>
    )
}

export default ViewAllQuestions