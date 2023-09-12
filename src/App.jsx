import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//-----component----
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//-----pages----
import Inicio from "./pages/Inicio";

import ItemDetail from "./components/ItemDetail";
import ProductCategory from "./pages/ProductCategory";
import { ProductProvider } from "./ProductContext/ProductContext";
function App() {
  return (
    <ProductProvider>
      <div className="page-container">
        <div className="content-wrap">
          <Router>
            <div className="main">
              <Navbar></Navbar>

              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route
                  path="/productos/:category"
                  element={<ProductCategory />}
                />

                <Route path="/Itemdetail/:id" element={<ItemDetail />} />
              </Routes>
            </div>
          </Router>
        </div>
        <Footer />
      </div>
    </ProductProvider>
  );
}

export default App;
