import Link from 'next/link';
import { IThreadsAndUsers } from '@/declarations/interfaces';
import { useAppDispatch } from '@/states/hooks';
import { asyncDownVoteThread, asyncNeutralVoteThread, asyncUpVoteThread } from '@/states/threads/action';
import ThreadAction from './ThreadAction';
import UserInfo from './UserInfo';

type ThreadItemProps = {
	thread: IThreadsAndUsers
};

const ThreadItem = ({ thread }: ThreadItemProps) => {
	const dispatch = useAppDispatch();

	const handleUpVoteThread = ({ threadId, isUpVote }: {
		threadId: string | undefined
		isUpVote: boolean
	}) => {
		if (isUpVote) {
			dispatch(asyncNeutralVoteThread(threadId!));
		} else {
			dispatch(asyncUpVoteThread(threadId!));
		}
	};

	const handleDownVoteThread = ({ threadId, isDownVote }: {
		threadId: string | undefined
		isDownVote: boolean
	}) => {
		if (isDownVote) {
			dispatch(asyncNeutralVoteThread(threadId!));
		} else {
			dispatch(asyncDownVoteThread(threadId!));
		}
	};

	return (
		<div className="mt-2 bg-white shadow-2xl p-10 text-wrap rounded-2xl">
			<Link
				className="mb-3 block"
				href="/threads/[slug]"
				as={`/threads/${thread.id}`}

			>
				<h3 className="text-2xl text-blue-700 font-bold">
					{thread.title}
				</h3>
			</Link>
			<UserInfo
				nameSize="xl"
				imgSize={45}
				dateSize="sm"
				createdAt={thread.createdAt}
				{...thread.users}
			/>
			<span className="block bg-slate-200 py-1 px-2 rounded-lg border border-black text-sm mt-6 w-fit">
				{`#${thread.category}`}
			</span>
			<div
				className="mt-6 line-clamp-4 mb-8"
				dangerouslySetInnerHTML={{ __html: thread.body }}
			/>
			<ThreadAction
				iconSize={20}
				totalComments={thread.totalComments}
				like={thread.upVotesBy}
				dislike={thread.downVotesBy}
				threadId={thread.id}
				onUpVote={handleUpVoteThread}
				onDownVote={handleDownVoteThread}
			/>
		</div>
	);
};

export default ThreadItem;
