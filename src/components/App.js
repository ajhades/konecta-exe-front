import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import EmployeesPage from "../pages/EmployeePage";
import ApplicationsPage from "../pages/ApplicationPage";
import { AuthProvider } from "../context/AuthContext";
import Header from "./Header";

function App() {
  return (
    // <div className="App">
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
        </Routes>
      </Router>
    </AuthProvider>
    // </div>
  );
}

export default App;
