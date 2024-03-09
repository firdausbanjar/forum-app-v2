import { IThreadDetail } from '@/declarations/interfaces';
import { ActionType } from './action';
import {
	handleAddComment,
	handleDownVoteTComment,
	handleDownVoteThreadDetail,
	handleNeutralVoteTComment,
	handleNeutralVoteThreadDetail,
	handleUpVoteTComment,
	handleUpVoteThreadDetail,
} from './handler';

const threadDetailReducer = (threadDetail: IThreadDetail | null = null, action: any = {}) => {
	switch (action.type) {
		case ActionType.RECEIVE_THREAD_DETAIL:
			return action.payload.threadDetail;
		case ActionType.CLEAR_THREAD_DETAIL:
			return null;
		case ActionType.ADD_COMMENT:
			return handleAddComment(threadDetail, action);
		case ActionType.UP_VOTE_THREAD_DETAIL:
			return handleUpVoteThreadDetail(threadDetail, action);
		case ActionType.DOWN_VOTE_THREAD_DETAIL:
			return handleDownVoteThreadDetail(threadDetail, action);
		case ActionType.NEUTRAL_VOTE_THREAD_DETAIL:
			return handleNeutralVoteThreadDetail(threadDetail, action);
		case ActionType.UP_VOTE_COMMENT:
			return handleUpVoteTComment(threadDetail, action);
		case ActionType.DOWN_VOTE_COMMENT:
			return handleDownVoteTComment(threadDetail, action);
		case ActionType.NEUTRAL_VOTE_COMMENT:
			return handleNeutralVoteTComment(threadDetail, action);
		default:
			return threadDetail;
	}
};

export default threadDetailReducer;
