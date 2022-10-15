import { useState,React } from 'react';
import axios from 'axios';
import './UpdateArticle.css'
import Button from "@material-ui/core/Button";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { TextField } from '@material-ui/core';


function UpdateArticle(props) {
    const[heading,setName]=useState(""); 
    const[author,setAuthor]=useState(""); 
  const [previewSourceImg, setPreviewSourceImg] = useState();
    const [selectedFileImg, setSelectedFileImg] = useState();
    const [fileInputStateImg, setFileInputStateImg] = useState('');
    const [previewSourcePdf, setPreviewSourcePdf] = useState();
    const [selectedFilePdf, setSelectedFilePdf] = useState();
    const [fileInputStatePdf, setFileInputStatePdf] = useState('');


    //handling the image uploading
    const handleFileInputChangeImg = (event) => {
        const fileImg = event.target.files[0];
        previewFileImg(fileImg);
        setSelectedFileImg(fileImg);
        console.log(fileImg)
        setFileInputStateImg(event.target.value);
    };

    //display a preview of uploaded pdf
    const previewFileImg = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSourceImg(reader.result)
        }

    }

        //handling the pdf uploading
        const handleFileInputChangePdf = (event) => {
            const filePdf = event.target.files[0];
            previewFilePdf(filePdf);
            setSelectedFilePdf(filePdf);
            console.log(filePdf)
            setFileInputStatePdf(event.target.value);
        };
    
        //display a preview of uploaded pdf
        const previewFilePdf = (file) => {
            const readerPdf = new FileReader();
            readerPdf.readAsDataURL(file)
            readerPdf.onloadend = () => {
                setPreviewSourcePdf(readerPdf.result)
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
        let pdfUrl
        

        if(previewSourceImg){
            const formData = new FormData();
            formData.append("file", selectedFileImg) 
            formData.append("upload_preset", "article_img")
           
            try {
                await axios.post("https://api.cloudinary.com/v1_1/tbrmy/image/upload", formData).then((res) =>{
                    imgUrl = res.data.secure_url
                })
            } catch (error) {
                alert(error)
            }
        }

        if(previewSourcePdf){
            const formDataPdf = new FormData();
            formDataPdf.append("file", selectedFilePdf) 
            formDataPdf.append("upload_preset", "article_pdf")
           
            try {
                await axios.post("https://api.cloudinary.com/v1_1/tbrmy/image/upload", formDataPdf).then((res) =>{
                    pdfUrl = res.data.secure_url
                })
            } catch (error) {
                alert(error)
            }
        }

        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        const newPdf = {heading,author,date,imgUrl,pdfUrl}
        
        try {
            console.log()
            await axios.put(`http://localhost:8070/article/update/${props.match.params.id}`, newPdf , config)
            alert("Article Updated Successfully")  
            event.target.reset(); 
        }catch (error) {
            alert("Article can't be Updated");
        }

    }
  
    return (
    <div className="container" align="center" >
        <div className="row">
            <div className="col-12">
                <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                    <h2>&nbsp;Update Articles</h2>
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
                                        type="text" id="name" placeholder="Article heading" 
                                        required fullWidth
                                        onChange={(e)=>setName(e.target.value)}
                                        inputProps={{style: {padding: 12}}} 
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 mb-4">
                                <div className="form-name">
                                    <OutlinedInput
                                        type="text" id="author" placeholder="Article Author" 
                                        required fullWidth
                                        onChange={(e)=>setAuthor(e.target.value)}
                                        inputProps={{style: {padding: 12}}} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                  {  <div className="col-4 d-flex justify-content-center">
                        <div>
                            {previewSourcePdf ? 
                                <img src="/images/pdfdone.png" alt="preview" className="previewImgProduct"/>
                            :
                                <img src="/images/pdf.png" className="previewImgProduct" alt="Pdf pic"/>
                            }
                            <div className="form-group">
                                <label htmlFor="pdf">
                                    <input
                                        style={{ display: 'none' }}
                                        id="pdf"
                                        name="pdf"
                                        type="file"
                                        onChange={handleFileInputChangePdf}
                                        value={fileInputStatePdf}
                                    />

                                    <Button color="primary" variant="contained" component="span">
                                        <AddAPhotoIcon/> &nbsp; Upload Pdf
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
                                <img src="/images/images.png" className="previewImgProduct" alt="Article thumbnail"/>
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
                            <input className="form-submit-btn" type="submit" value="Add Article" />
                        </div>
                    </div>
                </div>
            </form>            
        </div>                    
    </div>


        
    )
}

export default UpdateArticle
