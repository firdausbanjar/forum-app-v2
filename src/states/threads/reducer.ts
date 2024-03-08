import { IThread } from '@/declarations/interfaces';
import { ActionType } from './action';

const threadsReducer = (threads: IThread[] = [], action: any = {}) => {
	switch (action.type) {
		case ActionType.RECEIVE_THREADS:
			return action.payload.threads;
		case ActionType.ADD_THREAD:
			return [action.payload.thread, ...threads];
		default:
			return threads;
	}
};

export default threadsReducer;
