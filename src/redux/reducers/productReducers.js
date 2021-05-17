import { BACKEND_ENDPOINT } from '../../endpoints';
import {
	productDetailsFailure,
	productDetailsRequest,
	productDetailsSuccess,
	productListFailure,
	productListRequest,
	productListSuccess,
} from '../actions/productActions';
import {
	PRODUCT_LIST_FAILURE,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAILURE,
} from '../constants/productConstants';

let initialProductsList = {
	loading: false,
	products: [],
	error: '',
};

// ////////////////////////////////   start of fetch all products   ////////////////////////
export const productListReducer = (state = initialProductsList, action) => {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return {
				loading: true,
			};
		case PRODUCT_LIST_SUCCESS:
			return {
				...state,
				loading: false,
				products: action.payload,
			};
		case PRODUCT_LIST_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

// ////////////////////////////////   end of fetch all products   ////////////////////////

// ////////////////////////////////   start of fetch single products   ////////////////////////

let initialProductDetails = {
	loading: false,
	product: {},
	error: '',
};

export const productDetailsReducer = (state = initialProductDetails, action) => {
	switch (action.type) {
		case PRODUCT_DETAILS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case PRODUCT_DETAILS_SUCCESS:
			return {
				...state,
				loading: false,
				product: action.payload,
			};
		case PRODUCT_DETAILS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

// ////////////////////////////////   end of fetch single products   ////////////////////////
