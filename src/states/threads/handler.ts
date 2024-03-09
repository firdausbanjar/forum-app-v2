import { IThread } from '@/declarations/interfaces';

const handleUpVoteThread = (threads: IThread[] = [], action: any = {}) => {
	return threads.map((thread) => {
		if (thread.id === action.payload.threadId) {
			return {
				...thread,
				upVotesBy: [...thread.upVotesBy, action.payload.userId],
				downVotesBy: thread.downVotesBy.filter((userId) => {
					return userId !== action.payload.userId;
				}),
			};
		}
		return thread;
	});
};

const handleDownVoteThread = (threads: IThread[] = [], action: any = {}) => {
	return threads.map((thread) => {
		if (thread.id === action.payload.threadId) {
			return {
				...thread,
				upVotesBy: thread.upVotesBy.filter((userId) => {
					return userId !== action.payload.userId;
				}),
				downVotesBy: [...thread.downVotesBy, action.payload.userId],
			};
		}
		return thread;
	});
};

const handleNeutralVoteThread = (threads: IThread[] = [], action: any = {}) => {
	return threads.map((thread) => {
		if (thread.id === action.payload.threadId) {
			if (thread.upVotesBy.includes(action.payload.userId)) {
				return {
					...thread,
					upVotesBy: thread.upVotesBy.filter((userId) => {
						return userId !== action.payload.userId;
					}),
				};
			}
			if (thread.downVotesBy.includes(action.payload.userId)) {
				return {
					...thread,
					downVotesBy: thread.downVotesBy.filter((userId) => {
						return userId !== action.payload.userId;
					}),
				};
			}
		}
		return thread;
	});
};

export {
	handleDownVoteThread,
	handleNeutralVoteThread,
	handleUpVoteThread,
};
