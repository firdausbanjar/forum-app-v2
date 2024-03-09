'use client';

import { useEffect } from 'react';
import CategoryList from '@/components/CategoryList';
import ThreadList from '@/components/ThreadList';
import { IProfile, IThread } from '@/declarations/interfaces';
import { asyncClearCategory, asyncSetCategory } from '@/states/category/action';
import { useAppDispatch, useAppSelector } from '@/states/hooks';
import { asyncReceiveThreadsAndUser } from '@/states/shared/action';
import { RootState } from '@/states/store';

const Threads = () => {
	const threads: IThread[] = useAppSelector((states: RootState) => states.threads);
	const users: IProfile[] = useAppSelector((states: RootState) => states.users);
	const category: string = useAppSelector((states: RootState) => states.category);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(asyncReceiveThreadsAndUser());
	}, [dispatch]);

	const threadList = threads.map((thread) => ({
		...thread,
		users: users.find((user) => user.id === thread.ownerId)!,
	}));

	const categories = threadList.map((thread) => thread.category);
	const setCategories = categories.filter((value, index) => categories.indexOf(value) === index);
	const threadFilter = threadList.filter((thread) => thread.category.includes(category));

	const handleSetCategory = (value: string) => {
		if (category === value) {
			dispatch(asyncClearCategory());
		} else {
			dispatch(asyncSetCategory(value));
		}
	};

	return (
		<section className="flex mb-28 justify-center flex-col lg:flex-row items-center lg:items-start lg:justify-end">
			<ThreadList threads={threadFilter} />
			<CategoryList
				categories={setCategories}
				setCategory={handleSetCategory}
			/>
		</section>
	);
};

export default Threads;
