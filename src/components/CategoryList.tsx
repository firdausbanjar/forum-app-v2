import { useAppSelector } from '@/states/hooks';
import { RootState } from '@/states/store';

type CategoriesProps = {
	categories: string[]
	setCategory: (value: string) => void
};

const CategoryList = ({ categories, setCategory }: CategoriesProps) => {
	const category: string = useAppSelector((states: RootState) => states.category);

	return (
		<div className="flex flex-col justify-center items-center top-2 bg-white shadow-2xl p-8 text-wrap rounded-2xl h-fit lg:ml-4 mt-2 order-1 lg:order-2 lg:w-80 md:w-8/12 sm:w-9/12 w-full">
			<h3 className="text-2xl">{'Kategori Populer'}</h3>
			<div className="mt-5 flex flex-wrap">
				{categories.map((value, key) => (
					<span
						key={key}
						onClick={() => setCategory(value)}
						className={`border border-black py-2 px-4 rounded-xl cursor-pointer -mt-1 my-2 -ml-1 mx-2 ${category === value ? 'bg-black text-white' : 'bg-slate-200'}`}
					>{`#${value}`}
					</span>
				))}
			</div>
		</div>
	);
};

export default CategoryList;
