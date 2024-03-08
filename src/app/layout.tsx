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
		<StoreProvider>
			<html lang="en">
				<body className="bg-gradient min-h-screen">
					<main className="container">
						<LoadingProvider>
							{children}
						</LoadingProvider>
					</main>
					<Navigation />
				</body>
			</html>
		</StoreProvider>
	);
}
