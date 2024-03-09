import { IThread } from '@/declarations/interfaces';
import { ActionType } from './action';
import { handleDownVoteThread, handleNeutralVoteThread, handleUpVoteThread } from './handler';

const threadsReducer = (threads: IThread[] = [], action: any = {}) => {
	switch (action.type) {
		case ActionType.RECEIVE_THREADS:
			return action.payload.threads;
		case ActionType.ADD_THREAD:
			return [action.payload.thread, ...threads];
		case ActionType.UP_VOTE_THREAD:
			return handleUpVoteThread(threads, action);
		case ActionType.DOWN_VOTE_THREAD:
			return handleDownVoteThread(threads, action);
		case ActionType.NEUTRAL_VOTE_THREAD:
			return handleNeutralVoteThread(threads, action);
		default:
			return threads;
	}
};

export default threadsReducer;
