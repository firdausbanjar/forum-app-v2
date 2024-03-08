import { Dispatch } from '@reduxjs/toolkit';
import api from '@/utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../user/action';

const asyncReceiveThreadsAndUser = () => {
	return async (dispatch: Dispatch) => {
		try {
			const threads = await api.getAllThreads();
			const users = await api.getAllUsers();

			dispatch(receiveThreadsActionCreator(threads));
			dispatch(receiveUsersActionCreator(users));
		} catch (error: any) {
			alert(error.message);
		}
	};
};

export { asyncReceiveThreadsAndUser };
