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
  const [isAdmin,setIsAdmin]= useState(false);
  const [isUser,setIsUser]= useState(false)

  useEffect(() => { 
    
    async function getAllVideos() {
  
      if(localStorage.getItem("adminAuthToken")){
        setIsAdmin(true)
      }
  
      if(localStorage.getItem("userAuthToken")){
        setIsUser(true)
      }
      
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

  const myStyle={
    
    backgroundImage: 
    "url('/images/backgroundimg.jpg')",
     height:'100vh',
     marginBottom:'-120px',
    // fontSize:'50px',
    backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
};

  const displayContent = () => {
    return (
      <div className="container" style={{paddingTop:35,paddingLeft:65}}>
        <div className="row" style={{textAlign: "center"}}>
        {isUser &&
            <div style={{padding:15,textTransform: "uppercase",color: "#4CAF50"}}>
              <div>
                  <h2>නරඹන්න</h2>
              </div>
            </div>
        }
        </div>
        <div className="row">
              <div className="col-7">
              </div>
            <div className="col-5" style={{padding:25,paddingBottom:55}}>
            {isUser ?
              <div className="px-3 search">
                <input 
                  type="text" 
                  name="search" 
                  id="search"
                  placeholder="සොයන්න" 
                  onChange={handleSearchAll} 
                  required 
                />
              </div>
             : <div className="px-3 search" >
             <input 
               type="text" 
               name="search" 
               id="search"
               placeholder="Search" 
               onChange={handleSearchAll} 
               required 
             />
             </div>}
        </div>
      </div>
      <div className="productGrid"  >
      {isAdmin && 
          <Button  className="mx-2 productBtn" style={{backgroundColor:blue[400],color:'white'}} onClick={()=>addVideo()}>
          Add Video <AddIcon/>
          </Button>  
        }
        {videos.map((Video,key)=>( 
              <div key={key}> 
                  <div className="productCard" >
                      <div className="imgBx">
                          <img  src={`${Video.imgUrl}`} alt="Video" className="itemProduct" onClick={() => view(Video.videoUrl)}/>
                      </div>
                      <div className="p-3">
                          <h7>{Video.heading}</h7>
                          <h6>{Video.date}</h6>
                          {isAdmin &&
                          <div align="center">
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
                        }
                      </div>
                  </div>
              </div>
        ))} 
      </div>
    </div>
  )      
  }

  return(
    <div>
      {isAdmin === false ?
      <div style={myStyle}>
      {displayContent()}
      </div>
      :<div>
      {displayContent()}
      </div>}
    </div>
  )
   
}

export default VideoItem
