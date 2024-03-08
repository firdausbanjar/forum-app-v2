import useContentEditable from '@/hooks/useContentEditable';

type CommentInputProps = {
	onComment: ({ content }: { content: string }) => void
};

const CommentInput = ({ onComment }: CommentInputProps) => {
	const [comment, onInputComment] = useContentEditable('');

	return (
		<div className="flex flex-row justify-center items-center mb-7">
			<div
				id="comment"
				className="w-11/12 h-16 p-2 outline-none border border-black mr-2 rounded-xl scroll-bar"
				contentEditable
				onInput={onInputComment}
			/>
			<button
				className="bg-black text-white px-4 h-16 rounded-xl"
				onClick={() => onComment({ content: comment })}
			>{'Kirim'}
			</button>
		</div>
	);
};

export default CommentInput;
