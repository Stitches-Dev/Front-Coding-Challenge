// actions/testActions.js

export const storeTestInfo = (testInfo) => {
    return {
        type: 'STORE_TEST_INFO',
        payload: testInfo,
    };
};
