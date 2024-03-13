import React, { useEffect } from 'react';
import './Main.css';
import { selectAllPosts, fetchPosts } from './MainSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Main = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

  return (
    <div className='Main'>
      <h1>Popular Posts</h1>
      {posts.map((post) => {
            const title = post.title;
            const author = post.author;
            return (
                <div className="post" key={post.id}>
                    <h2>{title}</h2>
                    <p>{author}</p>
                    <image src={post.thumbnail} alt="thumbnail" />
                    <div className="Post-Content">
                    </div>

                    <Link to={`/post/${post.id}`}>Read More</Link>
                </div>
            )
        })}
    </div>
  );
}

export default Main;