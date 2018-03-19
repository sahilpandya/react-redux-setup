/**
 * Created by sahilpandya on 18/03/18.
 */
export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};