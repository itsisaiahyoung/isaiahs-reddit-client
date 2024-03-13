import React from "react";
import "./Post.css";
import { selectPostById, fetchPost } from "./PostSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const post = useSelector(state => selectPostById(state, postId));

    useEffect(() => {
        dispatch(fetchPost(postId));
    }, [dispatch, postId]);

    return (
        <div className="Post">
            <h1>Post</h1>
            <h1>{post.title}</h1>
            <p>{post.author}</p>
            <p>{post.selftext}</p>
        </div>
    );
}

export default Post;