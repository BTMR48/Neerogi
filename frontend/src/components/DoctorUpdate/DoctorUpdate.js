import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import Chip from '@material-ui/core/Chip';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import './DoctorUpdate.css';

function DoctorUpdate(props) {
    
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [specialty,setSpecialty]=useState([]);
    const [phoneNumber,setPhoneNumber]=useState();
    const [hospitals,setHospitals]=useState([]);
    const [doctorImg, setDoctorImg] = useState("");
    const [fileInputState, setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [previewSource, setPreviewSource] = useState();

    const history = useHistory();
    
    //fetching doctor data
    useEffect(()=>{
        async function fetchDoctor(){
            await axios.get(`http://localhost:8070/doctor/${props.match.params.id}`).then((res)=>{
                setName(res.data.name)
                setEmail(res.data.email)
                setSpecialty(res.data.specialty)
                setPhoneNumber(res.data.phoneNumber)
                setHospitals(res.data.hospitals)
                setDoctorImg(res.data.imgUrl)
            }).catch((error)=>{
                alert("Failed to fetch doctor data")
            })
        }
        fetchDoctor()
    },[props]);

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

    //update the supervisor
    async function Update(event){

        event.preventDefault();

        let imgUrl

        if(previewSource){
            const formData = new FormData();
            formData.append("file", selectedFile) 
            formData.append("upload_preset", "doctor")

            try {
                await axios.post("https://api.cloudinary.com/v1_1/tbrmy/image/upload", formData).then((res) =>{
                    imgUrl = res.data.secure_url
                })
            } catch (error) {
                alert("Image Upload Failed")
            }
        }

        const updateDoctor = {name, phoneNumber, email, specialty, hospitals, imgUrl}
        //header with authorization token
        const config = {
            headers: {
                "content-Type": "application/json",
            }
        };

        try {
            await axios.put(`http://localhost:8070/doctor/${props.match.params.id}`,updateDoctor, config);
                alert("Updated Successfully")
                history.push(`/doctor/all`)
        } catch (error) {
            {
                alert("Updating Failed")
            }
        }    
    }

    const specialties = [
        'ළමා මනෝචිකිත්සක', 'ළමා ස්නායු විශේෂඥ්‍ය', 'සංවර්ධන ළමා රෝග විශේෂඥ්‍ය', 'ළමා සායනික මනෝවිද්‍යාඥ්‍ය', 'භෞත චිකිත්සක','කථන චිකිත්සක'
    ]

    const handleFieldsChange = (event) => {
        setSpecialty(event.target.value);
    };

    return(   
        <div className="container" align="center">
            <div className="row">
                <div className="col-12">
                    <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                        <h2>Update Doctor</h2>
                    </div>
                </div>
            </div>
            <form  onSubmit={Update} encType="multipart/form-data" className="doctorAdd" >
                <div className="row"> 
                    
                    <div className="col-8">
                        <div className="row">

                            <br/>

                            <div className="col-xl-6 mb-3">
                                <OutlinedInput
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name}
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
                                    value={email}
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
                                        onChange={handleFieldsChange}
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
                                    value={phoneNumber}
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
                                    value={hospitals}
                                    placeholder="හමුවිය හැකි රෝහල් * " 
                                    onChange={(e) => setHospitals(e.target.value)}
                                    required fullWidth
                                    inputProps={{style: {padding: 12} } }
                                />
                            </div>

                            <br/>
                    
                        </div>
                    </div>
                

                            
                            <div className="col-4 d-flex justify-content-center">
                            <div>
                                { previewSource  ?
                                    <img src={previewSource} alt="preview" className="previewImg"/>
                                : doctorImg === ""? 
                                    <img src="/images/avatar.jpg" alt="preview" className="previewImg"/>
                                :
                                    <img src={`${doctorImg}`} className="previewImg" alt="profile pic"/>
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

                                        <Button color="primary" variant="contained" component="span">
                                            <AddAPhotoIcon/> &nbsp; Upload Doctor Image
                                        </Button>
                                    </label>
                                </div>
                            </div>
                        </div>
                    
                            
                    <div className="col-xl-12">
                        <input type="submit" className="addDoctorBtn" value="Update"  /> 
                    </div>
               </div> 
            </form>
        </div>

    );
}

export default DoctorUpdate
