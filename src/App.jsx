import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/js/bootstrap.bundle";
//-----component----
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//-----pages----
import Inicio from "./pages/Inicio";
import Remeras from "./pages/Remeras";
import Pantalones from "./pages/Pantalones";
import Sweaters from "./pages/Sweaters";
import ItemDetail from "./components/ItemDetail";
function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <div className="main">
            <Navbar></Navbar>

            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/remeras" element={<Remeras />} />
              <Route path="/Pantalones" element={<Pantalones />} />
              <Route path="/sweaters" element={<Sweaters />} />
              <Route path="/Itemdetail/:id" element={<ItemDetail />} />
            </Routes>
          </div>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
