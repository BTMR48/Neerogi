import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './Routes/PrivateRoute';
import LoggedRoute from './Routes/LoggedRoute';


import './App.css';

import Header from './components/Header/Header';
import SignUp from './components/UserManagement/SignUp/SignUp';
import Login from './components/UserManagement/SignIn/SignIn';
import ArticlesList from './components/Articles/ArticleList/Articles';
import VideosList from './components/Videos/VideoList/Videos';
import AddVideo from './components/Videos/AddVideo/AddVideo';
import AddArticle from './components/Articles/AddArticles/AddArticle';
import UpdateArticle from './components/Articles/UpdateArticle/UpdateArticle';
import UpdateVideo from './components/Videos/UpdateVideo/UpdateVideo';
import Footer from './components/Footer/Footer';
import AddNewActivity from './components/ActivityManagement/AddNewActivity/addNewActivity';
import AddActivity from './components/ActivityManagement/AddNewActivity/AddActivity';
import AddNewQuestion from './components/ActivityManagement/AddQuestionsToActivity/AddNewQuestion';
import ViewAllQuestions from './components/ActivityManagement/ViewAllQuestions/ViewAllQuestion';
import UpdateNewQuestion from './components/ActivityManagement/UpdateQuestions/UpdateQuesttion';
import AllDoctors from './components/DoctorList/alldoctors'
import DoctorAdd from './components/DoctorAdd/DoctorAdd'
import DoctorUpdate from './components/DoctorUpdate/DoctorUpdate'
import AllDoctorsClient from './components/DoctorCards/AllDoctors'
import SingleDoctor from './components/DoctorCards/SingleDoctor'
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
import UserChart from './components/Charts/UsersChart';
import Feedback from './components/ActivityManagement/FeedbackPage/Feedback';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <Header/>
            <Route path="/articles/list" exact component={ArticlesList} />
            <Route path="/videos/list" exact component={VideosList} />
            <Route path="/videos/add" exact component={AddVideo} />
            <Route path="/articles/add" exact component={AddArticle} />
            <Route path="/articles/update/:id" exact component={UpdateArticle} />
            <Route path="/videos/update/:id" exact component={UpdateVideo} />
            <LoggedRoute path="/user/signup" exact component={SignUp} />
            <LoggedRoute path="/" exact component={Login} />
            <PrivateRoute path="/doctor/all" exact component={AllDoctors} />
            <PrivateRoute path="/doctor/add" exact component={DoctorAdd} />
            <PrivateRoute path="/doctor/update/:id" exact component={DoctorUpdate} />
            <Route path="/doctor/cards" exact component={AllDoctorsClient} />
            <Route path="/doctor/cards/:id" exact component={SingleDoctor} />
            <Route path="/question/AllQuestions" exact component={ AllQuestions } />
            <Route path="/question/AddQuestions" exact component={ AddQuestions } />
            <Route path="/question/UpdateQuestion/:id" exact component={ UpdateQuestion } />
            <Route path="/question/OneQuestion/:id" exact component={ OneQuestion } /> 
            <Route path="/AllDetails" exact component={DetailsAnswers} />  
            <Route path="/Answer" exact component={InAnswers} />  
            <Route path="/questions/markspage/:marks" exact component={ShowMarks} />
            <Route path="/AllDetails/onedetails/:name" exact component={OneDetails} />
            <Route path="/ClientHome" exact component={ClientHome} />
            <Route path="/AdminHome" exact component={AdminHome} />
            <Route path="/chart/user" exact component={UserChart} />
            <Route path="/InAnswers/MarksPDF/:marks" exact component={MarksPDF} />
            <Route path="/admin/addNewActivity" exact component = {AddNewActivity}/>
            <Route path="/admin/addActivity" exact component = {AddActivity}/>
            <Route path="/admin/addNewQuestion" exact component = {AddNewQuestion} />
            <Route path='/admin/ViewAllQuestions' exact component={ViewAllQuestions} />
            <Route path='/admin/ViewAllQuestions/updateQuestion/:id' exact component={UpdateNewQuestion} />
            <Route path='/admin/questions/feedback' exact component={Feedback}/>
         <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
