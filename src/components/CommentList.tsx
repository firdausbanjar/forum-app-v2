import { IThreadDetailComment } from '@/declarations/interfaces';
import CommentItem from './CommentItem';

type CommentListProps = {
	comments: IThreadDetailComment[]
};

const CommentList = ({ comments }: CommentListProps) => {
	return (
		<div>
			{comments.map((comment) => (
				<CommentItem
					key={comment.id}
					comment={comment}
				/>
			))}
		</div>
	);
};

export default CommentList;
