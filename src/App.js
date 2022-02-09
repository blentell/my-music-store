import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./components/pages/CartPage";
import HomePage from "./components/pages/HomePage";
import Signin from "./components/pages/Signin";

function App() {
	const shoppingCartInitialState = [];
	const [shoppingCart, setShoppingCart] = useState([]);

	const removeItem = (id) => {
		setShoppingCart(shoppingCart.filter((item) => item.id !== id));
	};

	const emptyCart = () => {
		setShoppingCart(shoppingCartInitialState)
	}
	const addItemsToCart = (product) => {
		setShoppingCart([
			...shoppingCart,
			{
				id: product.id,
				title: product.title,
				price: product.price,
				quantity: 1,
				image: product.image,
			},
		]);
	};
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route index element={<HomePage addItemsToCart={addItemsToCart}/>}></Route>
					<Route
						path="cart"
						element={
							<CartPage
								removeItem={removeItem}
								shoppingCart={shoppingCart}
								emptyCart={emptyCart} />
						}
					></Route>
					<Route path="sign-in" index element={<Signin />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
