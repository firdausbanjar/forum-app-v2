import { showFormattedDate } from '@/utils/utils';

type UserInfoProps = {
	avatar: string
	name: string
	createdAt?: string
	nameSize: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'
	imgSize: number
	dateSize: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'
};

const UserInfo = ({
	name, createdAt, avatar, nameSize, imgSize, dateSize,
}: UserInfoProps) => {
	return (
		<div className="flex items-center w-fit">
			<img
				src={avatar}
				alt={name}
				className="object-cover rounded-full mr-2"
				width={imgSize}
				height={imgSize}
			/>
			<div>
				<p className={`text-${nameSize} font-semibold`}>{name}</p>
				{!createdAt !== undefined && <p className={`text-${dateSize}`}>{showFormattedDate(createdAt ?? '', 'id-ID')}</p>}
			</div>
		</div>
	);
};

export default UserInfo;
