import { Dispatch } from '@reduxjs/toolkit';
import api from '@/utils/api';
import { setAuthUserActionCreator, unsetAuthActionCreator } from '../auth/action';

const ActionType = {
	SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

const setIsPreloadActionCreator = (isPreload: boolean) => {
	return {
		type: ActionType.SET_IS_PRELOAD,
		payload: {
			isPreload,
		},
	};
};

const asyncSetIsPreload = () => {
	return async (dispatch: Dispatch) => {
		try {
			const authUser = await api.getOwnProfile();
			dispatch(setAuthUserActionCreator(authUser));
		} catch (error: any) {
			dispatch(unsetAuthActionCreator());
		} finally {
			setIsPreloadActionCreator(false);
		}
	};
};

export {
	ActionType,
	asyncSetIsPreload,
	setIsPreloadActionCreator,
};
