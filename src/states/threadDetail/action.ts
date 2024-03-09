import { Dispatch } from '@reduxjs/toolkit';
import { IComment, IThreadDetail } from '@/declarations/interfaces';
import { CommentT, VoteCommentT } from '@/declarations/types';
import api from '@/utils/api';

const ActionType = {
	RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
	CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
	ADD_COMMENT: 'ADD_COMMENT',
	UP_VOTE_THREAD_DETAIL: 'UP_VOTE_THREAD_DETAIL',
	DOWN_VOTE_THREAD_DETAIL: 'DOWN_VOTE_THREAD_DETAIL',
	NEUTRAL_VOTE_THREAD_DETAIL: 'NEUTRAL_VOTE_THREAD_DETAIL',
	UP_VOTE_COMMENT: 'UP_VOTE_COMMENT',
	DOWN_VOTE_COMMENT: 'DOWN_VOTE_COMMENT',
	NEUTRAL_VOTE_COMMENT: 'NEUTRAL_VOTE_COMMENT',
};

const receiveThreadDetailActionCreator = (threadDetail: IThreadDetail) => {
	return {
		type: ActionType.RECEIVE_THREAD_DETAIL,
		payload: {
			threadDetail,
		},
	};
};

const clearThreadDetailActionCreator = () => {
	return {
		type: ActionType.CLEAR_THREAD_DETAIL,
	};
};

const addCommentActionCreator = (comment: IComment) => {
	return {
		type: ActionType.ADD_COMMENT,
		payload: {
			comment,
		},
	};
};

const upVoteThreadDetailActionCreator = (userId: string) => {
	return {
		type: ActionType.UP_VOTE_THREAD_DETAIL,
		payload: {
			userId,
		},
	};
};

const downVoteThreadDetailActionCreator = (userId: string) => {
	return {
		type: ActionType.DOWN_VOTE_THREAD_DETAIL,
		payload: {
			userId,
		},
	};
};

const neutralVoteThreadDetailActionCreator = (userId: string) => {
	return {
		type: ActionType.NEUTRAL_VOTE_THREAD_DETAIL,
		payload: {
			userId,
		},
	};
};

const upVoteCommentActionCreator = ({ commentId, userId }: {
	commentId: string, userId: string
}) => {
	return {
		type: ActionType.UP_VOTE_COMMENT,
		payload: {
			commentId,
			userId,
		},
	};
};

const downVoteCommentActionCreator = ({ commentId, userId }: {
	commentId: string, userId: string
}) => {
	return {
		type: ActionType.DOWN_VOTE_COMMENT,
		payload: {
			commentId,
			userId,
		},
	};
};

const neutralVoteCommentActionCreator = ({ commentId, userId }: {
	commentId: string, userId: string
}) => {
	return {
		type: ActionType.NEUTRAL_VOTE_COMMENT,
		payload: {
			commentId,
			userId,
		},
	};
};

const asyncReceiveThreadDetail = (threadId: string) => {
	return async (dispatch: Dispatch) => {
		dispatch(clearThreadDetailActionCreator());

		try {
			const threadDetail = await api.getThreadDetail(threadId);
			dispatch(receiveThreadDetailActionCreator(threadDetail));
		} catch (error: any) {
			alert(error.message);
		}
	};
};

const asyncAddComment = ({ threadId, content }: CommentT) => {
	return async (dispatch: Dispatch) => {
		try {
			const comment = await api.createComment({ threadId, content });
			dispatch(addCommentActionCreator(comment));
		} catch (error: any) {
			alert(error.message);
		}
	};
};

const asyncUpVoteThreadDetail = (threadId: string) => {
	return async (dispatch: Dispatch) => {
		try {
			const vote = await api.upVoteThread(threadId);
			dispatch(upVoteThreadDetailActionCreator(vote.userId));
		} catch (error: any) {
			alert(error.message);
		}
	};
};

const asyncDownVoteThreadDetail = (threadId: string) => {
	return async (dispatch: Dispatch) => {
		try {
			const vote = await api.downVoteThread(threadId);
			dispatch(downVoteThreadDetailActionCreator(vote.userId));
		} catch (error: any) {
			alert(error.message);
		}
	};
};

const asyncNeutralVoteThreadDetail = (threadId: string) => {
	return async (dispatch: Dispatch) => {
		try {
			const vote = await api.neutralVoteThread(threadId);
			dispatch(neutralVoteThreadDetailActionCreator(vote.userId));
		} catch (error: any) {
			alert(error.message);
		}
	};
};

const asyncUpVoteComment = ({ threadId, commentId }: VoteCommentT) => {
	return async (dispatch: Dispatch) => {
		try {
			const vote = await api.upVoteComment({ threadId, commentId });
			dispatch(upVoteCommentActionCreator({ commentId, userId: vote.userId }));
		} catch (error: any) {
			alert(error.message);
		}
	};
};

const asyncDownVoteComment = ({ threadId, commentId }: VoteCommentT) => {
	return async (dispatch: Dispatch) => {
		try {
			const vote = await api.downVoteComment({ threadId, commentId });
			dispatch(downVoteCommentActionCreator({ commentId, userId: vote.userId }));
		} catch (error: any) {
			alert(error.message);
		}
	};
};

const asyncNeutralVoteComment = ({ threadId, commentId }: VoteCommentT) => {
	return async (dispatch: Dispatch) => {
		try {
			const vote = await api.downVoteComment({ threadId, commentId });
			dispatch(neutralVoteCommentActionCreator({ commentId, userId: vote.userId }));
		} catch (error: any) {
			alert(error.message);
		}
	};
};

export {
	ActionType,
	addCommentActionCreator,
	asyncAddComment,
	asyncDownVoteComment,
	asyncDownVoteThreadDetail,
	asyncNeutralVoteComment,
	asyncNeutralVoteThreadDetail,
	asyncReceiveThreadDetail,
	asyncUpVoteComment,
	asyncUpVoteThreadDetail,
	clearThreadDetailActionCreator,
	downVoteCommentActionCreator,
	downVoteThreadDetailActionCreator,
	neutralVoteCommentActionCreator,
	neutralVoteThreadDetailActionCreator,
	receiveThreadDetailActionCreator,
	upVoteCommentActionCreator,
	upVoteThreadDetailActionCreator,
};
