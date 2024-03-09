import { ThreadT } from '@/declarations/types';
import useContentEditable from '@/hooks/useContentEditable';
import useInput from '@/hooks/useInput';

type ThreadInputProps = {
	onUpload: ({ title, body, category }: ThreadT) => void
};

const ThreadInput = ({ onUpload }: ThreadInputProps) => {
	const [title, onChangeTitle] = useInput('');
	const [category, onChangeCategory] = useInput('');
	const [body, onInputBody] = useContentEditable('');

	return (
		<div className="bg-white rounded-xl p-10 h-fit xl:w-6/12 lg:w-7/12 md:w-8/12 sm:w-9/12 w-full">
			<h2 className="mb-8 text-2xl font-bold border-b-2 border-black pb-3">
				{'Buat Thread'}
			</h2>
			<form className="flex justify-center items-center flex-col">
				<div className="flex flex-col mb-5 w-full">
					<label
						className="font-semibold"
						htmlFor="category"
					>{'Judul Thread'}
					</label>
					<input
						className="rounded-md p-2 outline-none mt-3 border border-black"
						type="text"
						name="title"
						id="title"
						value={title}
						onChange={onChangeTitle}
						required
					/>
				</div>
				<div className="flex flex-col mb-5 w-full">
					<label
						className="font-semibold"
						htmlFor="category"
					>{'Kategory'}
					</label>
					<input
						className="rounded-md p-2 outline-none mt-3 border border-black"
						type="text"
						name="category"
						id="category"
						value={category}
						onChange={onChangeCategory}
						required
					/>
				</div>
				<div className="w-full mb-5">
					<label
						className="font-semibold"
						htmlFor="body"
					>{'Thread'}
					</label>
					<div
						className="outline-none border border-black rounded-md h-36 scroll-bar p-2"
						id="body"
						contentEditable
						onInput={onInputBody}
					/>
				</div>
				<button
					className="bg-black text-white py-2 px-4 rounded-lg w-full"
					type="button"
					onClick={() => onUpload({ title, category, body })}
				>{'Unggah'}
				</button>
			</form>
		</div>
	);
};

export default ThreadInput;
