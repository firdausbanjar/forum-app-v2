'use client';

import { useRouter } from 'next/navigation';
import RegisterInput from '@/components/RegisterInput';
import { RegisterT } from '@/declarations/types';
import { useAppDispatch } from '@/states/hooks';
import { asyncRegisterUser } from '@/states/user/action';

const Register = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();

	const handleRegister = ({ name, email, password }: RegisterT) => {
		const result = dispatch(asyncRegisterUser({ name, email, password }));
		result.then((response) => {
			if (response === 'success') router.push('/login');
		});
	};

	return (
		<section className="h-screen flex justify-center items-center">
			<RegisterInput onRegister={handleRegister} />
		</section>
	);
};

export default Register;
