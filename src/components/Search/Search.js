import React from "react";
import "./Search.css";
import {
    selectSearchResults,
    searchPosts
} from "./SearchSlice" ;
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
    const dispatch = useDispatch();
    const searchResults = useSelector(selectSearchResults);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        dispatch(searchPosts(searchTerm));
    }
    return (
        <div className="Search">
            <h1>Search Posts</h1>
            <div className="Search-Input">
            <input type="text" placeholder="Search..." onChange={e => setSearchTerm(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
            </div>
            <div className="Search-Results">
                {searchResults.map(post => (
                    <div key={post.id} className="post">
                        <h3>{post.title}</h3>
                        <p>{post.author}</p>
                        <Link to={`/post/${post.id}`}>Read More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;