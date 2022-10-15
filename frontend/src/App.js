import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import AdminSignIn from './components/AdminManagement/AdminLogin';
import Footer from './components/Footer/Footer';
import AddNewActivity from './components/ActivityManagement/AddNewActivity/addNewActivity';
import AddActivity from './components/ActivityManagement/AddNewActivity/AddActivity';
import AddNewQuestion from './components/ActivityManagement/AddQuestionsToActivity/AddNewQuestion';
import ViewAllQuestions from './components/ActivityManagement/ViewAllQuestions/ViewAllQuestion';
import UpdateQuestion from './components/ActivityManagement/UpdateQuestions/UpdateQuesttion';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
            <Header/>
            
            <Route path="/admin/signin" exact component = {AdminSignIn} />
            <Route path="/admin/addNewActivity" exact component = {AddNewActivity}/>
            <Route path="/admin/addActivity" exact component = {AddActivity}/>
            <Route path="/admin/addNewQuestion" exact component = {AddNewQuestion} />
            <Route path='/admin/ViewAllQuestions' exact component={ViewAllQuestions} />
            <Route path='/admin/ViewAllQuestions/updateQuestion/:id' exact component={UpdateQuestion} />
            
            <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
