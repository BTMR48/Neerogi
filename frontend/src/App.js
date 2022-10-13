import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import AdminSignIn from './components/AdminManagement/AdminLogin';
import ArticlesList from './components/Articles/ArticleList/Articles';
import VideosList from './components/Videos/VideoList/Videos';
import AddVideo from './components/Videos/AddVideo/AddVideo';
import AddArticle from './components/Articles/AddArticles/AddArticle';
import UpdateArticle from './components/Articles/UpdateArticle/UpdateArticle';
import UpdateVideo from './components/Videos/UpdateVideo/UpdateVideo';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
            <Header/>
            
            <Route path="/admin/signin" exact component={AdminSignIn} />
            <Route path="/admin/articles/list" exact component={ArticlesList} />
            <Route path="/admin/videos/list" exact component={VideosList} />
            <Route path="/admin/videos/add" exact component={AddVideo} />
            <Route path="/admin/articles/add" exact component={AddArticle} />
            <Route path="/admin/articles/update/:id" exact component={UpdateArticle} />
            <Route path="/admin/videos/update/:id" exact component={UpdateVideo} />

            <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
