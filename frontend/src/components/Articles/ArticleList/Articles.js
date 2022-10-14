import React,{useEffect, useState} from 'react'
import { useHistory,useLocation } from 'react-router';
import './Articles.css'
import axios from 'axios'
import { orange,red,blue,green } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';


function ArticleItem() {

  const [articles, setArticles] = useState([])
  const history = useHistory()

  useEffect(() => { 
    
    async function getAllArticles() {
      axios.get(`http://localhost:8070/article`).then((res) => {
        setArticles(res.data)  
      }).catch((error) => {
        alert("Failed to fetch Articles")
      })
    }
    getAllArticles();
  },[])
  
  function filterContent(data, searchTerm){
    const result = data.filter((article) => 
        article.author.includes(searchTerm) 
    )
    setArticles(result)
  }

  function handleSearchAll(event){
    const searchTerm = event.currentTarget.value
    axios.get(`http://localhost:8070/article`).then((res) => {
      filterContent(res.data, searchTerm.toLowerCase())
    }).catch((error) => {
      alert("Admin Failed to fetch articles")
    })
  }
  function view(content){
    window.open(content);
  }

  async function deleteArticle(id){
    if(window.confirm("Are you sure to delete this article") == true){
      await axios.delete(`http://localhost:8070/article/delete/${id}`).then(()=>{
        alert("deleting article is successful");
        setArticles( articles.filter(element => element._id !== id))
      }).catch((error)=>{
          alert("deleting article failed");
      })  
    }
  
}

function update(id){
    history.push(`/admin/articles/update/${id}`)
}
  
  function addArticle(){
   history.push(`/admin/articles/add`)
  }

    return (
        <div className="container">
          <div className="row">
              <div className="col-4">
                <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                    <h2>Articles</h2>
                </div>
              </div>
              <div className="col-3">
              </div>
              <div className="col-5">
                <div className="px-3 search" align="right">
                  <input 
                    type="text" 
                    name="search" 
                    id="search"
                    placeholder="Search" 
                    onChange={handleSearchAll} 
                    required 
                  />
                </div>
               
          </div>
        </div>
        <div className="productGrid"  > 
            <Button  className="mx-2 productBtn" style={{backgroundColor:blue[400],color:'white'}} onClick={()=>addArticle()}>
            Add Article <AddIcon/>
            </Button>  
          
          {articles.map((Article,key)=>( 
                <div key={key}> 
                    <div className="productCard" >
                        <div className="imgBx">
                            <img  src={`${Article.imgUrl}`} alt="Article" className="itemProduct"/>
                        </div>
                        <div className="p-3">
                            <h7>{Article.heading}</h7>
                            <h6>{Article.author}</h6>
                            <h6>{Article.date}</h6>
                            <div align="center">
                              <span> 
                                  <IconButton onClick={() => view(Article.pdfUrl)}>
                                        <VisibilityIcon style={{ color: "#008B8B" }} ></VisibilityIcon>
                                    </IconButton>
                              </span>
                              <span> 
                                  <IconButton onClick={() => update(Article.id)}>
                                        <EditIcon style={{ color: "#008B8B" }} ></EditIcon>
                                    </IconButton>
                              </span> 
                              <span> 
                                  <IconButton onClick={() => deleteArticle(Article.id)}>
                                        <DeleteIcon style={{ color: "#008B8B" }} ></DeleteIcon>
                                    </IconButton>
                              </span>  
                            </div>
                        </div>
                    </div>
                </div>
          ))} 
        </div>
      </div>
    )      
}

export default ArticleItem
