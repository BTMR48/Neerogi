import { useState } from 'react';
import axios from 'axios';
import './AddActivity.css'
import Button from '@material-ui/core/Button';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { TextField } from '@material-ui/core'

function AddActivity(){
    const [activityId, setActivityId]=useState(""); 
    const [activityCode, setActivityCode]=useState(""); 
    const [activityName, setActivityName]=useState(""); 

    const myStyle={
        backgroundImage: 
        "url('/images/backgroundimg.jpg')",
          height:'120vh',
         marginBottom:'-120px',
        // fontSize:'50px',
        backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
    };


    async function add(event){
        event.preventDefault();
        const config = {
            headers: {
                "content-Type": "application/json"
            }
        };

        const newActivity = {activityId, activityCode, activityName}

        try{
            await axios.post("http://localhost:8070/activity/newActivity", newActivity, config)
            alert("Activity Added Successfully")  
            event.target.reset(); 
        }catch (error) {         
            alert("Activity can't be Added");
        }
    }

    return(
        <div style={myStyle}>
            <br></br>
            <br></br>
            <div className="container" align="center" >
                <div className="row">
                    <div className="col-12">
                        <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                            <h2>&nbsp;Add New Activity</h2>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="create_progress">
                    <form onSubmit={add} className="addProgress">
                        <div className="row">
                            <div className="col-8">
                                <div className="row">
                                    <div className="col-md-8 mb-4">
                                        <div className="form-name">
                                            <OutlinedInput
                                                type="text" id="id" placeholder="Activity ID" 
                                                required fullWidth
                                                onChange={(e)=>setActivityId(e.target.value)}
                                                inputProps={{style: {padding: 12}}} 
                                            />
                                        </div>
                                    </div>
                                    <div> 
                                        <div className="col-md-8 mb-4">
                                            <div className="form-date">
                                                <OutlinedInput 
                                                    type="text" id="code" placeholder="Activity Code" required fullWidth
                                                    onChange={(e)=>setActivityCode(e.target.value)}
                                                    inputProps={{style: {padding: 12}}}
                                                />
                                            </div>
                                        </div>
                                    </div>                       
                                    <div className="col-md-10 mb-4">
                                        <div className="form-description">
                                            <OutlinedInput 
                                                    type="text" id="name" placeholder="Activity Name" required fullWidth
                                                    onChange={(e)=>setActivityName(e.target.value)}
                                                    inputProps={{style: {padding: 12}}}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 mb-4">
                                        <div className="form-group">
                                        <div>
                                            {/* <label><h6>Type</h6></label> &nbsp; */}
                                        </div>
                                            <div className="form-check form-check-inline">
                                                    {/* <input 
                                                        className="form-check-input" type="radio" name="Type" id="PUBLISH" value="PUBLISH" required
                                                        onChange={(e)=>setType(e.target.value)}
                                                    />
                                                    <label className="form-check-label" for="PUBLISH">
                                                    PUBLISH
                                                    </label> */}
                                            </div>
                                            <div className="form-check form-check-inline">
                                                    {/* <input 
                                                        className="form-check-input" type="radio" name="Type" id="UNPUBLISH" value="UNPUBLISH" required
                                                        onChange={(e)=>setType(e.target.value)}
                                                    />
                                                    <label className="form-check-label" for="UNPUBLISH">
                                                    UNPUBLISH
                                                    </label> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 d-flex justify-content-center">
                                <div>
                                    {/* {previewSource ? 
                                        <img src={previewSource} alt="preview" className="previewImgProgress"/>
                                    :
                                        <img src="/images/progress.png" className="previewImgProgress" alt="progress pic"/>
                                    } */}
                                    <div className="form-group">
                                        {/* <label htmlFor="profilepic">
                                            <input
                                                style={{ display: 'none' }}
                                                id="profilepic"
                                                name="profilepic"
                                                type="file"
                                                onChange={handleFileInputChange}
                                                value={fileInputState}
                                            />

                                            <Button color="primary" variant="contained" component="span">
                                                <PictureAsPdfIcon/> &nbsp; Upload Pdf
                                            </Button>
                                        </label> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input className="form-submit-btn" type="submit" value="Add Activity" />
                                </div>
                            </div>
                        </div>
                    </form>            
                </div>                    
        </div>
    </div>  
    )
}

export default AddActivity