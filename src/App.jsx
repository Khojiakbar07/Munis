import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsComponent from "./Components/Products/ProductsComponent";
import './App.css'

function App() {
  return (
    <Router>
       {/* Main Content */}
      <main>
        <Routes>
          <Route path="/products" element={<ProductsComponent />} />
        </Routes>
      </main>  
    </Router>
  )
}

export default App
