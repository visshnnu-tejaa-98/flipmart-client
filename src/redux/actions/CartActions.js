import { BACKEND_ENDPOINT } from '../../endpoints';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/CartConstants';

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
