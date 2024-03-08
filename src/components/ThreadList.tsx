import { IThreadsAndUsers } from '@/declarations/interfaces';
import ThreadItem from './ThreadItem';

type ThreadListProps = {
	threads: IThreadsAndUsers[]
};

const ThreadList = ({ threads }: ThreadListProps) => {
	return (
		<div className="w-1/2">
			{threads?.map((thread) => (
				<ThreadItem
					key={thread.id}
					thread={thread}
				/>
			))}
		</div>
	);
};

export default ThreadList;
