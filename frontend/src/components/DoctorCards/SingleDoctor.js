import React, {useState, useEffect} from 'react';
// import { useHistory } from 'react-router-dom';
import OutlinedInput from "@material-ui/core/OutlinedInput";

import axios from 'axios';
import './AllDoctors.css';

function SingleDoctor(props) {
    
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [specialty,setSpecialty]=useState([]);
    const [phoneNumber,setPhoneNumber]=useState();
    const [hospitals,setHospitals]=useState([]);
    const [doctorImg, setDoctorImg] = useState("");
    const [previewSource, setPreviewSource] = useState();

    // const history = useHistory();
    
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

    return(   
        <div className="container" align="center">
            <div className="row">
                <div className="col-12">
                    <div >
                        <h4><b>වෛද්‍ය.{name}</b></h4>
                    </div>
                </div>
            </div>
            <br/>
            <form  encType="multipart/form-data" className="doctorAdd" >
                <div className="row"> 
                    
                    <div className="col-8">
                        <div className="row">

                            <br/>

                            <div className="col-xl-6 mb-3">
                                <label>විද්යුත් තැපෑල -</label>
                            </div>
                            <div className="col-xl-6 mb-3">
                                <OutlinedInput
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    required fullWidth
                                    inputProps={{style: {padding: 12} } }
                                />
                            </div>
                
                            <br/>
                                      
                            <br/>
                
                            <div className="col-xl-6 mb-3">
                                <label >වෛද්‍ය විශේෂතාවය -</label>
                                    
                            </div>
                            <div className="col-xl-6 mb-3">
                                <OutlinedInput
                                    type="specialty"
                                    name="specialty"
                                    id="specialty"
                                    value={specialty}
                                    required fullWidth
                                    inputProps={{style: {padding: 12} } }
                                />
                            </div>

                            <br/>

                            <div className="col-xl-6 mb-3">
                                <label >දුරකථන අංකය -</label>                                   
                            </div>

                            <div className="col-xl-6 mb-3">
                                <OutlinedInput
                                    type="tel"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    value={phoneNumber}
                                    placeholder="දුරකතන අංකය *"
                                    required fullWidth
                                    maxLength="10"
                                    inputProps={{style: {padding: 12}, pattern: "[0-9]{10}"}}
                                />
                            </div>

                            <div className="col-xl-6 mb-3">
                                <label >රෝහල -</label>                                   
                            </div>

                            <div className="col-xl-6 mb-3">
                                <OutlinedInput
                                    type="text"
                                    name="hospital"
                                    id="hospital"
                                    value={hospitals}
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

                            </div>
                        </div>
               </div> 
            </form>
        </div>

    );
}

export default SingleDoctor
