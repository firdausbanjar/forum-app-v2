import Link from 'next/link';

const Header = () => {
	return (
		<header className="px-8 py-5 bg-black text-white">
			<Link href="/threads">
				<h1 className="text-4xl font-bold">{'Forum-Application'}</h1>
			</Link>
		</header>
	);
};

export default Header;
