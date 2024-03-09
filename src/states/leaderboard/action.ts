import { Dispatch } from '@reduxjs/toolkit';
import { ILeaderboard } from '@/declarations/interfaces';
import api from '@/utils/api';

const ActionType = {
	RECEIVE_LEADERBOARD: 'RECEIVE_LEADERBOARD',
};

const receiveLeaderboardActionCreator = (leaderboard: ILeaderboard[]) => {
	return {
		type: ActionType.RECEIVE_LEADERBOARD,
		payload: {
			leaderboard,
		},
	};
};

const asyncReceiveLeaderboard = () => {
	return async (dispatch: Dispatch) => {
		try {
			const leaderboard = await api.getLeaderboard();
			dispatch(receiveLeaderboardActionCreator(leaderboard));
		} catch (error: any) {
			alert(error.message);
		}
	};
};

export {
	ActionType,
	asyncReceiveLeaderboard,
	receiveLeaderboardActionCreator,
};
