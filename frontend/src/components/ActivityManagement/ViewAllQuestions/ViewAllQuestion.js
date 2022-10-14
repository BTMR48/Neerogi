import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import './ViewAllQuestion.css'
import axios from 'axios'
import { red,blue } from '@mui/material/colors';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';


function ViewAllQuestions(){
    const [questions, setQuestion] = useState([])
    const history = useHistory()
    const location = useLocation()
    const [user, setUser] =  useState("");

    useEffect(() =>{
        async function getViewAllQuestions(){
            axios.get('http://localhost:8070/activityQuestions/getAllQuestions').then((res) => {
                setQuestion(res.data)
            }).catch((error) => {
                alert("FAiled to fetch all Questions")
            })
        }
        getViewAllQuestions()
    },[location])

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

    return(
        <div>
            <div className='container' align="center">
                <div className='row'>
                    <div className='col-4'>
                    <div className='pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between'>
                        <h2>Questions</h2>
                    </div>
                    </div>
                    <div className='col-3'>
                    </div>
                    <div className='col-5'>
                        <div className='px-3 search' align="right">
                        <input
                            type="text"
                            name='search'
                            id='search'
                            placeholder='Search'
                            onChange={handleSearch}
                            required
                            />
                        </div>
                    </div>
                </div>
                    <Carousel wipeable={true}  responsive={responsive} autoPlay={false} autoPlaySpeed={2000} infinite={true} className="px-5 py-5 mb-2"> 
                        {questions.map((Questions,key) => (
                            <div key={key}>
                                <div className='supervisorsCard'>
                                    <h6>{Questions.questionNum}</h6>
                                    &nbsp;&nbsp;&nbsp;
                                    <h6>{Questions.question}</h6>
                                        <div className='supervisorsImg'>
                                            {Questions.imageOne === ""?
                                            <img src="/images/avatar.jpg" className="supervisorImgHeight" alt="supervisor"/>
                                            :
                                            <img src={`${Questions.imageOne}`} className="supervisorImgHeight" alt="supervisor"/>
                                            }
                                            &nbsp;&nbsp;&nbsp;
                                            {Questions.imageTwo === ""?
                                            <img src="/images/avatar.jpg" className="supervisorImgHeight" alt="supervisor"/>
                                            :
                                            <img src={`${Questions.imageTwo}`} className="supervisorImgHeight" alt="supervisor"/>
                                            }
                                            &nbsp;&nbsp;&nbsp;
                                            {Questions.imageTwo === ""?
                                            <img src="/images/avatar.jpg" className="supervisorImgHeight" alt="supervisor"/>
                                            :
                                            <img src={`${Questions.imageThree}`} className="supervisorImgHeight" alt="supervisor"/>
                                            }
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            {Questions.voiceRecord  === ""?
                                            <img src="/images/avatar.jpg" className="supervisorImgHeight" alt="supervisor"/>
                                            :
                                            <img src={`${Questions.voiceRecord }`} className="supervisorImgHeight" alt="supervisor"/>
                                            }
                                        </div>
                                </div>
                            </div>
                        ))}
                    </Carousel> 
                </div>
            </div>
    )
}

export default ViewAllQuestions