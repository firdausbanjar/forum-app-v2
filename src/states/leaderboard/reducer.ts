import { ILeaderboard } from '@/declarations/interfaces';
import { ActionType } from './action';

const leaderboardReducer = (leaderboard: ILeaderboard[] = [], action: any = {}) => {
	switch (action.type) {
		case ActionType.RECEIVE_LEADERBOARD:
			return action.payload.leaderboard;
		default:
			return leaderboard;
	}
};

export default leaderboardReducer;
