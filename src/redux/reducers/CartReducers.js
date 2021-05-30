import { BACKEND_ENDPOINT } from '../../endpoints';
import { cartAddItem } from '../actions/CartActions';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/CartConstants';

export const cartReducer = (state = { cartItems: [{ name: 'visshnnu' }] }, action) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			const item = action.payload;
			const existItem = state.cartItems.find((x) => x.id === item.id);
			console.log(existItem);
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
		default:
			return state;
	}
};
