import React from "react";
import "./Search.css";
import {
    selectSearchResults,
    searchPosts,
    selectSearchStatus
} from "./SearchSlice" ;
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";

const Search = () => {
    const dispatch = useDispatch();
    const searchResults = useSelector(selectSearchResults);
    const [searchTerm, setSearchTerm] = useState('');
    const searchStatus = useSelector(selectSearchStatus);

    const handleSearch = () => {
        dispatch(searchPosts(searchTerm));
    }

    let content;

    if (searchStatus === 'loading') {
        content = Array(10).fill().map((_, index) => (
            <div className="post" key={index}>
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <h2 style={{width: '300px'}}><Skeleton className="skeleton-element" count={1} /></h2>
                    <p style={{width: '150px', height: '20px'}}><Skeleton className="skeleton-element" /></p>
                    <button style={{width: '100px'}}><Skeleton /></button>
                </SkeletonTheme>
            </div>
        )); 
    } else {
        content = searchResults.map(post => (
            <div key={post.id} className="post">
                <h3>{post.title}</h3>
                <p>{post.author}</p>
                <Link className="ReadMore-Button" to={`/post/${post.id}`}>Read More</Link>
            </div>
        ));
    }


    return (
        <div className="Search">
            <div className="Search-Header">
                <h1>Search Posts</h1>
                <div className="Search-Input">
                <input type="text" placeholder="Search..." onChange={e => setSearchTerm(e.target.value)}/>
                <button onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div className="Search-Results">
                {content}
            </div>
        </div>
    );
}

export default Search;