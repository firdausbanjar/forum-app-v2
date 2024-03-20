import { describe, expect, it } from '@jest/globals';
import { IThreadDetail } from '@/declarations/interfaces';
import threadDetailReducer from '@/states/threadDetail/reducer';

/**
* Scenario Test
*
* - talkReducers function
*  - should return the initial state when given by unknown action
*  - should return the thread detail when given by RECEIVE_THREAD_DETAIL action
*  - should return the thread detail with new comment when given by ADD_COMMENT action
*  - should return the thread detail with the up vote thread when given by UP_VOTE_THREAD_DETAIL action
*  - should return the thread detail with the down vote thread when given by DOWN_VOTE_THREAD_DETAIL action
*  - should return the thread detail with the neutral vote thread when given by NEUTRAL_VOTE_THREAD_DETAIL action
*  - should return the thread detail with the up vote comment when given by UP_VOTE_COMMENT action
*  - should return the thread detail with the down vote comment when given by DOWN_VOTE_COMMENT action
*  - should return the thread detail with the neutral vote comment when given by NEUTRAL_VOTE_COMMENT action
*
*/

describe('threadDetailReducer function', () => {
	it('should return the initial state when given by unknown action', () => {
		const initialState: null = null;
		const action = { type: 'UNKNOWN' };

		const state = threadDetailReducer(initialState, action);

		expect(state).toEqual(initialState);
	});

	it('should return the thread detail when given by RECEIVE_THREAD_DETAIL action', () => {
		const initialState: null = null;

		const action = {
			type: 'RECEIVE_THREAD_DETAIL',
			payload: {
				threadDetail: {
					id: 'thread-Np47p4jhUXYhrhRn',
					title: 'Bagaimana pengalamanmu belajar Redux?',
					body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
					createdAt: '2023-05-29T07:55:52.266Z',
					owner: {
						id: 'user-mQhLzINW_w5TxxYf',
						name: 'Dimas Saputra',
						avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
					},
					category: 'redux',
					comments: [],
					upVotesBy: [],
					downVotesBy: [],
				},
			},

		};

		const state = threadDetailReducer(initialState, action);

		expect(state).toEqual(action.payload.threadDetail);
	});

	it('should return the thread detail with new comment when given by ADD_COMMENT action', () => {
		const initialState: IThreadDetail = {
			id: 'thread-Np47p4jhUXYhrhRn',
			title: 'Bagaimana pengalamanmu belajar Redux?',
			body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
			createdAt: '2023-05-29T07:55:52.266Z',
			owner: {
				id: 'user-mQhLzINW_w5TxxYf',
				name: 'Dimas Saputra',
				avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
			},
			category: 'redux',
			comments: [],
			upVotesBy: [],
			downVotesBy: [],
		};

		const action = {
			type: 'ADD_COMMENT',
			payload: {
				comment: {
					id: 'comment-fsVogPRfEpe6hACF',
					content: 'komentar 1',
					createdAt: '2024-03-19T23:58:48.820Z',
					owner: {
						id: 'user-Vlm2ZUyCjHxsW6Fs',
						name: 'firdaus',
						avatar: 'https://ui-avatars.com/api/?name=firdaus&background=random',
					},
					upVotesBy: [],
					downVotesBy: [],
				},

			},
		};

		const state = threadDetailReducer(initialState, action);

		expect(state).toEqual({
			...initialState,
			comments: [action.payload.comment, ...initialState.comments],
		});
	});

	it('should return the thread detail with the up vote thread when given by UP_VOTE_THREAD_DETAIL action', () => {
		const initialState: IThreadDetail = {
			id: 'thread-Np47p4jhUXYhrhRn',
			title: 'Bagaimana pengalamanmu belajar Redux?',
			body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
			createdAt: '2023-05-29T07:55:52.266Z',
			owner: {
				id: 'user-mQhLzINW_w5TxxYf',
				name: 'Dimas Saputra',
				avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
			},
			category: 'redux',
			comments: [],
			upVotesBy: [],
			downVotesBy: [],
		};

		const action = {
			type: 'UP_VOTE_THREAD_DETAIL',
			payload: {
				userId: 'user-Vlm2ZUyCjHxsW6Fs',
			},
		};

		const state = threadDetailReducer(initialState, action);

		expect(state).toEqual({
			...initialState,
			upVotesBy: [...initialState.upVotesBy, action.payload.userId],
		});
	});

	it('should return the thread detail with the down vote thread when given by DOWN_VOTE_THREAD_DETAIL action', () => {
		const initialState: IThreadDetail = {
			id: 'thread-Np47p4jhUXYhrhRn',
			title: 'Bagaimana pengalamanmu belajar Redux?',
			body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
			createdAt: '2023-05-29T07:55:52.266Z',
			owner: {
				id: 'user-mQhLzINW_w5TxxYf',
				name: 'Dimas Saputra',
				avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
			},
			category: 'redux',
			comments: [],
			upVotesBy: [],
			downVotesBy: [],
		};

		const action = {
			type: 'DOWN_VOTE_THREAD_DETAIL',
			payload: {
				userId: 'user-Vlm2ZUyCjHxsW6Fs',
			},
		};

		const state = threadDetailReducer(initialState, action);

		expect(state).toEqual({
			...initialState,
			downVotesBy: [...initialState.upVotesBy, action.payload.userId],
		});
	});

	it('should return the thread detail with the neutral vote thread when given by NEUTRAL_VOTE_THREAD_DETAIL action', () => {
		const initialState: IThreadDetail = {
			id: 'thread-Np47p4jhUXYhrhRn',
			title: 'Bagaimana pengalamanmu belajar Redux?',
			body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
			createdAt: '2023-05-29T07:55:52.266Z',
			owner: {
				id: 'user-mQhLzINW_w5TxxYf',
				name: 'Dimas Saputra',
				avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
			},
			category: 'redux',
			comments: [],
			upVotesBy: ['user-1'],
			downVotesBy: ['user-2'],
		};

		const actionUser1 = {
			type: 'NEUTRAL_VOTE_THREAD_DETAIL',
			payload: {
				userId: 'user-1',
			},
		};

		const actionUser2 = {
			type: 'NEUTRAL_VOTE_THREAD_DETAIL',
			payload: {
				userId: 'user-2',
			},
		};

		const stateUser1 = threadDetailReducer(initialState, actionUser1);
		const stateUser2 = threadDetailReducer(initialState, actionUser2);

		expect(stateUser1).toEqual({
			...initialState,
			upVotesBy: initialState.upVotesBy.filter((userId) => {
				return userId !== actionUser1.payload.userId;
			}),
		});

		expect(stateUser2).toEqual({
			...initialState,
			downVotesBy: initialState.downVotesBy.filter((userId) => {
				return userId !== actionUser2.payload.userId;
			}),
		});
	});

	it('should return the thread detail with the up vote comment when given by UP_VOTE_COMMENT action', () => {
		const initialState: IThreadDetail = {
			id: 'thread-Np47p4jhUXYhrhRn',
			title: 'Bagaimana pengalamanmu belajar Redux?',
			body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
			createdAt: '2023-05-29T07:55:52.266Z',
			owner: {
				id: 'user-mQhLzINW_w5TxxYf',
				name: 'Dimas Saputra',
				avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
			},
			category: 'redux',
			comments: [
				{
					id: 'comment-fsVogPRfEpe6hACF',
					content: 'komentar 1',
					createdAt: '2024-03-19T23:58:48.820Z',
					owner: {
						id: 'user-Vlm2ZUyCjHxsW6Fs',
						name: 'firdaus',
						avatar: 'https://ui-avatars.com/api/?name=firdaus&background=random',
					},
					upVotesBy: [],
					downVotesBy: [],
				},
			],
			upVotesBy: [],
			downVotesBy: [],
		};

		const action = {
			type: 'UP_VOTE_COMMENT',
			payload: {
				commentId: 'comment-fsVogPRfEpe6hACF',
				userId: 'user-1',
			},
		};

		const state = threadDetailReducer(initialState, action);

		expect(state).toEqual({
			...initialState,
			comments: [
				{
					...initialState.comments[0],
					upVotesBy: [...initialState.comments[0].upVotesBy, action.payload.userId],
				},
			],
		});
	});

	it('should return the thread detail with the down vote comment when given by DOWN_VOTE_COMMENT action', () => {
		const initialState: IThreadDetail = {
			id: 'thread-Np47p4jhUXYhrhRn',
			title: 'Bagaimana pengalamanmu belajar Redux?',
			body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
			createdAt: '2023-05-29T07:55:52.266Z',
			owner: {
				id: 'user-mQhLzINW_w5TxxYf',
				name: 'Dimas Saputra',
				avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
			},
			category: 'redux',
			comments: [
				{
					id: 'comment-fsVogPRfEpe6hACF',
					content: 'komentar 1',
					createdAt: '2024-03-19T23:58:48.820Z',
					owner: {
						id: 'user-Vlm2ZUyCjHxsW6Fs',
						name: 'firdaus',
						avatar: 'https://ui-avatars.com/api/?name=firdaus&background=random',
					},
					upVotesBy: [],
					downVotesBy: [],
				},
			],
			upVotesBy: [],
			downVotesBy: [],
		};

		const action = {
			type: 'DOWN_VOTE_COMMENT',
			payload: {
				commentId: 'comment-fsVogPRfEpe6hACF',
				userId: 'user-1',
			},
		};

		const state = threadDetailReducer(initialState, action);

		expect(state).toEqual({
			...initialState,
			comments: [
				{
					...initialState.comments[0],
					downVotesBy: [...initialState.comments[0].downVotesBy, action.payload.userId],
				},
			],
		});
	});

	it('should return the thread detail with the neutral vote comment when given by NEUTRAL_VOTE_COMMENT action', () => {
		const initialState: IThreadDetail = {
			id: 'thread-Np47p4jhUXYhrhRn',
			title: 'Bagaimana pengalamanmu belajar Redux?',
			body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
			createdAt: '2023-05-29T07:55:52.266Z',
			owner: {
				id: 'user-mQhLzINW_w5TxxYf',
				name: 'Dimas Saputra',
				avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
			},
			category: 'redux',
			comments: [
				{
					id: 'comment-fsVogPRfEpe6hACF',
					content: 'komentar 1',
					createdAt: '2024-03-19T23:58:48.820Z',
					owner: {
						id: 'user-Vlm2ZUyCjHxsW6Fs',
						name: 'firdaus',
						avatar: 'https://ui-avatars.com/api/?name=firdaus&background=random',
					},
					upVotesBy: ['user-1'],
					downVotesBy: ['user-2'],
				},
			],
			upVotesBy: [],
			downVotesBy: [],
		};

		const actionUser1 = {
			type: 'NEUTRAL_VOTE_COMMENT',
			payload: {
				commentId: 'comment-fsVogPRfEpe6hACF',
				userId: 'user-1',
			},
		};

		const actionUser2 = {
			type: 'NEUTRAL_VOTE_COMMENT',
			payload: {
				commentId: 'comment-fsVogPRfEpe6hACF',
				userId: 'user-2',
			},
		};

		const stateUser1 = threadDetailReducer(initialState, actionUser1);
		const stateUser2 = threadDetailReducer(initialState, actionUser2);

		expect(stateUser1).toEqual({
			...initialState,
			comments: [
				{
					...initialState.comments[0],
					upVotesBy: initialState.comments[0].upVotesBy.filter((userId) => {
						return userId !== actionUser1.payload.userId;
					}),
				},
			],
		});

		expect(stateUser2).toEqual({
			...initialState,
			comments: [
				{
					...initialState.comments[0],
					downVotesBy: initialState.comments[0].downVotesBy.filter((userId) => {
						return userId !== actionUser2.payload.userId;
					}),
				},
			],
		});
	});
});
