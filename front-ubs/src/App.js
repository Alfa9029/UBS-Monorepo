// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";
import ListaProf from "./components/ListaProf";
import Calendario from "./components/Calendario";
import ListaUBS from "./lista-ubs/src/components/ListaUBS";
import CreateProfessional from "./components/CreateProfessional";
import CreateCampaign from "./components/CreateCampaign";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem("user");
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-white w-full">
          <Routes>
            <Route path="/" element={<ListaUBS />} />
            <Route path="/login" element={<LoginForm />} />
            <Route
              path="/listar"
              element={<PrivateRoute element={ListaProf} />}
            />
            <Route
              path="/calendario"
              element={<PrivateRoute element={Calendario} />}
            />
            <Route
              path="/createCampaign"
              element={<PrivateRoute element={CreateCampaign} />}
            />
            <Route
              path="/createProfessional"
              element={<PrivateRoute element={CreateProfessional} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
