'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { MdOutlineLeaderboard } from 'react-icons/md';
import {
	RiAddLine, RiDiscussLine, RiLoginBoxLine, RiLogoutBoxLine,
} from 'react-icons/ri';
import { RootState } from '@/states/store';
import { asyncSetIsPreload } from '@/states/isPreload/action';
import { useAppDispatch, useAppSelector } from '@/states/hooks';
import { asyncUnsetAuthUser } from '@/states/auth/action';

const Navigation = () => {
	const pathname = usePathname();
	const authUser = useAppSelector((states: RootState) => states.authUser);
	const dispatch = useAppDispatch();

	const handleLogout = () => {
		dispatch(asyncUnsetAuthUser());
	};

	useEffect(() => {
		dispatch(asyncSetIsPreload());
	}, []);

	return (
		<nav className="container fixed bg-white bottom-0 h-fit min-w-full">
			<div className="flex justify-between items-center mx-auto my-2 h-fit xl:w-6/12 lg:w-7/12 md:w-8/12 sm:w-9/12">
				<div className="ml-20 flex justify-center items-center flex-col">
					<Link
						className={`flex justify-center items-center p-3 rounded-full ${pathname === '/threads' && 'bg-black'}`}
						href="/threads"
					>
						<RiDiscussLine
							size={20}
							color={pathname === '/threads' ? 'white' : 'black'}
						/>
					</Link>
					<p>{'Threads'}</p>
				</div>
				<div className="flex justify-center items-center flex-col">
					<Link
						className={`flex justify-center items-center p-3 rounded-full ${pathname === '/leaderboard' && 'bg-black'}`}
						href="/leaderboard"
					>
						<MdOutlineLeaderboard
							size={20}
							color={pathname === '/leaderboard' ? 'white' : 'black'}
						/>
					</Link>
					<p>{'Leaderboard'}</p>
				</div>
				<div className="mr-20 flex justify-center items-center flex-col">
					{authUser === null ? (
						<Link
							className={`flex justify-center items-center p-3 rounded-full ${pathname === '/login' && 'bg-black'}`}
							href="/login"
						>
							<RiLoginBoxLine
								size={20}
								color={pathname === '/login' ? 'white' : 'black'}
							/>
						</Link>
					)
						: (
							<button
								type="button"
								onClick={handleLogout}
								className="p-3"
							>
								<RiLogoutBoxLine
									size={20}
									color={pathname === '/login' ? 'white' : 'black'}
								/>
							</button>
						)}

					<p>{authUser === null ? 'Login' : 'Logout'}</p>
				</div>
			</div>
			{ authUser !== null && (
				<div className="absolute right-3 -top-full rounded-full bg-black">
					<Link
						className="flex justify-center items-center p-3 "
						href="/threads/new"

					>
						<RiAddLine
							size={35}
							color="white"
						/>
					</Link>
				</div>
			)}

		</nav>
	);
};

export default Navigation;
