import './App.css';
import { MainPage, ProductPage, CartPage, PersonalAccountPage, ProductsPage, LoginPage, RegisterPage} from '../pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/login" Component={<LoginPage/>}/>
          <Route exact path="/register" Component={<RegisterPage/>}/>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/:itemId" element={<ProductPage/>}/>
          <Route path="/productsPage/Men" element={<ProductsPage type="male"/>}/>
          <Route path="/productsPage/Women" element={<ProductsPage type="female"/>}/>
          <Route path="/productsPage/Kids" element={<ProductsPage type="kids"/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/personalAccount" element={<PersonalAccountPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
