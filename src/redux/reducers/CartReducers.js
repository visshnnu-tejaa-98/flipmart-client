import {
	CART_ADD_ITEM,
	CART_REMOVE_ITEM,
	CART_SAVE_PAYMENT_METNOD,
	CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/CartConstants';

export const cartReducer = (state = { cartItems: [], shippingAddress: {} }, action) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			const item = action.payload;
			const existItem = state.cartItems.find((x) => x.id === item.id);
			if (existItem) {
				return {
					...state,
					cartItems: state.cartItems.map((x) => (x.id === existItem.id ? item : x)),
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, item],
				};
			}
		case CART_REMOVE_ITEM: {
			return {
				...state,
				cartItems: state.cartItems.filter((x) => x.id !== action.payload),
			};
		}
		case CART_SAVE_SHIPPING_ADDRESS: {
			return {
				...state,
				shippingAddress: action.payload,
			};
		}
		case CART_SAVE_PAYMENT_METNOD: {
			return {
				...state,
				paymentMethod: action.payload,
			};
		}

		default:
			return state;
	}
};
