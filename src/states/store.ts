import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/reducer';
import categoryReducer from './category/reducer';
import isPreloadReducer from './isPreload/reducer';
import leaderboardReducer from './leaderboard/reducer';
import threadDetailReducer from './threadDetail/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './user/reducer';

export const makeStore = () => {
	return configureStore({
		reducer: {
			isPreload: isPreloadReducer,
			authUser: authReducer,
			users: usersReducer,
			threads: threadsReducer,
			threadDetail: threadDetailReducer,
			category: categoryReducer,
			leaderboard: leaderboardReducer,
		},
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
