import React from 'react'
import './Footer.css'
import { blue} from '@material-ui/core/colors';
import {Link,useHistory } from 'react-router-dom'; 
import { Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import RateReviewIcon from '@material-ui/icons/RateReview';

function Footer() {
    const history=useHistory();
    // function Feedback(){
    //     history.push("https://www.sliit.lk/service-feedback-form/")
    // }
    return (
        <footer className="px-5">
            <div className="">
                <div className="row">
                    <div className="col-xl-1" align="center">
                        <br/>
                        <img src="/images/Logo.png" className="logoFooter" alt="logo"/>
                    </div>
                    <div className="col-xl-3"style={{ paddingLeft: 70 }}>
                        <br/>
                        <p>
                        What Is Autism?
                        </p>
                        <p>
                        About Us
                        </p>
                        <p>
                        News
                        </p>
                    </div>
                    <div className="col-xl-4" align="center">
                        <h3>Need Personalized Support?</h3>
                        <ul className="list-group">
                        <p>
                        Our Autism Response Team (ART) is specially trained to connect people with autism, their families, and caretakers to information, tools, and resources.
                        </p>
                        </ul>
                    </div>
                    
                    <div className="col-xl-3"align="center">
                        <br></br>
                        <h5>   Provide Feedback to Neerogi </h5>    
                        <br></br>
                        <Button variant="contained" style={{backgroundColor:blue[500],color:'white'}} endIcon={<RateReviewIcon/>}
                                href="https://www.sliit.lk/service-feedback-form/" >
                            Feedback
                        </Button> 
                        <br/> <br/>
                        <span>
                            <img src="https://img.icons8.com/color/48/000000/facebook-circled--v4.png" alt="facebook"/>
                            <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt="instagram"/>
                            <img src="https://img.icons8.com/color/48/000000/twitter-circled--v2.png" alt="twitter"/>
                        </span>
                    </div>
                </div>
                <div className="col-xl-12 text-center "> 
                    <p className ="mb-0"> Neerogi © 2021 - All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
