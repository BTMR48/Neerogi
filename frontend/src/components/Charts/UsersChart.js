
import { useState,React,useEffect} from 'react';
import axios from 'axios';
import './UserChart.css'
import {Line} from 'react-chartjs-2';
import{
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
    }from 'chart.js';
import { borderColor } from '@mui/system';
    
    ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement)

function UsersChart() {
    const[users,setUsers]=useState(""); 

    useEffect(() => { 
        async function getAllUsers() {
          axios.get(`http://localhost:8070/user/`).then((res) => {
            setUsers(res.data)  
            console.log(users)
          }).catch((error) => {
            alert("Failed to fetch users")
          })
        }
        getAllUsers();

       
      },[])

      const userDetails={

        labels:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]  ,
        datasets:[
          {
              label:"Users",
              backgroundColor:"#189AB4",
              data:users,
              borderColor:'#05445E',
              pointBorderColor:'#05445E'
          }
        ]
      };
      const options={

      };
  
    return (
    <div className="container" align="center" >
        <div className="row">
            <div className="col-12">
                <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                    <h2>&nbsp;User Registration Report</h2>
                </div>
            </div>
        </div>
        <br></br>
        <div className="create_product">
            {console.log(userDetails)}
             <Line options={options}
             data={userDetails}/> 
        </div>                    
    </div>


        
    )
}

export default UsersChart
