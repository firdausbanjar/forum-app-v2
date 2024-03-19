import { describe, expect, it } from '@jest/globals';
import { IThread } from '@/declarations/interfaces';
import threadsReducer from '@/states/threads/reducer';

/**
* Scenario Test
*
* - talkReducers function
*  - should return the initial state when given by unknown action
*  - should return the threads when given by RECEIVE_THREADS action
*  - should return the threads with the new thread when given by ADD_THREAD action
*  - should return the thread with the down vote thread when given by UP_VOTE_THREAD action
*  - should return the thread with the down vote thread when given by DOWN_VOTE_THREAD action
*  - should return the thread with the down vote thread when given by NEUTRAL_VOTE_THREAD action
*
*/

describe('threadsReducer function', () => {
	it('should return the initial state when given by unknown action', () => {
		const initialState: IThread[] = [];
		const action = { type: 'UNKNOWN' };

		const state = threadsReducer(initialState, action);

		expect(state).toEqual(initialState);
	});

	it('should return the threads when given by RECEIVE_THREADS action', () => {
		const initialState: IThread[] = [];
		const action = {
			type: 'RECEIVE_THREADS',
			payload: {
				threads: [
					{
						id: 'thread-Np47p4jhUXYhrhRn',
						title: 'Bagaimana pengalamanmu belajar Redux?',
						body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
						category: 'redux',
						createdAt: '2023-05-29T07:55:52.266Z',
						ownerId: 'user-mQhLzINW_w5TxxYf',
						totalComments: 0,
						upVotesBy: [],
						downVotesBy: [],
					},
					{
						id: 'thread-91KocEqYPRz68MhD',
						title: 'Halo! Selamat datang dan silakan perkenalkan diri kamu',
						body: '<div>Bagaimana kabarmu? Semoga baik-baik saja ya. Sekali lagi saya ucapkan selamat datang semuanya!</div><div><br></div><div>Seperti yang sudah disampaikan sebelumnya, pada diskusi ini kamu bisa memperkenalkan diri kamu dan juga berkenalan dengan teman sekelas lainnya.</div><div><br></div><div>Berhubungan baik dengan teman sekelas dan instruktur merupakan bagian penting dari pembelajaran di kelas ini, karena mereka dapat membantu jika kamu mengalami kendala dalam mempelajari dan memahami materi.&nbsp;&nbsp;</div><div><br></div><div>Oleh karena itu, luangkanlah waktumu untuk saling mengenal dan mencairkan suasana. Membangun interaksi dengan siswa lain akan membuat pengalaman belajar kamu jauh lebih menyenangkan dan menarik.&nbsp;</div><div><br></div><div>Beberapa hal yang dapat kamu tulis pada perkenalan diri:</div><div><br></div><div>- Siapa kamu dan dari mana kamu berasal?</div><div>- Apa pekerjaan atau pendidikan kamu saat ini?</div><div>- Kenapa kamu mengambil pelatihan ini? Apakah mungkin karena kamu sedang mengejar perubahan dalam karir, atau lainnya?</div>',
						category: 'perkenalan',
						createdAt: '2023-05-29T07:54:35.746Z',
						ownerId: 'user-aROWej8yYA1sOfHN',
						totalComments: 1,
						upVotesBy: [
							'user-mQhLzINW_w5TxxYf',
						],
						downVotesBy: [],
					},
				],
			},
		};

		const state = threadsReducer(initialState, action);

		expect(state).toEqual(action.payload.threads);
	});

	it('should return the threads with the new thread when given by ADD_THREAD action', () => {
		const initialState = [
			{
				id: 'thread-Np47p4jhUXYhrhRn',
				title: 'Bagaimana pengalamanmu belajar Redux?',
				body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
				category: 'redux',
				createdAt: '2023-05-29T07:55:52.266Z',
				ownerId: 'user-mQhLzINW_w5TxxYf',
				totalComments: 0,
				upVotesBy: [],
				downVotesBy: [],
			},
			{
				id: 'thread-91KocEqYPRz68MhD',
				title: 'Halo! Selamat datang dan silakan perkenalkan diri kamu',
				body: '<div>Bagaimana kabarmu? Semoga baik-baik saja ya. Sekali lagi saya ucapkan selamat datang semuanya!</div><div><br></div><div>Seperti yang sudah disampaikan sebelumnya, pada diskusi ini kamu bisa memperkenalkan diri kamu dan juga berkenalan dengan teman sekelas lainnya.</div><div><br></div><div>Berhubungan baik dengan teman sekelas dan instruktur merupakan bagian penting dari pembelajaran di kelas ini, karena mereka dapat membantu jika kamu mengalami kendala dalam mempelajari dan memahami materi.&nbsp;&nbsp;</div><div><br></div><div>Oleh karena itu, luangkanlah waktumu untuk saling mengenal dan mencairkan suasana. Membangun interaksi dengan siswa lain akan membuat pengalaman belajar kamu jauh lebih menyenangkan dan menarik.&nbsp;</div><div><br></div><div>Beberapa hal yang dapat kamu tulis pada perkenalan diri:</div><div><br></div><div>- Siapa kamu dan dari mana kamu berasal?</div><div>- Apa pekerjaan atau pendidikan kamu saat ini?</div><div>- Kenapa kamu mengambil pelatihan ini? Apakah mungkin karena kamu sedang mengejar perubahan dalam karir, atau lainnya?</div>',
				category: 'perkenalan',
				createdAt: '2023-05-29T07:54:35.746Z',
				ownerId: 'user-aROWej8yYA1sOfHN',
				totalComments: 1,
				upVotesBy: [
					'user-mQhLzINW_w5TxxYf',
				],
				downVotesBy: [],
			},
		];

		const action = {
			type: 'ADD_THREAD',
			payload: {
				thread: {
					id: 'thread-1',
					title: 'Thread Pertama',
					body: 'Ini adalah thread pertama',
					category: 'General',
					createdAt: '2021-06-21T07:00:00.000Z',
					ownerId: 'user-1',
					upVotesBy: [],
					downVotesBy: [],
					totalComments: 0,
				},
			},
		};

		const state = threadsReducer(initialState, action);

		expect(state).toEqual([action.payload.thread, ...initialState]);
	});

	it('should return the thread with the down vote thread when given by UP_VOTE_THREAD action', () => {
		const initialState = [
			{
				id: 'thread-Np47p4jhUXYhrhRn',
				title: 'Bagaimana pengalamanmu belajar Redux?',
				body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
				category: 'redux',
				createdAt: '2023-05-29T07:55:52.266Z',
				ownerId: 'user-mQhLzINW_w5TxxYf',
				totalComments: 0,
				upVotesBy: [],
				downVotesBy: [],
			},
		];

		const action = {
			type: 'UP_VOTE_THREAD',
			payload: {
				threadId: 'thread-Np47p4jhUXYhrhRn',
				userId: 'user-1',
			},
		};

		const state = threadsReducer(initialState, action);

		expect(state).toEqual([
			{
				...initialState[0],
				upVotesBy: [action.payload.userId],
			},
		]);
	});

	it('should return the thread with the down vote thread when given by DOWN_VOTE_THREAD action', () => {
		const initialState = [
			{
				id: 'thread-Np47p4jhUXYhrhRn',
				title: 'Bagaimana pengalamanmu belajar Redux?',
				body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
				category: 'redux',
				createdAt: '2023-05-29T07:55:52.266Z',
				ownerId: 'user-mQhLzINW_w5TxxYf',
				totalComments: 0,
				upVotesBy: [],
				downVotesBy: [],
			},
		];

		const action = {
			type: 'DOWN_VOTE_THREAD',
			payload: {
				threadId: 'thread-Np47p4jhUXYhrhRn',
				userId: 'user-1',
			},
		};

		const state = threadsReducer(initialState, action);

		expect(state).toEqual([
			{
				...initialState[0],
				downVotesBy: [action.payload.userId],
			},
		]);
	});

	it('should return the thread with the down vote thread when given by NEUTRAL_VOTE_THREAD action', () => {
		const initialState = [
			{
				id: 'thread-Np47p4jhUXYhrhRn',
				title: 'Bagaimana pengalamanmu belajar Redux?',
				body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
				category: 'redux',
				createdAt: '2023-05-29T07:55:52.266Z',
				ownerId: 'user-mQhLzINW_w5TxxYf',
				totalComments: 0,
				upVotesBy: ['user-1'],
				downVotesBy: ['user-2'],
			},
		];

		const actionUser1 = {
			type: 'NEUTRAL_VOTE_THREAD',
			payload: {
				threadId: 'thread-Np47p4jhUXYhrhRn',
				userId: 'user-1',
			},
		};

		const actionUser2 = {
			type: 'NEUTRAL_VOTE_THREAD',
			payload: {
				threadId: 'thread-Np47p4jhUXYhrhRn',
				userId: 'user-2',
			},
		};

		const stateUser1 = threadsReducer(initialState, actionUser1);
		const stateUser2 = threadsReducer(initialState, actionUser2);

		expect(stateUser1).toEqual([
			{
				...initialState[0],
				upVotesBy: [],
			},
		]);

		expect(stateUser2).toEqual([
			{
				...initialState[0],
				downVotesBy: [],
			},
		]);
	});
});
