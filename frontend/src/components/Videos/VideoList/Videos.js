import React,{useEffect, useState} from 'react'
import { useHistory,useLocation } from 'react-router';
import './Videos.css'
import axios from 'axios'
import { orange,red,blue,green } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';


function VideoItem() {

  const [videos, setVideos] = useState([])
  const history = useHistory()

  useEffect(() => { 
    
    async function getAllVideos() {
      axios.get(`http://localhost:8070/video`).then((res) => {
        setVideos(res.data)  
      }).catch((error) => {
        alert("Failed to fetch Videos")
      })
    }
    getAllVideos();
  },[])
  
  function filterContent(data, searchTerm){
    const result = data.filter((video) => 
    video.heading.includes(searchTerm) 
    )
    setVideos(result)
  }

  function handleSearchAll(event){
    const searchTerm = event.currentTarget.value
    axios.get(`http://localhost:8070/video`).then((res) => {
      filterContent(res.data, searchTerm.toLowerCase())
    }).catch((error) => {
      alert("Admin Failed to fetch Videos")
    })
  }
  function view(content){
    window.open(content);
  }

  async function deleteVideo(id){
    if(window.confirm("Are you sure to delete this Video") == true){
      await axios.delete(`http://localhost:8070/video/delete/${id}`).then(()=>{
        alert("deleting Video is successful");
        setVideos( videos.filter(element => element._id !== id))
      }).catch((error)=>{
          alert("deleting video failed");
      })  
    }
  
}

function update(id){
    history.push(`/videos/update/${id}`)
}
  
  function addVideo(){
   history.push(`/videos/add`)
  }

    return (
        <div className="container">
          <div className="row">
              <div className="col-4">
                <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                    <h2>Videos</h2>
                </div>
              </div>
              <div className="col-3">
              </div>
              <div className="col-5">
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
               
          </div>
        </div>
        <div className="productGrid"  > 
            <Button  className="mx-2 productBtn" style={{backgroundColor:blue[400],color:'white'}} onClick={()=>addVideo()}>
            Add Video <AddIcon/>
            </Button>  
          
          {videos.map((Video,key)=>( 
                <div key={key}> 
                    <div className="productCard" >
                        <div className="imgBx">
                            <img  src={`${Video.imgUrl}`} alt="Video" className="itemProduct"/>
                        </div>
                        <div className="p-3">
                            <h7>{Video.heading}</h7>{console.log(Video)}
                            <h6>{Video.date}</h6>
                            <div align="center">
                              <span> 
                                  <IconButton onClick={() => view(Video.videoUrl)}>
                                        <VisibilityIcon style={{ color: "#008B8B" }} ></VisibilityIcon>
                                    </IconButton>
                              </span>
                              <span> 
                                  <IconButton onClick={() => update(Video.id)}>
                                        <EditIcon style={{ color: "#008B8B" }} ></EditIcon>
                                    </IconButton>
                              </span> 
                              <span> 
                                  <IconButton onClick={() => deleteVideo(Video.id)}>
                                        <DeleteIcon style={{ color: "#008B8B" }} ></DeleteIcon>
                                    </IconButton>
                              </span>  
                            </div>
                        </div>
                    </div>
                </div>
          ))} 
        </div>
      </div>
    )      
}

export default VideoItem
