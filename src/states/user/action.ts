import { IProfile } from '@/declarations/interfaces';
import { RegisterT } from '@/declarations/types';
import api from '@/utils/api';

const ActionType = {
	RECEIVE_USERS: 'RECEIVE_USERS',
};

const receiveUsersActionCreator = (users: IProfile[]) => {
	return {
		type: ActionType.RECEIVE_USERS,
		payload: {
			users,
		},
	};
};

const asyncRegisterUser = ({ name, email, password }: RegisterT) => {
	return async () => {
		try {
			const { status } = await api.register({ name, email, password });
			return status;
		} catch (error: any) {
			alert(error.message);
		}
	};
};

export { ActionType, asyncRegisterUser, receiveUsersActionCreator };
