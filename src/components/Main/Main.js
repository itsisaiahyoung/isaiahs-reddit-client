import React, { useEffect } from 'react';
import './Main.css';
import { selectAllPosts, fetchPosts } from './MainSlice';
import Sidebar from '../Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Main = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const [ SubredditTerm, setSubredditTerm ] = useState('popular');

    useEffect(() => {
        dispatch(fetchPosts(SubredditTerm));
    }, [dispatch, SubredditTerm]);

  return (
    <div className="MainPage">
      <div className='Main'>
        {posts.map((post) => {
              const title = post.title;
              const author = post.author;
              return (
                  <div className="post" key={post.id}>
                      <h3>{title}</h3>
                      <p>{author}</p>
                      <image src={post.thumbnail} alt="thumbnail" />
                      <div className="Post-Content">
                      </div>
                      <Link className="ReadMore-Button" to={`/post/${post.id}`}>Read More</Link>
                  </div>
              )
          })}
      </div>
      <Sidebar term={SubredditTerm} setTerm={setSubredditTerm}/>
    </div>
  );
}

export default Main;