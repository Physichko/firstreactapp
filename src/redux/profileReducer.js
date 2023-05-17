const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState = {
    posts: [
        {id: 1, likes: 4, text: "Hi, how are you?"},
        {id: 2, likes: 8, text: "it is my my first post"},
        {id: 3, likes: 15, text: "Pashka, ti nahuy suda prishol?"},
        {id: 4, likes: 16, text: "Provalivai s moei stranichki"},
        {id: 5, likes: 23, text: "Ufff chto za tyagi takie barhatnie..."},
        {id: 6, likes: 42, text: "Keeeefteeeeemeeeeeeeee"}
    ],
    newPostText: "new Post text",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let id = state.posts.length + 1;
            let postToAdd = {
                id: id,
                text: state.newPostText,
                likes: 0,
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(postToAdd);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.updatedValue;
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type : ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type : UPDATE_NEW_POST_TEXT, updatedValue : text});
export default profileReducer;