import { IProfile } from '@/declarations/interfaces';
import { ActionType } from './action';

const usersReducer = (users: IProfile[] = [], action: any = {}) => {
	switch (action.type) {
		case ActionType.RECEIVE_USERS:
			return action.payload.users;
		default:
			return users;
	}
};

export default usersReducer;
