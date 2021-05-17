import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import ProductDetails from './screens/ProductDetails';
import CartScreen from './screens/CartScreen';

function App() {
	return (
		<BrowserRouter className='App'>
			<Navbar />
			<Switch>
				<Route path='/' exact>
					<HomeScreen />
				</Route>
				<Route path='/home' exact>
					<HomeScreen />
				</Route>
				<Route path='/product/:id' exact>
					<ProductDetails />
				</Route>
				<Route path='/cart/:id?'>
					<CartScreen />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
