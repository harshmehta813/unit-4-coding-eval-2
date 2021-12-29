import { Route } from "react-router-dom";
import Navbar from "../Components/navbar.jsx";

const Routes = () => {
	return (
		<>
			<div>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/checkout">
					<Checkout />
				</Route>
			</div>
		</>
	);
};
