'use client';

import { useEffect } from 'react';
import CommentInput from '@/components/CommentInput';
import CommentList from '@/components/CommentList';
import ThreadDetail from '@/components/ThreadDetail';
import { IThreadDetail } from '@/declarations/interfaces';
import { useAppDispatch, useAppSelector } from '@/states/hooks';
import { RootState } from '@/states/store';
import { asyncAddComment, asyncReceiveThreadDetail } from '@/states/threadDetail/action';

const Detail = ({ params }: { params: { slug: string } }) => {
	const threadDetail: IThreadDetail = useAppSelector((states: RootState) => states.threadDetail);
	const threadId = params.slug;
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(asyncReceiveThreadDetail(threadId));
	}, [dispatch, threadId]);

	const handleComment = ({ content }: { content: string }) => {
		dispatch(asyncAddComment({ threadId, content }));
		const commentElement = document.getElementById('comment');
		if (commentElement) {
			commentElement.innerHTML = '';
		}
	};

	if (!threadDetail) {
		return null;
	}

	return (
		<section className="flex justify-center mb-28">
			<div className="xl:w-6/12 lg:w-7/12 md:w-8/12 sm:w-9/12 w-full">
				<ThreadDetail thread={threadDetail} />
				<div className="bg-white shadow-2xl p-10 text-wrap rounded-2xl mt-2 mb-5">
					<h4 className="text-xl font-semibold mb-4">{'Komentar'}</h4>
					<CommentInput onComment={handleComment} />
					<CommentList comments={threadDetail.comments} />
				</div>
			</div>
		</section>
	);
};

export default Detail;
