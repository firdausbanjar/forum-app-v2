import Navigation from '@/components/Navigation';
import StoreProvider from '@/components/StoreProvider';

import LoadingProvider from '@/components/LoadingPovider';
import './globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className="bg-gradient min-h-screen">
				<StoreProvider>
					<main className="container">
						<LoadingProvider>
							{children}
						</LoadingProvider>
					</main>
					<Navigation />
				</StoreProvider>
			</body>
		</html>
	);
}
