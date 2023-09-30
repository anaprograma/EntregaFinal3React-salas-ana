import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//-----component----
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// import ItemDetail from "./components/ItemDetail";
//-----pages----

import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

//-----contextProviders----------

// import { CartProvider } from "./Context/CartContext";
function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <div className="main">
            <Navbar></Navbar>

            <Routes>
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/" element={<ItemListContainer />} />

              {/* <Route path="/Itemdetail/:id" element={<ItemDetail />} /> */}
            </Routes>
          </div>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
