import { Dispatch } from '@reduxjs/toolkit';

const ActionType = {
	SET_CATEGORY: 'SET_CATEGORY',
	CLEAR_CATEGORY: 'CLEAR_CATEGORY',
};

const setCategoryActionCreator = (category: string) => {
	return {
		type: ActionType.SET_CATEGORY,
		payload: {
			category,
		},
	};
};

const clearCategoryActionCreator = () => {
	return {
		type: ActionType.CLEAR_CATEGORY,
	};
};

const asyncSetCategory = (category: string) => {
	return async (dispatch: Dispatch) => {
		dispatch(clearCategoryActionCreator());
		dispatch(setCategoryActionCreator(category));
	};
};

const asyncClearCategory = () => {
	return async (dispatch: Dispatch) => {
		dispatch(clearCategoryActionCreator());
	};
};

export {
	ActionType,
	asyncClearCategory,
	asyncSetCategory,
	clearCategoryActionCreator,
	setCategoryActionCreator,
};
