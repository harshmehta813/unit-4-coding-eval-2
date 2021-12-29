import React from "react";
import { useSelctor } from "react-redux";

const Product = () => {
	const prod = useSelctor((state) => state.allProducts.product);

	const { id, name, price } = prod[0];
	return (
		<>
			<div>{name}</div>
		</>
	);
};

export default Product;
