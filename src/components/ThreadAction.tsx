import Link from 'next/link';
import {
	BiComment, BiDislike, BiLike,
	BiSolidDislike,
	BiSolidLike,
} from 'react-icons/bi';
import { IProfile } from '@/declarations/interfaces';
import { useAppSelector } from '@/states/hooks';
import { RootState } from '@/states/store';

type ThreadActionProps = {
	totalComments?: number
	like: string[]
	dislike: string[]
	iconSize: number
	threadId?: string
	commentId?: string
	onUpVote: ({ threadId, commentId, isUpVote }: {
		threadId: string | undefined
		commentId: string | undefined
		isUpVote: boolean
	}) => void
	onDownVote: ({ threadId, commentId, isDownVote }: {
		threadId: string | undefined
		commentId: string | undefined
		isDownVote: boolean
	}) => void
};

const ThreadAction = ({
	totalComments,
	like,
	dislike,
	iconSize,
	threadId,
	commentId,
	onUpVote,
	onDownVote,
}: ThreadActionProps) => {
	const authUser: IProfile = useAppSelector((states: RootState) => states.authUser);
	const isUpVote = like.includes(authUser?.id);
	const isDownVote = dislike.includes(authUser?.id);

	return (
		<div className="flex justify-end items-center">
			<div className="flex justify-center items-center rounded-full bg-slate-200 mr-3 w-fit">
				<button
					className="flex justify-center items-center py-2 px-4 cursor-pointer w-full"
					onClick={() => onUpVote({ threadId, commentId, isUpVote })}
				>
					{isUpVote && authUser !== null ? (
						<BiSolidLike
							className="mr-2"
							size={iconSize}
						/>

					) : (
						<BiLike
							className="mr-2"
							size={iconSize}
						/>
					)}

					<p style={{ fontSize: iconSize }}>{like.length}</p>
				</button>
				<span
					className="bg-black"
					style={{ width: 1, height: iconSize }}
				>
				</span>
				<button
					className="flex justify-center items-center py-2 px-4 cursor-pointer w-fit"
					onClick={() => onDownVote({ threadId, commentId, isDownVote })}
				>
					{isDownVote && authUser !== null ? (
						<BiSolidDislike
							className="mr-2"
							size={iconSize}
						/>
					) : (
						<BiDislike
							className="mr-2"
							size={iconSize}
						/>

					)}

					<p style={{ fontSize: iconSize }}>{dislike.length}</p>
				</button>
			</div>
			{totalComments !== undefined && (
				<Link
					href="/threads/[slug]"
					as={`/threads/${threadId}`}
					className="flex justify-center items-center rounded-full bg-slate-200 py-2 px-4 w-fit"
				>
					<BiComment
						className="mr-2"
						size={iconSize}
					/>
					<p style={{ fontSize: iconSize }}>{totalComments}</p>
				</Link>
			)}
		</div>
	);
};

export default ThreadAction;
