import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";

export default function ProductDisplay(props) {
	const { product, addItemsToCart } = props;
	const { id, title, brand, price, image, description } = product;

	const handleAddToCart = () => {
		addItemsToCart(product);
	}
	return (
		<Card sx={{ mx: "auto" }}>
			<CardHeader
				action={<Typography>$ {price / 100}</Typography>}
				title={title}
				subheader={brand}
			/>
			<CardMedia
				component="img"
				height="194"
				src={image}
				id="productImage"
				alt="Blue Drumset"
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<Button variant="text" onClick={() => { handleAddToCart() }}>
					Add to cart
				</Button>
				<IconButton aria-label="add to favorites" sx={{ marginLeft: "auto" }}>
					<FavoriteIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}
