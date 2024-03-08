'use client';

import { redirect, useRouter } from 'next/navigation';
import ThreadInput from '@/components/ThreadInput';
import { ThreadT } from '@/declarations/types';
import { useAppDispatch, useAppSelector } from '@/states/hooks';
import { RootState } from '@/states/store';
import { asyncAddThread } from '@/states/threads/action';

const NewThread = () => {
	const authUser = useAppSelector((states: RootState) => states.authUser);
	const dispatch = useAppDispatch();
	const router = useRouter();

	const handleUpload = ({ title, category, body }: ThreadT) => {
		dispatch(asyncAddThread({ title, category, body }));
		router.push('/threads', { scroll: false });
	};

	if (authUser === null) {
		redirect('/login');
	}

	return (
		<section className="h-screen flex justify-center pt-7">
			<ThreadInput onUpload={handleUpload} />
		</section>
	);
};

export default NewThread;
