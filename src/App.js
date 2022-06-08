
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Courses from './components/Courses';
import Form from './components/Form';
import Usersdata from './components/Usersdata';
import Header from './components/Header';
 
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Courses/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/usersdata" element={<Usersdata/>}/>
      </Routes>
    </Router>
  );
}

export default App;
