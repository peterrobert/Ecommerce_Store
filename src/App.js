import { Route, Routes } from 'react-router-dom';

import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage"
import "./styles/App.css";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<CategoryPage/>}  />
      <Route path='/cart' element={<CartPage />} />
    </Routes>
    </>
  );
}

export default App;
