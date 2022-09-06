import postsService from "../Api/postsServise";
import {postsApi} from '../Api/axiosApi' ;

export const ADD_POST = "ADD_POST";
export const GET_POSTS = "GET_POSTS";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST_TITLE = "UPDATE_POST_TITLE";
export const IS_LOADING = "IS_LOADING";

const initialState = {
  posts: [],
  isPostLoading: false,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case GET_POSTS:
      return { ...state, posts: action.payload };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case UPDATE_POST_TITLE:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload.id) {
            return { ...post, title: action.payload.title };
          }
          return post;
        }),
      };
    case IS_LOADING:
      return {
        ...state,
        isPostLoading: action.payload,
      };
    default:
      return state;
  }
};

export const getPostsAC = (payload) => ({ type: GET_POSTS, payload });
export const addPostAC = (payload) => ({ type: ADD_POST, payload });
export const removePostAC = (payload) => ({ type: DELETE_POST, payload });
export const updatePostAC = (payload) => ({ type: UPDATE_POST_TITLE, payload });
export const isLoadingAC = (payload) => ({ type: IS_LOADING, payload });

export const getAllPosts = () => (dispatch) => {
  dispatch(isLoadingAC(true));
  postsService.getAllPosts().then((data) => {    
    dispatch(getPostsAC(data));
    dispatch(isLoadingAC(false));
  });
};

export const addPostThunk =(post)=>(dispatch)=>{
    dispatch(isLoadingAC(true));
    postsApi.addPost(post).then(res=>{    
        dispatch(addPostAC(res.data.post)) 
        dispatch(isLoadingAC(false));
       }
    )
}
