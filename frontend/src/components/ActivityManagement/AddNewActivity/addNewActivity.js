import React,{useEffect, useState} from 'react'
import { useHistory,useLocation } from 'react-router';
import './addNewActivity.css'
import axios from 'axios'
import { red,blue } from '@mui/material/colors';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';


function AddNewActivity() {
  const [isAdmin,setIsAdmin]= useState(false)
  const [activities, setActivities] = useState([])
  const history = useHistory()
  const location = useLocation()
  const [user, setUser] =  useState("");

  useEffect(() => { 
    if(localStorage.getItem("user")){
      setUser(JSON.parse(localStorage.getItem('user')))
    }
    if(localStorage.getItem("adminAuthToken")){
      setIsAdmin(true)
    }

    async function getAllActivities() {
      axios.get(`http://localhost:8070/activity/getAllActivities`).then((res) => {
        setActivities(res.data)  
      }).catch((error) => {
        alert("Failed to fetch Activities")
      })
    }

    if(isAdmin === true){
      getAllActivities();
    }else{
      getAllActivities();
    }
  }, [location,isAdmin])
  

  async function deleteQuestion(id){        
    await axios.delete(`http://localhost:8070/activity/deleteActivity/${id}`).then(() => {
        alert("Activity deleted successfully")
        history.push(`/admin/addNewActivity`)
    }).catch((error) => {
        alert(`Failed to delete the Activity\n${error.message}`)
    }) 
  }

  
  function addActivity(){
    history.push(`/admin/addActivity`)
  }

  function addQuestion(){
    history.push(`/admin/addNewQuestion`)
  }

    return (
        <div className="container">
          <div className="row">
              <div className="col-4">
                <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                    <h2>Activities </h2>
                </div>
              </div>
              <div className="col-3">
              </div>
              <div className="col-5">
          </div>
        </div>
        <div className="progressGrid" align="center" > 
          {isAdmin && 
            <Button  className="mx-2 progressBtn" style={{backgroundColor:blue[400],color:'white'}} onClick={()=>addActivity()}>
            Add New Activity <AddIcon/>
            </Button>  
          }
          {activities.map((Activity,key)=>( 
                <div key={key}> 
                    <div className="progressCard" align="center" >
                        <div className="p-3">
                            <h5>{Activity.activityName}</h5>
                            <div align="right">
                                  { isAdmin &&
                                        <div style={{verticalAlign:'middle'}}>
                                            <IconButton onClick={() => deleteQuestion(Activity.id)}>
                                                <DeleteIcon style={{ color: red[500] }} ></DeleteIcon>
                                            </IconButton>
                                            &nbsp;&nbsp;&nbsp;
                                             <button className="progressBtn" style={{backgroundColor:red[400]}} onClick={()=>addQuestion()}> Add ? </button>
                                        </div> 
                                  }
                            </div>
                        </div>
                    </div>
                </div>
          ))} 
        </div>
      </div>
    )      
}

export default AddNewActivity
