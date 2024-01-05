// reducers/testReducer.js

const initialState = {
    testInfo: null,
};

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'STORE_TEST_INFO':
            return {
                ...state,
                testInfo: action.payload,
            };
        default:
            return state;
    }
};

export default testReducer;
