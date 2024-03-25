import React from "react";
import './Sidebar.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
const Sidebar = ({ term, setTerm }) => {
    const [selectedSubreddit, setSelectedSubreddit] = useState('popular');

    const handleSubredditClick = (subreddit) => {
        setTerm(subreddit);
        setSelectedSubreddit(subreddit);
    }

    return (
        <div className="Sidebar">
            <h1>Subreddits</h1>
            <button className={`Subreddit ${selectedSubreddit === 'popular' ? 'selected' : ''}`} onClick={() => handleSubredditClick('popular')}>
                <FontAwesomeIcon className="Subreddit-icon" icon={faStar} />
                <div>
                    <h3>r/Popular</h3>
                    <p>Popular Reddit...</p>
                </div>
            </button>
            <button className={`Subreddit ${selectedSubreddit === 'askreddit' ? 'selected' : ''}`} onClick={() => handleSubredditClick('askreddit')}>
                <FontAwesomeIcon className="Subreddit-icon" icon={faComment} />
                <div>
                    <h3>r/AskReddit</h3>
                    <p>Ask Reddit...</p>
                </div>
            </button>
            <button className={`Subreddit ${selectedSubreddit === 'funny' ? 'selected' : ''}`} onClick={() => handleSubredditClick('funny')}>
                <FontAwesomeIcon className="Subreddit-icon" icon={faFaceSmile} />
                <div>
                    <h3>r/funny</h3>
                    <p>Funny Reddit...</p>
                </div>
            </button>
        </div>
    )
}

export default Sidebar;