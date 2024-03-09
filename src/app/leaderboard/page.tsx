'use client';

import { useEffect } from 'react';
import LeaderboardList from '@/components/LeaderboardList';
import { ILeaderboard } from '@/declarations/interfaces';
import { useAppDispatch, useAppSelector } from '@/states/hooks';
import { asyncReceiveLeaderboard } from '@/states/leaderboard/action';
import { RootState } from '@/states/store';

const Leaderboard = () => {
	const leaderboard: ILeaderboard[] = useAppSelector((states: RootState) => states.leaderboard);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(asyncReceiveLeaderboard());
	}, [dispatch]);

	const leaderboardDesc = leaderboard.sort((a, b) => b.score - a.score);

	return (
		<section className="mt-3 flex justify-center w-full">
			<LeaderboardList leaderboard={leaderboardDesc} />
		</section>
	);
};

export default Leaderboard;
