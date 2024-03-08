import { Dispatch } from '@reduxjs/toolkit';
import { IProfile } from '@/declarations/interfaces';
import { LoginT } from '@/declarations/types';
import api from '@/utils/api';

const ActionType = {
	SET_AUTH_USER: 'SET_AUTH_USER',
	UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

const setAuthUserActionCreator = (authUser: IProfile | null) => {
	return {
		type: ActionType.SET_AUTH_USER,
		payload: {
			authUser,
		},
	};
};

const unsetAuthActionCreator = () => {
	return {
		type: ActionType.UNSET_AUTH_USER,
		payload: {
			authUser: null,
		},
	};
};

const asyncSetAuthUser = ({ email, password }: LoginT) => {
	return async (dispatch: Dispatch) => {
		try {
			const { status, token } = await api.login({ email, password });
			api.putAccessToken(token);
			const user = await api.getOwnProfile();
			dispatch(setAuthUserActionCreator(user));
			return status;
		} catch (error: any) {
			alert(error.message);
		}
	};
};

const asyncUnsetAuthUser = () => {
	return (dispatch: Dispatch) => {
		dispatch(unsetAuthActionCreator());
		api.putAccessToken('');
	};
};

export {
	ActionType,
	asyncSetAuthUser,
	asyncUnsetAuthUser,
	setAuthUserActionCreator,
	unsetAuthActionCreator,
};
