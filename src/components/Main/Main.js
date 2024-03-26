import React, { useEffect } from 'react';
import './Main.css';
import { selectAllPosts, fetchPosts, selectPostStatus } from './MainSlice';
import Sidebar from '../Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Main = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(selectPostStatus);
    const [ SubredditTerm, setSubredditTerm ] = useState('popular');

    useEffect(() => {
        dispatch(fetchPosts(SubredditTerm));
    }, [dispatch, SubredditTerm]);

    let content;

    if (postStatus === 'loading') {
        console.log('Posts are loading...');
        content = Array(10).fill().map((_, index) => (
            <div className="post" key={index}>
                <SkeletonTheme color="#202020" highlightColor="#444">
                        <h2 style={{width: '300px'}}><Skeleton className="skeleton-element" count={1} /></h2>
                        <p style={{width: '150px', height: '20px'}}><Skeleton className="skeleton-element" /></p>
                        <button style={{width: '100px'}}><Skeleton /></button>
                </SkeletonTheme>
            </div>
        ));
    } else if (postStatus === 'succeeded') {
        content = posts.map((post) => {
            const title = post.title;
            const author = post.author;
            return (
                <div className="post" key={post.id}>
                    <h3>{title}</h3>
                    <p>{author}</p>
                    {
                    post.preview 
                    ? <div dangerouslySetInnerHTML={{ __html: `<img src="${post.preview.images[0].source.url}" width="80%" alt="" />` }} /> 
                    : <p></p>
                    } 
                    <Link className="ReadMore-Button" to={`/post/${post.id}`}>Read More</Link>
                </div>
            );
        });
    } else if (postStatus === 'failed') {
        content = <div>Error loading posts.</div>;
    }

  return (
    <div className="MainPage">
      <Sidebar term={SubredditTerm} setTerm={setSubredditTerm}/>
      <div className='Main'>
        {content}
      </div>
    </div>
  );
}

export default Main;