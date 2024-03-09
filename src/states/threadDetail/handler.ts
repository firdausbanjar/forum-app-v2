import { IThreadDetail } from '@/declarations/interfaces';

const handleAddComment = (thread: IThreadDetail | null, action: any) => {
	return {
		...thread,
		comments: [
			action.payload.comment,
			...thread?.comments!,
		],
	};
};

const handleUpVoteThreadDetail = (thread: IThreadDetail | null, action: any) => {
	return {
		...thread,
		upVotesBy: [...thread?.upVotesBy!, action.payload.userId],
		downVotesBy: thread?.downVotesBy.filter((userId) => userId !== action.payload.userId),
	};
};

const handleDownVoteThreadDetail = (thread: IThreadDetail | null, action: any) => {
	return {
		...thread,
		upVotesBy: thread?.upVotesBy.filter((userId) => userId !== action.payload.userId),
		downVotesBy: [...thread?.downVotesBy!, action.payload.userId],
	};
};

const handleNeutralVoteThreadDetail = (thread: IThreadDetail | null, action: any) => {
	if (thread?.upVotesBy.includes(action.payload.userId)) {
		return {
			...thread,
			upVotesBy: thread.upVotesBy.filter((userId) => userId !== action.payload.userId),
		};
	}

	if (thread?.downVotesBy.includes(action.payload.userId)) {
		return {
			...thread,
			downVotesBy: thread.downVotesBy.filter((userId) => userId !== action.payload.userId),
		};
	}
};

const handleUpVoteTComment = (thread: IThreadDetail | null, action: any) => {
	return {
		...thread,
		comments: thread?.comments.map((comment) => {
			if (comment.id === action.payload.commentId) {
				return {
					...comment,
					upVotesBy: [...comment.upVotesBy, action.payload.userId],
					downVotesBy: comment.downVotesBy.filter((userId) => {
						return userId !== action.payload.userId;
					}),
				};
			}

			return comment;
		}),
	};
};

const handleDownVoteTComment = (thread: IThreadDetail | null, action: any) => {
	return {
		...thread,
		comments: thread?.comments.map((comment) => {
			if (comment.id === action.payload.commentId) {
				return {
					...comment,
					upVotesBy: comment.upVotesBy.filter((userId) => {
						return userId !== action.payload.userId;
					}),
					downVotesBy: [...comment.downVotesBy, action.payload.userId],
				};
			}

			return comment;
		}),
	};
};

const handleNeutralVoteTComment = (thread: IThreadDetail | null, action: any) => {
	return {
		...thread,
		comments: thread?.comments.map((comment) => {
			if (comment.upVotesBy.includes(action.payload.userId)) {
				return {
					...comment,
					upVotesBy: comment.upVotesBy.filter((userId) => {
						return userId !== action.payload.userId;
					}),
				};
			}
			if (comment.downVotesBy.includes(action.payload.userId)) {
				return {
					...comment,
					downVotesBy: comment.downVotesBy.filter((userId) => {
						return userId !== action.payload.userId;
					}),
				};
			}

			return comment;
		}),
	};
};

export {
	handleAddComment,
	handleDownVoteTComment,
	handleDownVoteThreadDetail,
	handleNeutralVoteTComment,
	handleNeutralVoteThreadDetail,
	handleUpVoteTComment,
	handleUpVoteThreadDetail,
};
