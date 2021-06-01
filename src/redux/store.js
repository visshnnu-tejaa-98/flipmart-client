import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/CartReducers';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';
import { orderCreateReducer } from './reducers/orderReducers';

const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	orderCreate: orderCreateReducer,
});

const cartItemsFromLocalStorage = localStorage.getItem('cart')
	? JSON.parse(localStorage.getItem('cart'))
	: [];

const shippingAddressFromLocalStorage = localStorage.getItem('shippingAddress')
	? JSON.parse(localStorage.getItem('shippingAddress'))
	: {};

const PaymentMethodFromLocalStorage = localStorage.getItem('paymentMethod')
	? JSON.parse(localStorage.getItem('paymentMethod'))
	: '';

const userInfoFromLocalStorage = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: null;

const initailState = {
	cart: {
		cartItems: cartItemsFromLocalStorage,
		shippingAddress: shippingAddressFromLocalStorage,
		paymentMethod: PaymentMethodFromLocalStorage,
	},

	userLogin: {
		userInfo: userInfoFromLocalStorage,
	},
};

const store = createStore(reducer, initailState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
