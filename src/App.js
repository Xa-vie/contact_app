
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Reset from "./components/Reset";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route exact path="/register" element={<SignUp />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
