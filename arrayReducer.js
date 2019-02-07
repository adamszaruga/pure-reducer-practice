const initialState = [
    "orange",
    "apple",
    "watermelon",
    "apple"
]

const reducer = (state, action) => {
    const { type } = action;
    if (type === "PUSH_TO_END") {

    } else if (type === "PUSH_TO_BEGINNING") {

    } else if (type === "CHANGE_AT_INDEX") {

    } else if (type === "DELETE_AT_INDEX") {

    } else if (type === "FILTER_OUT_APPLES") {

    } else if (type === "CAPITALIZE") {
        
    }
    return state;
}