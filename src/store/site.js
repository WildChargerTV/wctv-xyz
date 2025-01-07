// * ./src/store/site.js

//* --------------------[Thunk Action Identifiers]-------------------- *//
const SET_ACTIVE_TAB = 'site/setActiveTab';

//* --------------------[Thunk Action Creators]-------------------- *//
const setActiveTab = (tabId) => ({ type: SET_ACTIVE_TAB, payload: tabId });

//* --------------------[Thunk Middlewares]-------------------- *//
export const updateActiveTab = (tabId) => (dispatch) => {
    dispatch(setActiveTab(tabId));
}

//* --------------------[Initial State]-------------------- *//
const initialState = {
    activeTab: 0
}

export default function siteReducer(state=initialState, action) {
    switch(action.type) {
        case SET_ACTIVE_TAB:
            return { ...state, activeTab: action.payload };
        default:
            return state;
    }
}