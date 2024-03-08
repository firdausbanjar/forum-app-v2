import { Dispatch } from '@reduxjs/toolkit';
import { IThread } from '@/declarations/interfaces';
import { ThreadT } from '@/declarations/types';
import api from '@/utils/api';

const ActionType = {
	RECEIVE_THREADS: 'RECEIVE_THREADS',
	ADD_THREAD: 'ADD_THREAD',
	UP_VOTE_THREAD: 'UP_VOTE_THREAD',
	DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
	NEUTRAL_VOTE_THREAD: 'NEUTRAL_VOTE_THREAD',
};

const receiveThreadsActionCreator = (threads: IThread[]) => {
	return {
		type: ActionType.RECEIVE_THREADS,
		payload: {
			threads,
		},
	};
};

const addThreadActionCreator = (thread: IThread) => {
	return {
		type: ActionType.ADD_THREAD,
		payload: {
			thread,
		},
	};
};

const upVoteThreadActionCreator = (userId: string) => {
	return {
		type: ActionType.UP_VOTE_THREAD,
		payload: {
			userId,
		},
	};
};

const downVoteThreadActionCreator = (userId: string) => {
	return {
		type: ActionType.DOWN_VOTE_THREAD,
		payload: {
			userId,
		},
	};
};

const neutralVoteThreadActionCreator = (userId: string) => {
	return {
		type: ActionType.NEUTRAL_VOTE_THREAD,
		payload: {
			userId,
		},
	};
};

const asyncAddThread = ({ title, body, category }: ThreadT) => {
	return async (dispatch: Dispatch) => {
		try {
			const thread = await api.createThread({ title, body, category });
			dispatch(addThreadActionCreator(thread));
		} catch (error: any) {
			alert(error.message);
		}
	};
};

const asyncUpVoteThread = (threadId: string) => {
	return async (dispatch: Dispatch) => {
		try {
			const vote = await api.upVoteThread(threadId);
			dispatch(upVoteThreadActionCreator(vote.userId));
		} catch (error: any) {
			alert(error.message);
		}
	};
};

const asyncDownVoteThread = (threadId: string) => {
	return async (dispatch: Dispatch) => {
		try {
			const vote = await api.downVoteThread(threadId);
			dispatch(downVoteThreadActionCreator(vote.userId));
		} catch (error: any) {
			alert(error.message);
		}
	};
};

const asyncNeutralVoteThread = (threadId: string) => {
	return async (dispatch: Dispatch) => {
		try {
			const vote = await api.neutralVoteThread(threadId);
			dispatch(downVoteThreadActionCreator(vote.userId));
		} catch (error: any) {
			alert(error.message);
		}
	};
};

export {
	ActionType,
	asyncAddThread, downVoteThreadActionCreator,
	neutralVoteThreadActionCreator, receiveThreadsActionCreator,
	upVoteThreadActionCreator,
};
