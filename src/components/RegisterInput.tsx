import Link from 'next/link';
import { RegisterT } from '@/declarations/types';
import useInput from '@/hooks/useInput';

type RegisterInputProps = {
	onRegister: ({ name, email, password }: RegisterT) => void
};

const RegisterInput = ({ onRegister }: RegisterInputProps) => {
	const [name, onChangeName] = useInput('');
	const [email, onChangeEmail] = useInput('');
	const [password, onChangePassword] = useInput('');

	return (
		<div className="bg-white rounded-xl p-10 h-fit xl:w-5/12 lg:w-7/12 md:w-9/12 sm:w-11/12 w-full">
			<h2 className="mb-8 text-2xl font-bold border-b-2 border-black pb-3">
				{'Buat Akun'}
			</h2>
			<form className="flex justify-center items-center flex-col">
				<div className="flex flex-col mb-5 w-full">
					<label
						className="font-semibold"
						htmlFor="name"
					>{'Name'}
					</label>
					<input
						className="rounded-md p-2 outline-none mt-3 border border-black"
						value={name}
						type="text"
						name="name"
						id="name"
						onChange={onChangeName}
						data-testid="name"
					/>
				</div>
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
						data-testid="email"
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
						data-testid="password"
					/>
				</div>
				<button
					className="bg-black text-white py-2 px-4 rounded-lg w-full mb-3"
					type="button"
					onClick={() => onRegister({ name, email, password })}
				>
					{'Daftar'}
				</button>
				<p>
					{'Sudah punya akun? '}
					<Link
						className="text-blue-700 underline"
						href="/login"

					>
						{'Masuk disini'}
					</Link>
				</p>
			</form>
		</div>
	);
};

export default RegisterInput;
