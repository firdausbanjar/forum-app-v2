import { IThreadsAndUsers } from '@/declarations/interfaces';
import ThreadItem from './ThreadItem';

type ThreadListProps = {
	threads: IThreadsAndUsers[]
};

const ThreadList = ({ threads }: ThreadListProps) => {
	return (
		<div className="xl:w-6/12 lg:w-7/12 md:w-8/12 sm:w-9/12 w-full order-2 lg:order-1">
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
