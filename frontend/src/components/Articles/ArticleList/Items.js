import React,{useEffect, useState} from 'react'
import { useHistory,useLocation } from 'react-router';
import './Items.css'
import axios from 'axios'
import { orange,red,blue,green } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';


function ArticleItem() {

  const [isAdmin,setIsAdmin]= useState(false)
  const [articles, setArticles] = useState([])
  const history = useHistory()
  const location = useLocation()
  const [user, setUser] = useState("");

  useEffect(() => { 
    
    async function getAllArticles() {
      axios.get(`http://localhost:8070/article`).then((res) => {
        setArticles(res.data)  
      }).catch((error) => {
        alert("Failed to fetch Articles")
      })
    }
    getAllArticles();
  })
  
  function filterContent(data, searchTerm){
    const result = data.filter((article) => 
        article.name.toLowerCase().includes(searchTerm) 
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
  function view(id){
    history.push(`/pharmacy/item/${id}`)
  }
  
  function addArticle(){
    history.push(`/pharmacy/addArticle`)
  }
  function ArticleHistory(){
    history.push(`/pharmacy/article/history`)
}
    return (
        <div className="container">
          <div className="row">
              <div className="col-4">
                <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                    <h2>Aspirus Pharmacy</h2>
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
                            <h7>{Article.name}</h7>
                            <h6>Rs.{Article.price}.00</h6>
                            <div align="right">
                              <span> 
                                  &nbsp;&nbsp;&nbsp;
                                  <button className="productBtn" style={{backgroundColor:red[400]}} onClick={()=>view(Article._id)}> View Article</button>
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
