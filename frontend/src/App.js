import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import AdminSignIn from './components/AdminManagement/AdminLogin';
import Footer from './components/Footer/Footer';
import AllDoctors from './components/DoctorList/alldoctors'
import DoctorAdd from './components/DoctorAdd/DoctorAdd'
import DoctorUpdate from './components/DoctorUpdate/DoctorUpdate'


function App() {
  return (
    <div className="App">
      <Router>
        <div>
            <Header/>
            
            <Route path="/admin/signin" exact component={AdminSignIn} />
            <Route path="/doctor/all" exact component={AllDoctors} />
            <Route path="/doctor/add" exact component={DoctorAdd} />
            <Route path="/doctor/update/:id" exact component={DoctorUpdate} />

            <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
