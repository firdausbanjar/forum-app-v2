import {
	afterEach,
	beforeEach,
	describe,
	expect,
	it,
	jest,
} from '@jest/globals';
import { asyncReceiveThreadsAndUser } from '@/states/shared/action';
import { receiveThreadsActionCreator } from '@/states/threads/action';
import { receiveUsersActionCreator } from '@/states/user/action';
import api from '@/utils/api';

/**
 * Skenario Test
 * - asyncReceiveThreadsAndUser thunk
 *   - should dispatch action correctly when data fetching success
 *   - should dispatch action and call alert correctly when data fetching failed
 */

const fakeThreadsResponse = [
	{
		id: 'thread-Np47p4jhUXYhrhRn',
		title: 'Bagaimana pengalamanmu belajar Redux?',
		body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
		category: 'redux',
		createdAt: '2023-05-29T07:55:52.266Z',
		ownerId: 'user-mQhLzINW_w5TxxYf',
		totalComments: 2,
		upVotesBy: [
			'user-bC7m3pqpa6r-5d_h',
		],
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

const fakeUsersResponse = [
	{
		id: 'user-mQhLzINW_w5TxxYf',
		name: 'Dimas Saputra',
		email: 'dimas@dicoding.com',
		avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
	},
	{
		id: 'user-aROWej8yYA1sOfHN',
		name: 'Dicoding',
		email: 'admin@dicoding.com',
		avatar: 'https://ui-avatars.com/api/?name=Dicoding&background=random',
	},
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncReceiveThreadsAndUser thunk', () => {
	let _getAllThreads: any = null;
	let _getAllUsers: any = null;

	beforeEach(() => {
		_getAllThreads = api.getAllThreads;
		_getAllUsers = api.getAllUsers;
	});

	afterEach(() => {
		api.getAllThreads = _getAllThreads;
		api.getAllUsers = _getAllUsers;

		_getAllThreads = null;
		_getAllUsers = null;
	});

	it('should dispatch action correctly when data fetching success', async () => {
		api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);
		api.getAllUsers = () => Promise.resolve(fakeUsersResponse);

		const dispatch: any = jest.fn();

		await asyncReceiveThreadsAndUser()(dispatch);

		expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse));
		expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse));
	});

	it('should dispatch action and call alert correctly when data fetching failed', async () => {
		api.getAllThreads = () => Promise.reject(fakeErrorResponse);
		api.getAllUsers = () => Promise.reject(fakeErrorResponse);

		const dispatch: any = jest.fn();
		window.alert = jest.fn();

		await asyncReceiveThreadsAndUser()(dispatch);

		expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
	});
});
