import React from 'react';
import Layout from '../layout/Layout';

function HomePage() {
  return (
		<Layout>
			<div>
				<h1 style={{ backgroundColor: "red" }}>Home page</h1>
				<p style={{backgroundColor: "yellow"}}>this is the content of the home page!</p>
			</div>
		</Layout>
	);   
}

export default HomePage;
