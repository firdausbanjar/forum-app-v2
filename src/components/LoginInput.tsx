import Link from 'next/link';
import { LoginT } from '@/declarations/types';
import useInput from '@/hooks/useInput';

type LoginInputProps = {
	onLogin: ({ email, password }: LoginT) => void
};

const LoginInput = ({ onLogin }: LoginInputProps) => {
	const [email, onChangeEmail] = useInput('');
	const [password, onChangePassword] = useInput('');

	return (
		<div className="bg-white rounded-xl p-10 w-2/4 h-fit">
			<h2 className="mb-8 text-2xl font-bold border-b-2 border-black pb-3">
				{'Masuk'}
			</h2>
			<form className="flex justify-center items-center flex-col">
				<div className="flex flex-col mb-5 w-full">
					<label
						className="font-semibold"
						htmlFor="email"
					>{'Email'}
					</label>
					<input
						className="rounded-md p-2 outline-none mt-3 border border-black"
						value={email}
						type="email"
						name="email"
						id="email"
						onChange={onChangeEmail}
						required
					/>
				</div>
				<div className="flex flex-col mb-5 w-full">
					<label
						className="font-semibold"
						htmlFor="password"
					>{'Password'}
					</label>
					<input
						className="rounded-md p-2 outline-none mt-3 border border-black"
						value={password}
						type="password"
						name="password"
						id="password"
						minLength={6}
						onChange={onChangePassword}
						required
					/>
				</div>
				<button
					className="bg-black text-white py-2 px-4 rounded-lg w-full mb-3"
					type="button"
					onClick={() => onLogin({ email, password })}
				>
					{'Masuk'}
				</button>
				<p>
					{'Belum punya akun? '}
					<Link
						className="text-blue-700 underline"
						href="/register"
						scroll={false}
					>
						{'daftar disini'}
					</Link>
				</p>
			</form>
		</div>
	);
};

export default LoginInput;
