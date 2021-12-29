import "./styles.css";
import { BrowseRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import ProductDetail from "./Components/ProductDetail";
import ProductList from "./Components/ProductList";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact component={ProductList} />
					<Route path="/product/:productId" exact component={ProductDetail} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
