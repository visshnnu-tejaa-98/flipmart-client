import {
	ORDER_CREATE_FAILURE,
	ORDER_CREATE_REQUEST,
	ORDER_CREATE_SUCCESS,
} from '../constants/orderConstants';

export const orderCreateReducer = (state = { loading: true }, action) => {
	switch (action.type) {
		case ORDER_CREATE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case ORDER_CREATE_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				order: action.payload,
			};
		case ORDER_CREATE_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
