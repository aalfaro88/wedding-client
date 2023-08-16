import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import Inicio from "./pages/Inicio"
import Boda from "./pages/Boda"
import FAQ from "./pages/FAQ"
import Fotos from "./pages/Fotos"
import Regalos from "./pages/Regalos"
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";



function App() {
  const getToken = () => {
    return localStorage.getItem("authToken");
  };

  const LoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to="/login" />;
  };

  const NotLoggedIn = () => {
    return !getToken() ? <Outlet /> : <Navigate to="/" />;
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route element={<LoggedIn />}>
        </Route>

        <Route element={<NotLoggedIn />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/boda" element={<Boda />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/fotos" element={<Fotos />} />
          <Route path="/regalos" element={<Regalos />} />
        </Route>
      </Routes>

      <footer>
        <div className="footer">
          <div>
            <h1>A & A</h1>
          </div>
          <div>
          <p>8.6.2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;