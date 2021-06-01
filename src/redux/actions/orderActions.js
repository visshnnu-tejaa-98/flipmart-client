import {
	ORDER_CREATE_FAILURE,
	ORDER_CREATE_REQUEST,
	ORDER_CREATE_SUCCESS,
} from '../constants/orderConstants';
import { BACKEND_ENDPOINT } from '../../endpoints';

export const orderCreateRequest = () => {
	return {
		type: ORDER_CREATE_REQUEST,
	};
};
export const orderCreateSuccess = (order) => {
	return {
		type: ORDER_CREATE_SUCCESS,
		payload: order,
	};
};
export const orderCreateFailure = (error) => {
	return {
		type: ORDER_CREATE_FAILURE,
		payload: error,
	};
};

export const createOrder = (order) => {
	return async (dispatch, getState) => {
		try {
			dispatch(orderCreateRequest());
			const req = await fetch(`${BACKEND_ENDPOINT}/api/orders`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(order),
			});
			const res = await req.json();
			dispatch(orderCreateSuccess(res));
			// localStorage.setItem('userInfo', JSON.stringify(res));
		} catch (error) {
			console.log(error);
			dispatch(orderCreateFailure('Something went wrong'));
		}
	};
};
