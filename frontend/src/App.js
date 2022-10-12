import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import AdminSignIn from './components/AdminManagement/AdminLogin';
import AdArticlesList from './components/Articles/ArticleList/Items';
//import AdArticlesView from './components/Articles/ViewArticles';
import Footer from './components/Footer/Footer';
import AllDoctors from './components/DoctorList/alldoctors'
import DoctorAdd from './components/DoctorAdd/DoctorAdd'
import DoctorUpdate from './components/DoctorUpdate/DoctorUpdate'
import AllQuestions from './components/Questions/AllQuestions/AllQuestions';
import AddQuestions from './components/Questions/AddQuestion/AddQuestion';
import UpdateQuestion from './components/Questions/UpdateQuestion/UpdateQuestion';
import OneQuestion from './components/Questions/AllQuestions/OneQuestion';
import DetailsAnswers from './components/AnswersTo/Details/AllDetails';
import InAnswers from './components/AnswersTo/InAnswers/InAnswers';
import ShowMarks from './components/AnswersTo/InAnswers/showMarkspage';
import OneDetails from './components/AnswersTo/OneDetails/OneDetails';
import ClientHome from './components/HomePage/ClientHome/clientHome';
import AdminHome from './components/HomePage/AdminHome/AdminHome';
import MarksPDF from './components/AnswersTo/PdfDownload/MarksPdf';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
            <Route path="/admin/signin" exact component={AdminSignIn} />
            <Route path="/doctor/all" exact component={AllDoctors} />
            <Route path="/doctor/add" exact component={DoctorAdd} />
            <Route path="/doctor/update/:id" exact component={DoctorUpdate} />
            <Route path="/question/AllQuestions" exact component={ AllQuestions } />
            <Route path="/question/AddQuestions" exact component={ AddQuestions } />
            <Route path="/question/UpdateQuestion/:id" exact component={ UpdateQuestion } />
            <Route path="/question/OneQuestion/:id" exact component={ OneQuestion } />
            <Route path="/admin/articles/list" exact component={AdArticlesList} />  
            <Route path="/AllDetails" exact component={DetailsAnswers} />  
            <Route path="/Answer" exact component={InAnswers} />  
            <Route path="/questions/markspage/:marks" exact component={ShowMarks} />
            <Route path="/AllDetails/onedetails/:name" exact component={OneDetails} />
            <Route path="/ClientHome" exact component={ClientHome} />
            <Route path="/AdminHome" exact component={AdminHome} />
            <Route path="/InAnswers/MarksPDF/:marks" exact component={MarksPDF} />
            <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
