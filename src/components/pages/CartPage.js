import React from "react";
import Layout from "../layout/Layout";
import CartItem from "../../components/CartItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ReplayIcon from "@mui/icons-material/Replay";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

function CartPage(props) {
	const { removeItem, shoppingCart, emptyCart } = props;

	return (
		<Layout>
			<h1>This is the Shopping Cart</h1>
			<Box p={2}>				
				{shoppingCart.map((item) => (
					<Box mb={2} key={item.id}>
						<CartItem
							removeItem={removeItem}
							cartItem={{
								id: item.id,
								title: item.title,
								price: item.price,
								quantity: item.quantity,
								image: item.image,
							}}
						/>
					</Box>
				))}
				<Box marginTop="40px" display="flex" justifyContent="center">
					<Typography>Total: $9999.99</Typography>
				</Box>
				<Box marginTop="20px" display="flex" justifyContent="center">
					<Button sx={{ width: "220px" }} variant="contained">
						CHECKOUT
					</Button>
				</Box>
				<Box marginTop="20px" display="flex" justifyContent="center">
					<Button
						sx={{ width: "220px" }}
						variant="contained"
						startIcon={<ReplayIcon />}
						onClick={emptyCart}
					>
						Empty Cart
					</Button>
				</Box>
				<Box marginTop="20px" display="flex" justifyContent="center">
					<Link to="/">
						<Button
							sx={{ width: "220px" }}
							variant="contained"
							startIcon={<HomeIcon />}
						>
							Back to home page
						</Button>
					</Link>
				</Box>
			</Box>
		</Layout>
	);
}

export default CartPage;
