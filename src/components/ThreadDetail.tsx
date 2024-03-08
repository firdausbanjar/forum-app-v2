import { IThreadDetail } from '@/declarations/interfaces';
import ThreadAction from './ThreadAction';
import UserInfo from './UserInfo';

type ThreadDetailProps = {
	thread: IThreadDetail
};

const ThreadDetail = ({ thread }: ThreadDetailProps) => {
	return (
		<div className="mt-2 bg-white shadow-2xl p-10 text-wrap rounded-2xl">
			<h3 className="text-2xl font-bold mb-3">{thread.title}</h3>
			<UserInfo
				dateSize="sm"
				imgSize={45}
				nameSize="xl"
				createdAt={thread.createdAt}
				{...thread.owner}
			/>
			<span className="block bg-slate-200 py-1 px-2 rounded-lg border border-black text-sm mt-6 w-fit">
				{`#${thread.category}`}
			</span>
			<div
				className="mt-6 mb-8"
				dangerouslySetInnerHTML={{ __html: thread.body }}
			/>
			<ThreadAction
				iconSize={20}
				totalComments={thread.comments.length}
				totalLike={thread.upVotesBy.length}
				totalDislike={thread.downVotesBy.length}
			/>
		</div>
	);
};

export default ThreadDetail;
