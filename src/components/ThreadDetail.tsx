import { IThreadDetail } from '@/declarations/interfaces';
import { useAppDispatch } from '@/states/hooks';
import { asyncDownVoteThreadDetail, asyncNeutralVoteThreadDetail, asyncUpVoteThreadDetail } from '@/states/threadDetail/action';
import ThreadAction from './ThreadAction';
import UserInfo from './UserInfo';

type ThreadDetailProps = {
	thread: IThreadDetail
};

const ThreadDetail = ({ thread }: ThreadDetailProps) => {
	const dispatch = useAppDispatch();

	const handleUpVoteThreadDetail = ({ threadId, isUpVote }: {
		threadId: string | undefined
		isUpVote: boolean
	}) => {
		if (isUpVote) {
			dispatch(asyncNeutralVoteThreadDetail(threadId!));
		} else {
			dispatch(asyncUpVoteThreadDetail(threadId!));
		}
	};

	const handleDownVoteThreadDetail = ({ threadId, isDownVote }: {
		threadId: string | undefined
		isDownVote: boolean
	}) => {
		if (isDownVote) {
			dispatch(asyncNeutralVoteThreadDetail(threadId!));
		} else {
			dispatch(asyncDownVoteThreadDetail(threadId!));
		}
	};

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
				like={thread.upVotesBy}
				dislike={thread.downVotesBy}
				threadId={thread.id}
				onUpVote={handleUpVoteThreadDetail}
				onDownVote={handleDownVoteThreadDetail}
			/>
		</div>
	);
};

export default ThreadDetail;
