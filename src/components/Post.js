import React, {useState} from "react";
import "../App.css";
import MyButton from "./MyButton/button";
import axios from 'axios'
import {Link} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { updatePostAC } from "../store/postReducer";

const Post = ({ post, ...props }) => {
  const dispatch =useDispatch()

  const updatePost =(post)=>{    
      let newPostTitle=prompt();
      const newPost={
        ...post,
        title:newPostTitle
      }
      dispatch(updatePostAC( newPost));
  }
 
  return (
    <div className="post">
      <div className="post-content">        
        <span>{post.id}. </span>
        <div> {post.title} </div>
        <div> {post.body} </div>   
       </div>     
      <div className="posts-btn">
         <MyButton onClick={()=>{props.remove(post)}}>Delete</MyButton>
         <MyButton onClick={()=>updatePost(post)}>UPDATE </MyButton>
         <Link to ={`/posts/${post.id}/comments`}>See Comments</Link>
         {/* <MyButton onClick={()=>fetchAllComments(post.id)}> See Comments </MyButton> */}
      </div>      
      
    </div>
  );
};

export default Post;
