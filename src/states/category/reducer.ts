import { ActionType } from './action';

const categoryReducer = (category = '', action: any = {}) => {
	switch (action.type) {
		case ActionType.SET_CATEGORY:
			return action.payload.category;
		case ActionType.CLEAR_CATEGORY:
			return '';
		default:
			return category;
	}
};

export default categoryReducer;
