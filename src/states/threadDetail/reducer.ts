import { IThreadDetail } from '@/declarations/interfaces';
import { ActionType } from './action';

const threadDetailReducer = (threadDetail: IThreadDetail | null = null, action: any = {}) => {
	switch (action.type) {
		case ActionType.RECEIVE_THREAD_DETAIL:
			return action.payload.threadDetail;
		case ActionType.CLEAR_THREAD_DETAIL:
			return null;
		case ActionType.ADD_COMMENT:
			return {
				...threadDetail,
				comments: [
					action.payload.comment,
					...threadDetail?.comments!,
				],
			};
		default:
			return threadDetail;
	}
};

export default threadDetailReducer;
