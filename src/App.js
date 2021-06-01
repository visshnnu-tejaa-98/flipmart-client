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
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

function App() {
	return (
		<BrowserRouter className='App'>
			<Navbar />
			<Switch>
				<Route path='/' exact component={HomeScreen}></Route>
				<Route path='/home' exact component={HomeScreen}></Route>
				<Route path='/product/:id' exact component={ProductDetails}></Route>
				<Route path='/cart/:id?' component={CartScreen}></Route>
				<Route path='/profile' component={ProfileScreen}></Route>
				<Route path='/login' component={LoginScreen}></Route>
				<Route path='/register' component={RegisterScreen}></Route>
				<Route path='/profile' component={ProfileScreen}></Route>
				<Route path='/forgot' component={ForgotPage}></Route>
				<Route path='/reset' component={ResetPassword}></Route>
				<Route path='/shipping' component={ShippingScreen}></Route>
				<Route path='/payment' component={PaymentScreen}></Route>
				<Route path='/placeOrder' component={PlaceOrderScreen}></Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
