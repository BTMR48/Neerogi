import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import AdminSignIn from './components/AdminManagement/AdminLogin';
import AdArticlesList from './components/Articles/ArticleList/Items';
//import AdArticlesView from './components/Articles/ViewArticles';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
            <Header/>
            
            <Route path="/admin/signin" exact component={AdminSignIn} />
            <Route path="/admin/articles/list" exact component={AdArticlesList} />
            <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
