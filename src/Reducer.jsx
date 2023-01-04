const reducer = (state, action) => {
    if (action.type === "GET_WEATHER") {
        return {
            ...state,
            weather: action.payload,
        };
    }

    return state;
};

export default reducer;
