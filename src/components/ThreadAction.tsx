import { BiComment, BiDislike, BiLike } from 'react-icons/bi';

type ThreadActionProps = {
	totalComments?: number
	totalLike: number
	totalDislike: number
	iconSize: number
};

const ThreadAction = ({
	totalComments, totalLike, totalDislike, iconSize,
}: ThreadActionProps) => {
	return (
		<div className="flex justify-end items-center">
			<div className="flex justify-center items-center rounded-full bg-slate-200 mr-3 w-fit">
				<div className="flex justify-center items-center py-2 px-4 cursor-pointer w-full">
					<BiLike
						className="mr-2"
						size={iconSize}
					/>
					<p style={{ fontSize: iconSize }}>{totalLike}</p>
				</div>
				<span
					className="bg-black"
					style={{ width: 1, height: iconSize }}
				>
				</span>
				<div className="flex justify-center items-center py-2 px-4 cursor-pointer w-fit">
					<BiDislike
						className="mr-2"
						size={iconSize}
					/>
					<p style={{ fontSize: iconSize }}>{totalDislike}</p>
				</div>
			</div>
			{totalComments !== undefined && (
				<div className="flex justify-center items-center rounded-full bg-slate-200 py-2 px-4 w-fit">
					<BiComment
						className="mr-2"
						size={iconSize}
					/>
					<p style={{ fontSize: iconSize }}>{totalComments}</p>
				</div>
			)}
		</div>
	);
};

export default ThreadAction;
