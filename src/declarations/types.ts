export type RegisterT = {
	name: string
	email: string
	password: string
};

export type LoginT = {
	email: string
	password: string
};

export type ThreadT = {
	title: string
	body: string
	category: string
};

export type CommentT = {
	threadId: string
	content : string
};
