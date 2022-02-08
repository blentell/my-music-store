import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import CartPage from "./components/pages/CartPage";
import Signin from "./components/pages/Signin";


function App() {
  return (
    <div className="App">      
			<BrowserRouter>
        <Routes>          
					<Route index element={<HomePage />}></Route>
					<Route path="cart" element={<CartPage />}></Route>
					<Route path="sign-in" index element={<Signin />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
