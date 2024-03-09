import { IThreadDetail, IThreadDetailComment } from '@/declarations/interfaces';
import { useAppDispatch, useAppSelector } from '@/states/hooks';
import { RootState } from '@/states/store';
import { asyncDownVoteComment, asyncNeutralVoteComment, asyncUpVoteComment } from '@/states/threadDetail/action';
import ThreadAction from './ThreadAction';
import UserInfo from './UserInfo';

type CommentItemProps = {
	comment: IThreadDetailComment
};

const CommentItem = ({ comment }: CommentItemProps) => {
	const threadDetail: IThreadDetail = useAppSelector((states: RootState) => states.threadDetail);
	const dispatch = useAppDispatch();

	const handleUpVoteComment = ({ threadId, commentId, isUpVote }: {
		threadId: string | undefined
		commentId: string | undefined
		isUpVote: boolean
	}) => {
		if (isUpVote) {
			dispatch(asyncNeutralVoteComment({
				threadId: threadId!,
				commentId: commentId!,
			}));
		} else {
			dispatch(asyncUpVoteComment({
				threadId: threadId!,
				commentId: commentId!,
			}));
		}
	};

	const handleDownVoteComment = ({ threadId, commentId, isDownVote }: {
		threadId: string | undefined
		commentId: string | undefined
		isDownVote: boolean
	}) => {
		if (isDownVote) {
			dispatch(asyncNeutralVoteComment({
				threadId: threadId!,
				commentId: commentId!,
			}));
		} else {
			dispatch(asyncDownVoteComment({
				threadId: threadId!,
				commentId: commentId!,
			}));
		}
	};

	return (
		<div className="border border-black p-3 rounded-xl mt-2">
			<div className="mb-2">
				<UserInfo
					nameSize="lg"
					dateSize="sm"
					imgSize={30}
					createdAt={comment.createdAt}
					{...comment.owner}
				/>
				<div
					className="mt-2 ml-9"
					dangerouslySetInnerHTML={{ __html: comment.content }}
				/>
			</div>
			<ThreadAction
				iconSize={15}
				like={comment.upVotesBy}
				dislike={comment.downVotesBy}
				threadId={threadDetail.id}
				commentId={comment.id}
				onUpVote={handleUpVoteComment}
				onDownVote={handleDownVoteComment}
			/>
		</div>
	);
};

export default CommentItem;
