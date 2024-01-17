import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Pages/Home";
import { Login } from "./Pages/Login";
import LoginPage from "./Pages/Loginpage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/map" element={<Home/>} />
          <Route path="/login" element={<LoginPage/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
