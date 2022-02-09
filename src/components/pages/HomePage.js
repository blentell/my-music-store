import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import ProductDisplay from './ProductDisplay';
import { fetchProducts } from '../../fetchData';
import { Box } from '@mui/material';

function HomePage() {
  const [productData, setProductData] = useState();

  useEffect(() => {
    fetchProducts().then((data) =>
      setProductData(data));
  }, [])
  
  if (!productData) {
    return null;
  }

  return (
		<Layout>
			<Box p={4}>
				{productData.map((product) => (
					<Box key={product.id} mb={2}>
						<ProductDisplay
							product={{
								id: product.id,
								title: product.title,
								brand: product.brand,
								price: product.price,
								picture: product.picture,
								description: product.description,
							}}
							key={product.id}
						/>
					</Box>
				))}
			</Box>
		</Layout>
	);   
}

export default HomePage;
