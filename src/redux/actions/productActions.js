import { BACKEND_ENDPOINT } from '../../endpoints';
import {
	PRODUCT_DETAILS_FAILURE,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_LIST_FAILURE,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants';

export const productListRequest = () => {
	return {
		type: PRODUCT_LIST_REQUEST,
	};
};

export const productListSuccess = (products) => {
	return {
		type: PRODUCT_LIST_SUCCESS,
		payload: products,
	};
};

export const productListFailure = (error) => {
	return {
		type: PRODUCT_LIST_FAILURE,
		payload: error,
	};
};

export const listProducts = () => {
	return async (dispatch) => {
		try {
			dispatch(productListRequest());
			let req = await fetch(`${BACKEND_ENDPOINT}/api/products`);
			let res = await req.json();
			dispatch(productListSuccess(res));
		} catch (error) {
			console.log(error);
			dispatch(productListFailure('Something went wrong'));
		}
	};
};

export const productDetailsRequest = (id) => {
	return {
		type: PRODUCT_DETAILS_REQUEST,
		payload: id,
	};
};

export const productDetailsSuccess = (product) => {
	return {
		type: PRODUCT_DETAILS_SUCCESS,
		payload: product,
	};
};

export const productDetailsFailure = (error) => {
	return {
		type: PRODUCT_DETAILS_FAILURE,
		payload: error,
	};
};

export const productDetails = (id) => {
	return async (dispatch) => {
		try {
			dispatch(productDetailsRequest(id));
			let req = await fetch(`${BACKEND_ENDPOINT}/api/products/${id}`);
			let res = await req.json();
			dispatch(productDetailsSuccess(res));
		} catch (error) {
			console.log(error);
			dispatch(productDetailsFailure('Something went wrong'));
		}
	};
};
