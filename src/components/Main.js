import React, { useEffect, useState, useMemo } from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";
import Modal from "./Modal/modal";
import Select from "./Select/select";
import MyButton from "./MyButton/button";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addPostThunk, removePostAC, getAllPosts} from "../store/postReducer";
import "../App.css";
import MyInput from "./MyInput/myInput";
import { CircularProgress } from '@mui/material';

const Main = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const posts = useSelector((state) => state.posts.posts);
  const isLoading =useSelector(state=>state.posts.isPostLoading);
  const dispatch = useDispatch();

  const serchQueryfromBrowser = searchParams.get("post") || "";
  const sortedParams = searchParams.has("sortBy");

  const addPost = (newPost) => {
    dispatch(addPostThunk(newPost));
  };

  const sortedPost = useMemo(() => {
    if (selectedValue) {
      const sortedPost = [...posts].sort((a, b) =>
        a[selectedValue].localeCompare(b[selectedValue])
      );
      return sortedPost;
    }
    return posts;
  }, [selectedValue, posts]);

  const searchingPosts = useMemo(() => {
    const newPost = sortedPost.filter((post) =>
      post.title.toLowerCase().includes(serchQueryfromBrowser)
    );
    return newPost;
  }, [serchQueryfromBrowser, sortedPost]);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  const setSort = (sortValue) => {
    setSelectedValue(sortValue);
    setSearchParams({ sortBy: sortValue });
  };

  const remove = (post) => {
    dispatch(removePostAC(post.id));
  };

  return (
    <div className="main">
      {isLoading && <div>< CircularProgress /> </div>}
      <MyButton onClick={() => setIsModalVisible(true)}>AddPost</MyButton>
      <Modal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      >
        <PostForm addPost={addPost} setIsModalVisible={setIsModalVisible} />
      </Modal>
      <div>
        <Select
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По содержимому" },
          ]}
          value={selectedValue}
          onChange={setSort}
        />
        <MyInput
          value={serchQueryfromBrowser}
          onChange={(e) => setSearchParams({ post: e.target.value })}
        />
      </div>
      {searchingPosts.length ? (
        <PostList posts={searchingPosts} remove={remove} />
      ) : (
        <div className="noPostsFound">
          <h2>Посты не найдены</h2>
        </div>
      )}
    </div>
  );
};

export default Main;
