import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";

export default function CartItem(props) {
	const {
		cartItem: { id, title, image, price, quantity }, removeItem
	} = props;
	return (
		<Card sx={{ display: "flex" }}>
			<CardMedia
				component="img"
				sx={{ height: 80, maxWidth: 80, p: 1 }}
				image={image}
				alt="Blue drum set"
			/>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				flexGrow={1}
			>
				<Box mb={1}>
					<Typography fontSize="12px" fontWeight="bold">
						{title}
					</Typography>
				</Box>
				<Box>
          <Typography fontWeight="bold">$ {price/100}</Typography>
				</Box>
			</Box>
			<Box display="flex" flexDirection="column" justifyContent="center">
				<Box px={1}>
					<Typography fontSize="12px" fontWeight="bold">
						x{quantity}
					</Typography>
				</Box>
			</Box>
			<Box display="flex" flexDirection="column" justifyContent="center">
				<Box px={1}>
					<IconButton>
						<DeleteForeverIcon onClick={()=> {removeItem(id)} }color="error" />
					</IconButton>
				</Box>
			</Box>
		</Card>
	);
}
