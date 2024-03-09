import { ILeaderboard, IProfile } from '@/declarations/interfaces';
import { useAppSelector } from '@/states/hooks';
import { RootState } from '@/states/store';
import UserInfo from './UserInfo';

type LeaderboardItemProps = {
	rangking: number
	leaderboard: ILeaderboard
};

const LeaderboardItem = ({ rangking, leaderboard }: LeaderboardItemProps) => {
	const authUser: IProfile = useAppSelector((states: RootState) => states.authUser);

	return (
		<div className="flex justify-between items-center -my-2 mt-8 w-full">
			<p className="text-2xl font-semibold">{rangking}</p>
			<div className="flex justify-center items-center">
				<UserInfo
					name={leaderboard.user.name}
					nameSize="2xl"
					avatar={leaderboard.user.avatar}
					imgSize={40}
				/>
				{authUser?.id === leaderboard.user.id && (<p className="text-2xl font-semibold ml-2">{'(Anda)'}</p>)}
			</div>
			<p className="text-2xl font-semibold">{leaderboard.score}</p>
		</div>
	);
};

export default LeaderboardItem;
