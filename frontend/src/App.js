import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './Routes/PrivateRoute';

import './App.css';
import Header from './components/Header/Header';
import SignUp from './components/UserManagement/SignUp/SignUp';
import Login from './components/UserManagement/SignIn/SignIn';
import Footer from './components/Footer/Footer';
import AllDoctors from './components/DoctorList/alldoctors'
import DoctorAdd from './components/DoctorAdd/DoctorAdd'
import DoctorUpdate from './components/DoctorUpdate/DoctorUpdate'
import AllDoctorsClient from './components/DoctorCards/AllDoctors'
import SingleDoctor from './components/DoctorCards/SingleDoctor'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
            <Header/>
            
            <Route path="/user/signup" exact component={SignUp} />
            <Route path="/user/signin" exact component={Login} />
            <PrivateRoute path="/doctor/all" exact component={AllDoctors} />
            <PrivateRoute path="/doctor/add" exact component={DoctorAdd} />
            <PrivateRoute path="/doctor/update/:id" exact component={DoctorUpdate} />
            <Route path="/doctor/cards" exact component={AllDoctorsClient} />
            <Route path="/doctor/cards/:id" exact component={SingleDoctor} />

            <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
