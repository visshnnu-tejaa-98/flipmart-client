import { BACKEND_ENDPOINT } from '../../endpoints';
import {
	CART_ADD_ITEM,
	CART_REMOVE_ITEM,
	CART_SAVE_PAYMENT_METNOD,
	CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/CartConstants';

export const cartAddItem = (product) => {
	return {
		type: CART_ADD_ITEM,
		payload: product,
	};
};

export const cartRemoveItem = (id) => {
	return {
		type: CART_REMOVE_ITEM,
		payload: id,
	};
};

export const cartSaveShippingAddress = (address) => {
	return {
		type: CART_SAVE_SHIPPING_ADDRESS,
		payload: address,
	};
};
export const cartSavePaymentMethod = (method) => {
	return {
		type: CART_SAVE_PAYMENT_METNOD,
		payload: method,
	};
};

export const addToCart = (id, qty) => {
	return async (dispatch, getState) => {
		try {
			let req = await fetch(`${BACKEND_ENDPOINT}/api/products/${id}`);
			let res = await req.json();
			let product = {
				id: res._id,
				name: res.name,
				image: res.image,
				price: res.price,
				countInStock: res.countInStock,
				qty: qty,
			};
			console.log(product);
			dispatch(cartAddItem(product));
			localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
		} catch (error) {
			console.log(error);
		}
	};
};

export const removeFromCart = (id) => {
	console.log(id);
	return async (dispatch, getState) => {
		dispatch(cartRemoveItem(id));
		localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
	};
};

export const saveShippingAddress = (address) => {
	return async (dispatch, getState) => {
		dispatch(cartSaveShippingAddress(address));
		localStorage.setItem('shippingAddress', JSON.stringify(getState().cart.shippingAddress));
	};
};

export const savePaymentMethod = (method) => {
	return async (dispatch, getState) => {
		dispatch(cartSavePaymentMethod(method));
		localStorage.setItem('paymentMethod', JSON.stringify(getState().cart.paymentMethod));
	};
};
