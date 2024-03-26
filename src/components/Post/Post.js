import React from "react";
import "./Post.css";
import { selectPostById, fetchPost } from "./PostSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { json, useParams } from "react-router-dom";

const Post = () => {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const post = useSelector(state => selectPostById(state, postId));

    useEffect(() => {
        dispatch(fetchPost(postId));
    }, [dispatch, postId]);

    return (
        <div>
            <h1 className="post-text-head">Post</h1>
            <div className="post">
                <div className="post-header">
                    <h1>{post.title}</h1>
                    <p>{post.author}   •   {post.subreddit}</p>
                </div>
                <div className="post-main">
                {
                    post.preview 
                    ? <div dangerouslySetInnerHTML={{ __html: `<img src="${post.preview.images[0].source.url}" width="80%" alt="" />` }} /> 
                    : <p></p>
                }        
                    <div className="post-content">
                        <p>{post.selftext}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;