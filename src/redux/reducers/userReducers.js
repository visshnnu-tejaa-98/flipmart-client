import {
	USER_EDIT_NAME_FAILURE,
	USER_EDIT_NAME_REQUEST,
	USER_EDIT_NAME_SUCCESS,
	USER_LOGIN_FAILURE,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_REGISTER_FAILURE,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
} from '../constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
			return {
				...state,
				loading: true,
			};
		case USER_LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				userInfo: action.payload,
			};
		case USER_LOGIN_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case USER_LOGOUT:
			return {
				userInfo: {},
			};
		default:
			return state;
	}
};

export const userRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_REGISTER_REQUEST:
			return {
				...state,
				loading: true,
			};
		case USER_REGISTER_SUCCESS:
			return {
				...state,
				loading: false,
				userInfo: action.payload,
			};
		case USER_REGISTER_FAILURE:
			return {
				...state,
				loading: true,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const userEditNameReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_EDIT_NAME_REQUEST:
			return {
				...state,
				loading: true,
			};
		case USER_EDIT_NAME_SUCCESS:
			return {
				...state,
				loading: false,
				status: action.payload,
			};
		case USER_EDIT_NAME_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
