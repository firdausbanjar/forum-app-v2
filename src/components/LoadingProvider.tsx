'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<ProgressBar
				height="4px"
				color="red"
				options={{ showSpinner: false }}
				shallowRouting
			/>
			{children}
		</>
	);
};

export default LoadingProvider;
