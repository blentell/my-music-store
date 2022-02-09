import React from 'react';
import Layout from "../layout/Layout";
import CartItem from '../../components/CartItem'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ReplayIcon from "@mui/icons-material/Replay";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from 'react-router-dom';

function CartPage() {
  const shoppingCart = [
		{
			id: "123",
			title: "Blue Drumset",
			price: 89999,
			quantity: 2,
			image:
				"https://www.yamaha.com/yamahavgn/PIM/Images/19027_12073_1_1200x1200_80813f268e73483818697e99937dbd59.jpg",
		},
		{
			title: "Red Drumset",
			quantity: 2,
			price: 99999,
			image:
				"https://media.sweetwater.com/images/items/750/SBP8F3CR-large.jpg?v=59a77bcd3841c67a",
		},
	];
  return (
		<Layout>
			<h1>This is the Shopping Cart</h1>
			<Box p={2}>
				{shoppingCart.map((item) => (
					<Box mb={2} key={item.id}>
						<CartItem
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
