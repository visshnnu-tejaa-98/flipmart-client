import { BACKEND_ENDPOINT } from '../../endpoints';
import {
	USER_EDIT_NAME_REQUEST,
	USER_EDIT_NAME_SUCCESS,
	USER_EDIT_NAME_FAILURE,
	USER_LOGIN_FAILURE,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_REGISTER_FAILURE,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
} from '../constants/userConstants';

// login

export const userLoginRequest = () => {
	return {
		type: USER_LOGIN_REQUEST,
	};
};

export const userLoginSuccess = (userInfo) => {
	return {
		type: USER_LOGIN_SUCCESS,
		payload: userInfo,
	};
};

export const userLoginFailure = (error) => {
	return {
		type: USER_LOGIN_FAILURE,
		payload: error,
	};
};

export const userLogout = () => {
	return {
		type: USER_LOGOUT,
		payload: {},
	};
};

// register

export const userRegisterRequest = () => {
	return {
		type: USER_REGISTER_REQUEST,
	};
};

export const userRegisterSuccess = (userInfo) => {
	return {
		type: USER_REGISTER_SUCCESS,
		payload: userInfo,
	};
};

export const userRegisterFailure = (error) => {
	return {
		type: USER_REGISTER_FAILURE,
		payload: error,
	};
};

// edit details

export const userEditNameRequest = () => {
	return {
		type: USER_EDIT_NAME_REQUEST,
	};
};

export const userEditNameSuccess = (user) => {
	return {
		type: USER_EDIT_NAME_SUCCESS,
		payload: user,
	};
};

export const userEditNameFailure = (error) => {
	return {
		type: USER_EDIT_NAME_FAILURE,
		payload: error,
	};
};

/////////////////////////////////////////////////////////////////////////////

// login
export const login = (email, password) => {
	return async (dispatch) => {
		try {
			dispatch(userLoginRequest());
			let data = { email, password };
			const req = await fetch(`${BACKEND_ENDPOINT}/api/users/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			const res = await req.json();
			dispatch(userLoginSuccess(res));
			localStorage.setItem('userInfo', JSON.stringify(res));
		} catch (error) {
			console.log(error);
			dispatch(userLoginFailure('Something went wrong'));
		}
	};
};

// logout
export const logout = () => {
	return async (dispatch) => {
		dispatch(userLogout());
		localStorage.removeItem('userInfo');
	};
};

// register
export const register = (name, email, password) => {
	return async (dispatch) => {
		try {
			dispatch(userRegisterRequest());
			let data = { name, email, password };
			const req = await fetch(`${BACKEND_ENDPOINT}/api/users/register`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			const res = await req.json();
			dispatch(userRegisterSuccess(res));
		} catch (error) {
			console.log(error);
			dispatch(userRegisterFailure());
		}
	};
};

// edit name
export const userEditName = (name, email, token) => {
	return async (dispatch, getState) => {
		try {
			dispatch(userEditNameRequest());
			let data = { name, email };
			const req = await fetch(`${BACKEND_ENDPOINT}/api/users`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: token,
				},
				body: JSON.stringify(data),
			});
			const res = await req.json();
			let result = res[0];
			console.log(res);
			let userInfoFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'));
			console.log(userInfoFromLocalStorage);
			userInfoFromLocalStorage.name = result.name;
			console.log(userInfoFromLocalStorage);
			// getState().userLogin.userInfo.name = result.name;
			// console.log();
			dispatch(userEditNameSuccess(userInfoFromLocalStorage));
			localStorage.setItem('userInfo', JSON.stringify(userInfoFromLocalStorage));
		} catch (error) {
			console.log(error);
			dispatch(userEditNameFailure());
		}
	};
};

// change password
