import { Dispatch } from '@reduxjs/toolkit';
import { IComment, IThreadDetail } from '@/declarations/interfaces';
import { CommentT } from '@/declarations/types';
import api from '@/utils/api';

const ActionType = {
	RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
	CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
	ADD_COMMENT: 'ADD_COMMENT',
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

export {
	ActionType,
	asyncAddComment,
	asyncReceiveThreadDetail,
	clearThreadDetailActionCreator,
	receiveThreadDetailActionCreator,
};
