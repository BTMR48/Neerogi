import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import AdminSignIn from './components/AdminManagement/AdminLogin';
import AdArticlesList from './components/Articles/ArticleList/Items';
//import AdArticlesView from './components/Articles/ViewArticles';
import Footer from './components/Footer/Footer';
import AllQuestions from './components/Questions/AllQuestions/AllQuestions';
import AddQuestions from './components/Questions/AddQuestion/AddQuestion';
import UpdateQuestion from './components/Questions/UpdateQuestion/UpdateQuestion';
import OneQuestion from './components/Questions/AllQuestions/OneQuestion';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
         
            
            <Route path="/admin/signin" exact component={AdminSignIn} />
            <Route path="/question/AllQuestions" exact component={ AllQuestions } />
            <Route path="/question/AddQuestions" exact component={ AddQuestions } />
            <Route path="/question/UpdateQuestion/:id" exact component={ UpdateQuestion } />
            <Route path="/question/OneQuestion/:id" exact component={ OneQuestion } />
            <Route path="/admin/articles/list" exact component={AdArticlesList} />  
            <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
