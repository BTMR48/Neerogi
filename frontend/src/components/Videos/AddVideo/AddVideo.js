import { useState,React } from 'react';
import axios from 'axios';
import './AddVideo.css'
import Button from "@material-ui/core/Button";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { TextField } from '@material-ui/core';


function AddVideo() {
    const[heading,setName]=useState(""); 
  const [previewSourceImg, setPreviewSourceImg] = useState();
    const [selectedFileImg, setSelectedFileImg] = useState();
    const [fileInputStateImg, setFileInputStateImg] = useState('');
    const [previewSourceVideo, setPreviewSourceVideo] = useState();
    const [selectedFileVideo, setSelectedFileVideo] = useState();
    const [fileInputStateVideo, setFileInputStateVideo] = useState('');


    //handling the image uploading
    const handleFileInputChangeImg = (event) => {
        const fileImg = event.target.files[0];
        previewFileImg(fileImg);
        setSelectedFileImg(fileImg);
        console.log(fileImg)
        setFileInputStateImg(event.target.value);
    };

    //display a preview of uploaded Video
    const previewFileImg = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSourceImg(reader.result)
        }

    }

        //handling the Video uploading
        const handleFileInputChangeVideo = (event) => {
            const fileVideo = event.target.files[0];
            previewFileVideo(fileVideo);
            setSelectedFileVideo(fileVideo);
            console.log(fileVideo)
            setFileInputStateVideo(event.target.value);
        };
    
        //display a preview of uploaded Video
        const previewFileVideo = (file) => {
            const readerVideo = new FileReader();
            readerVideo.readAsDataURL(file)
            readerVideo.onloadend = () => {
                setPreviewSourceVideo(readerVideo.result)
            }
    
        }

    

    async function add(event){
        event.preventDefault();
        const config = {
            headers: {
                "content-Type": "application/json"
            }
        };
        
        let imgUrl
        let videoUrl
        

        if(previewSourceImg){
            const formData = new FormData();
            formData.append("file", selectedFileImg) 
            formData.append("upload_preset", "video_img")
           
            try {
                await axios.post("https://api.cloudinary.com/v1_1/tbrmy/image/upload", formData).then((res) =>{
                    imgUrl = res.data.secure_url
                })
            } catch (error) {
                alert(error)
            }
        }

        if(previewSourceVideo){
            const formDataVideo = new FormData();
            formDataVideo.append("file", selectedFileVideo) 
            formDataVideo.append("upload_preset", "video_video")
           
            try {
                await axios.post("https://api.cloudinary.com/v1_1/tbrmy/video/upload", formDataVideo).then((res) =>{
                    videoUrl = res.data.secure_url
                })
            } catch (error) {
                alert(error)
            }
        }

        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        const newVideo = {heading,date,imgUrl,videoUrl}
        
        try {
            await axios.post("http://localhost:8070/video/add", newVideo , config)
            alert("Video Added Successfully")  
            event.target.reset(); 
        }catch (error) {         
            alert("Video can't be Added");
        }

    }
  
    return (
    <div className="container" align="center" >
        <div className="row">
            <div className="col-12">
                <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                    <h2>&nbsp;Add New Video</h2>
                </div>
            </div>
        </div>
        <br></br>
        <div className="create_product">
            <form onSubmit={add} className="addProduct">
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-md-8 mb-4">
                                <div className="form-name">
                                    <OutlinedInput
                                        type="text" id="name" placeholder="Video heading" 
                                        required fullWidth
                                        onChange={(e)=>setName(e.target.value)}
                                        inputProps={{style: {padding: 12}}} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                  {  <div className="col-4 d-flex justify-content-center">
                        <div>
                            {previewSourceVideo ? 
                                <img src="/images/videodone.png" alt="preview" className="previewImgProduct"/>
                            :
                                <img src="/images/video.png" className="previewImgProduct" alt="Video pic"/>
                            }
                            <div className="form-group">
                                <label htmlFor="video">
                                    <input
                                        style={{ display: 'none' }}
                                        id="video"
                                        name="video"
                                        type="file"
                                        onChange={handleFileInputChangeVideo}
                                        value={fileInputStateVideo}
                                    />

                                    <Button color="primary" variant="contained" component="span">
                                        <AddAPhotoIcon/> &nbsp; Upload Video
                                    </Button>
                                </label>
                            </div>
                        </div>
                        </div>}
                    <div className="col-4 d-flex justify-content-center">
                        <div>
                            {previewSourceImg ? 
                                <img src={previewSourceImg} alt="preview" className="previewImgProduct"/>
                            :
                                <img src="/images/images.png" className="previewImgProduct" alt="Video thumbnail"/>
                            }
                            <div className="form-group">
                                <label htmlFor="img">
                                    <input
                                        style={{ display: 'none' }}
                                        id="img"
                                        name="img"
                                        type="file"
                                        onChange={handleFileInputChangeImg}
                                        value={fileInputStateImg}
                                    />

                                    <Button color="primary" variant="contained" component="span">
                                        <AddAPhotoIcon/> &nbsp; Upload Image
                                    </Button>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input className="form-submit-btn" type="submit" value="Add Video" />
                        </div>
                    </div>
                </div>
            </form>            
        </div>                    
    </div>


        
    )
}

export default AddVideo
