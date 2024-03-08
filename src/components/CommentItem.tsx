import { IThreadDetailComment } from '@/declarations/interfaces';
import ThreadAction from './ThreadAction';
import UserInfo from './UserInfo';

type CommentItemProps = {
	comment: IThreadDetailComment
};

const CommentItem = ({ comment }: CommentItemProps) => {
	return (
		<div className="border border-black p-3 rounded-xl mt-2">
			<div>
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
				totalLike={comment.upVotesBy.length}
				totalDislike={comment.downVotesBy.length}
			/>
		</div>
	);
};

export default CommentItem;
