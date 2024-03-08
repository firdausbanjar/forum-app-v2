interface IResponse {
	status: string
	message: string
}

interface IRegister {
	id: string
	name: string
	email: string
	avatar: string
}

export interface IProfile extends IRegister { }

export interface IThread {
	id: string
	title: string
	body: string
	category: string
	createdAt: string
	ownerId: string
	upVotesBy: string[]
	downVotesBy: string[]
	totalComments: number
}

export interface IComment {
	id: string
	content: string
	createdAt: string
	upVotesBy: string[]
	downVotesBy: string[]
}

export interface IVoteThread {
	id: string
	userId: string
	threadId: string
	voteType: number
}

export interface ICreateComment extends IComment {
	owner: Omit<IProfile, 'avatar'>
}

export interface IThreadDetailComment extends IComment {
	owner: Omit<IProfile, 'email'>
}

export interface IThreadDetail extends Omit<IThread, 'ownerId' | 'totalComments'> {
	owner: Omit<IProfile, 'email'>
	comments: IThreadDetailComment[]
}

export interface IThreadsAndUsers extends IThread {
	users: IProfile
}

export interface IResponseRegister extends IResponse {
	data: {
		user: IRegister
	}
}

export interface IResponseLogin extends IResponse {
	data: {
		token: string
	}
}

export interface IResponseProfile extends IResponse {
	data: {
		user: IProfile
	}
}

export interface IResponseAllThreads extends IResponse {
	data: {
		threads: IThread[]
	}
}

export interface IResponseThreadDetail extends IResponse {
	data: {
		detailThread: IThreadDetail
	}
}

export interface IResponseCreateThread extends IResponse {
	data: {
		thread: IThread
	}
}

export interface IResponseCreateComment extends IResponse {
	data: {
		comment: ICreateComment
	}
}

export interface IResponseAllUsers extends IResponse {
	data: {
		users: IProfile[]
	}
}

export interface IResponseVoteThread extends IResponse {
	data: {
		vote: IVoteThread
	}
}
