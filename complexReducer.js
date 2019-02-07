const initialState = {
    id: 1,
    name: "Cherie",
    friends: [
        {
            name: "Adam",
            isBff: false
        },
        {
            name: "Kamilah",
            isBff: true
        }
    ]

}

const reducer = (state, action) => {
    const { type } = action;
    
    if (type === "CHANGE_CHERIES_NAME") {

    } else if (type === "ADD_A_NEW_FRIEND") {

    } else if (type === "REMOVE_A_FRIEND") {

    } else if (type === "PROMOTE_ONE_FRIEND_TO_BFF") {

    } else if (type === "PROMOTE_ALL_FRIENDS_TO_BFF") {

    }

    return state;
}