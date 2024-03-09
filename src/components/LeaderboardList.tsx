import { ILeaderboard } from '@/declarations/interfaces';
import LeaderboardItem from './LeaderboardItem';

type LeaderboardListProps = {
	leaderboard: ILeaderboard[]
};

const LeaderboardList = ({ leaderboard }: LeaderboardListProps) => {
	return (
		<div className="mb-28 flex justify-center items-center flex-col bg-white p-10 rounded-2xl xl:w-8/12 lg:w-9/12 md:w-10/12 sm:w-11/12 w-full">
			<h2 className="text-3xl font-bold text-black">{'Papan Peringkat'}</h2>
			{leaderboard.map((leader, key) => (
				<LeaderboardItem
					key={leader.user.id}
					rangking={key + 1}
					leaderboard={leader}
				/>
			))}
		</div>
	);
};

export default LeaderboardList;
