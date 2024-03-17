import {
	afterEach,
	beforeEach,
	describe,
	it,
	jest,
} from '@jest/globals';
import {
	asyncReceiveThreadDetail,
	clearThreadDetailActionCreator,
	receiveThreadDetailActionCreator,
} from '@/states/threadDetail/action';
import api from '@/utils/api';

/**
 * Skenario Test
 * - asyncReceiveThreadsAndUser thunk
 *   - should dispatch action correctly when data fetching success
 *   - should dispatch action and call alert correctly when data fetching failed
 */

const fakeThreadDetailResponse = {
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

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncReceiveThreadDetail thunk', () => {
	let _getThreadDetail: any = null;

	beforeEach(() => {
		_getThreadDetail = api.getThreadDetail;
	});

	afterEach(() => {
		api.getThreadDetail = _getThreadDetail;

		_getThreadDetail = null;
	});

	it('should dispatch action correctly when data fetching success', async () => {
		api.getThreadDetail = () => Promise.resolve(fakeThreadDetailResponse);

		const dispatch: any = jest.fn();

		await asyncReceiveThreadDetail(fakeThreadDetailResponse.id)(dispatch);

		expect(dispatch).toHaveBeenCalledWith(clearThreadDetailActionCreator());
		expect(dispatch)
			.toHaveBeenCalledWith(receiveThreadDetailActionCreator(fakeThreadDetailResponse));
	});

	it('should dispatch action and call alert correctly when data fetching failed', async () => {
		api.getThreadDetail = () => Promise.reject(fakeErrorResponse);

		const dispatch: any = jest.fn();
		window.alert = jest.fn();

		await asyncReceiveThreadDetail(fakeThreadDetailResponse.id)(dispatch);

		expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
	});
});
