import React, {useEffect, useState} from 'react';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DownloadIcon from '@mui/icons-material/Download';
import { red, grey } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';

import generatePDF from '../../utils/reportGenerator'
import './alldoctors.css'



function AllDoctors () {

    const [doctors, setDoctors] = useState([]);
    // const [isAdmin,setIsAdmin]=useState(false)
    const history = useHistory()
   
 
    useEffect(() => {        
        // if(localStorage.getItem("adminAuthToken")){
        //     setIsAdmin(true)
        //   }else{
        //     setIsAdmin(false)
        //   }
          async function getDoctors() {
            axios.get(`http://localhost:8070/doctor`).then((res) => {
              setDoctors(res.data)  
            }).catch((error) => {
              alert("Failed to fetch Doctors")
            })
          }
          
        //   if(isAdmin === true){
              getDoctors()
            // }
            
    },[])
    // }, [isAdmin])

    async function onDelete(id) {
        const config = {
          headers: {
            "content-Type": "application/json"
          }
        };
        if (window.confirm('Are you sure you want to delete this doctor?')) {
            await axios.delete(`http://localhost:8070/doctor/${id}`, config).then(() => {
            alert("Doctor deleted successfully")
            setDoctors(doctors.filter(element => element.id !== id))
            }).catch((error) => {
            alert(`Failed to delete the Doctor`)
            })
          } 
          
    }

    function filterContent (data, searchTerm){
        
        const result = data.filter((doctor) =>
            doctor.name.toLowerCase().includes(searchTerm) ||
            doctor.specialty.toString().toLowerCase().includes(searchTerm)
        )
        setDoctors(result)
    }

    function handleSearch(event){
      const searchTerm = event.currentTarget.value
      axios.get(`http://localhost:8070/doctor`).then((res) => {
          filterContent(res.data, searchTerm.toLowerCase())
      }).catch((error)=>{
          alert("Failed to Search")
      })
    }

    function update(id) {
        history.push(`/doctor/update/${id}`)
      }

    function addDoctor(){
        history.push(`/doctor/add`)
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="pb-2 px-7 d-flex flex-wrap align-items-center justify-content-between" style={{align:'center'}}>
                     <h2>Doctor Details Management</h2>
                    </div>
                   
                </div>

                <br/>

                <div className="col-3">
                </div>

                <div className="col-5" >
                    <div className="px-3 search" align="right">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search Doctors"
                            onChange={handleSearch}
                            required
                        />
                    </div>
                </div>
            </div>
            {/* {isAdmin &&  */}
                <div >
                    
                    <button  className="addDoctorBtn" style={{backgroundColor:'#90DCF3'}} onClick={()=>addDoctor()}><AddIcon style={{ color: 'white', width: '20%' }} ></AddIcon> Add Doctor </button>
                    <button  className="reportBtn" style={{backgroundColor:'#90DCF3'}} onClick={()=>generatePDF(doctors)}><DownloadIcon style={{ color: 'white', width: '20%' }} ></DownloadIcon> Download Report </button>
                </div>
                
            {/* }  */}
            <br/>

            <div className="blue-table">
                <div className="blue-table, box-view-list">
                    <table>
                        <thead >
                            <tr>
                                <th style={{ textAlign: 'center' }}>Name</th>
                                <th style={{ textAlign: 'center' }}>Email</th>
                                <th style={{ textAlign: 'center' }}>Specialty</th>
                                <th style={{ textAlign: 'center' }}></th>
                            </tr>
                        </thead>
                        <tbody style={{ textAlign: 'center' }}>
                            {doctors.map((Doctor,key) => (
                            <tr key={key}>
                            
                                <td>
                                    {
                                      <h6>{"වෛද්‍ය." + Doctor.name}</h6>
                                    }
                                </td>
                            
                                <td>
                                    <h6>{Doctor.email}</h6>
                                </td>

                                {/* <td>
                                    <h6>{Doctor.specialty}</h6>
                                </td> */}

                                <td>
                                    {Doctor.specialty.map(specialty => <h6>{specialty}</h6>)}
                                </td>

                                <td>
                                    {/* { isAdmin && */}
                                        <div style={{verticalAlign:'middle'}}>
                                            <IconButton onClick={() => update(Doctor.id)}>
                                                <EditIcon style={{ color: grey[500] }} ></EditIcon>
                                            </IconButton>
                                            <IconButton onClick={() => onDelete(Doctor.id)}>
                                                <DeleteIcon style={{ color: red[500] }} ></DeleteIcon>
                                            </IconButton>
                                        </div>
                                    {/* } */}
                                </td>
                                
                            </tr> 
                            ))}
                            
                        </tbody>
                    </table>
                </div>
            </div>   
        </div>
    )
}

export default AllDoctors 