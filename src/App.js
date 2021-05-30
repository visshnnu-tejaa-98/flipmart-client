import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import ProductDetails from './screens/ProductDetails';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ResetPassword from './screens/ResetPassword';
import ForgotPage from './screens/ForgotPasswod';

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
				<Route path='/profile'>
					<ProfileScreen />
				</Route>
				<Route path='/login'>
					<LoginScreen />
				</Route>
				<Route path='/register'>
					<RegisterScreen />
				</Route>
				<Route path='/profile'>
					<ProfileScreen />
				</Route>
				<Route path='/forgot'>
					<ForgotPage />
				</Route>
				<Route path='/reset'>
					<ResetPassword />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
