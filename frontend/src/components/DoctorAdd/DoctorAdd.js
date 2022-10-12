import React,{useState} from "react";
import { useHistory} from 'react-router-dom';
import { OutlinedInput } from "@material-ui/core";
import Chip from '@material-ui/core/Chip';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

import 'date-fns';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import './DoctorAdd.css';
import axios from "axios";


function DoctorAdd(){

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [specialty,setSpecialty]=useState([]);
    const [phoneNumber,setPhoneNumber]=useState();
    const [hospitals,setHospitals]=useState([]);
    const [previewSource, setPreviewSource] = useState();
    const history =useHistory();

    const [fileInputState, setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState();


    //handling the image uploading
    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(event.target.value);
    };

    //display a preview of uploaded image
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }

    
    async function add(event){
        event.preventDefault();
        const config={
             headers:{
                "content-Type":"application/json"
            }
        };

        let imgUrl

        if(previewSource){
            const formData = new FormData();
            formData.append("file", selectedFile)
            formData.append("upload_preset", "doctor")

            try {
                await axios.post("gs://test-e359c.appspot.com/doctor", formData).then((res) =>{
                    imgUrl = res.data.secure_url
                })
            } catch (error) {
                alert("Image Upload Failed")
            }
        }

            const newDoctor= { name, phoneNumber, email, specialty, hospitals, imgUrl }
            
            try{
            
                await axios.post("http://localhost:8070/doctor",newDoctor,config);
                alert("Doctor added successfully")
                history.push(`/doctor/all`)
            } catch(error){
                if(error.response.status === 409){
                    alert("Doctor with this email already exists")
                }
                
                alert("Registration failed!");
                
            }
       
    }


    const specialties = [
        'ළමා මනෝචිකිත්සක', 'ළමා ස්නායු විශේෂඥ්‍ය', 'සංවර්ධන ළමා රෝග විශේෂඥ්‍ය', 'ළමා සායනික මනෝවිද්‍යාඥ්‍ය', 'භෞත චිකිත්සක','කථන චිකිත්සක'
    ]

    
    const handleFieldChange = (event) => {
        setSpecialty(event.target.value);
    };
 
    return(   
        <div className="container" align="center">
            <div className="row">
                <div className="col-12">
                    <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                        <h2>Add New Doctor</h2>
                    </div>
                </div>
            </div>
            <form  onSubmit={add} className="doctorAdd" >
                <div className="row"> 
                    
                    <div className="col-8">
                        <div className="row">

                            <br/>

                            <div className="col-xl-6 mb-3">
                                <OutlinedInput
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="නම *"
                                    onChange={(e) => setName (e.target.value)}
                                    required fullWidth
                                    inputProps={{style: {padding: 12}}}
                                />
                            </div>
                            <div className="col-xl-6 mb-3">
                                <OutlinedInput
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="ඊ තැපෑල *" 
                                    onChange={(e) => setEmail(e.target.value)}
                                    required fullWidth
                                    inputProps={{style: {padding: 12} } }
                                />
                            </div>
                
                            <br/>
                                      
                
                        
                            <br/>
                
                            <div className="col-xl-6 mb-3">
                                <InputLabel id="demo-mutiple-chip-label">වෛද්‍ය විශේෂතාවය * </InputLabel>
                                    <Select
                                        id="demo-mutiple-chip"
                                        multiple fullWidth
                                        value={specialty}
                                        onChange={handleFieldChange}
                                        input={<Input id="select-multiple-chip"/>}
                                        renderValue={(selected) => (
                                            <div >
                                                {selected.map((value) => (
                                                    <Chip key={value} label={value}  />
                                                ))}
                                            </div>
                                        )}
                                    >
                                    {specialties.map((specialties) => (
                                        <MenuItem key={specialties} value={specialties} >
                                            {specialties}
                                        </MenuItem>
                                    ))}
                                    </Select>
                            </div>

                            <br/>
                
                            <div className="col-xl-6 mb-3">
                                <OutlinedInput
                                    type="tel"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    placeholder="දුරකතන අංකය *"
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required fullWidth
                                    maxLength="10"
                                    inputProps={{style: {padding: 12}, pattern: "[0-9]{10}"}}
                                />
                            </div>

                            <div className="col-xl-6 mb-3">
                                <OutlinedInput
                                    type="text"
                                    name="hospital"
                                    id="hospital"
                                    placeholder="හමුවිය හැකි රෝහල් * " 
                                    onChange={(e) => setHospitals(e.target.value)}
                                    required fullWidth
                                    inputProps={{style: {padding: 12} } }
                                />
                            </div>

                            <br/>
                    
                        </div>
                    </div>
                    <div className="col-4">

                            {previewSource ? 
                                <img src={previewSource} alt="preview" className="previewImg"/>
                            :
                                <img src="/images/avatar.jpg" className="previewImg" alt="profile pic"/>
                            }
                            <div className="form-group">
                                <label htmlFor="profilepic">
                                    <input
                                        style={{ display: 'none' }}
                                        id="profilepic"
                                        name="profilepic"
                                        type="file"
                                        onChange={handleFileInputChange}
                                        value={fileInputState}
                                    />

                                    <Button style={{backgroundColor:'#90DCF3'}} variant="contained" component="span">
                                        <AddAPhotoIcon/> &nbsp; Upload Doctor Image
                                    </Button>
                                </label>
                            </div>
                    </div>
                            
                    <div className="col-xl-12">
                        <input type="submit" className="addDoctorBtn" value="Add"  /> 
                    </div>
               </div> 
            </form>
        </div>

    );
}; 
export default DoctorAdd;