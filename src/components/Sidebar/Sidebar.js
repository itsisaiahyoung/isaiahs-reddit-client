import React from "react";
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
const Sidebar = ({ term, setTerm }) => {

    const handleSubredditClick = (subreddit) => {
        setTerm(subreddit);
    }

    return (
        <div className="Sidebar">
            <h1>Subreddits</h1>
            <button className="Subreddit" onClick={() => handleSubredditClick('popular')}>
                <FontAwesomeIcon className="Subreddit-icon" icon={faStar} />
                <div>
                    <h3>r/Popular</h3>
                    <p>Popular Reddit...</p>
                </div>
            </button>
            <button className="Subreddit" onClick={() => handleSubredditClick('askreddit')}>
                <FontAwesomeIcon className="Subreddit-icon" icon={faComment} />
                <div>
                    <h3>r/AskReddit</h3>
                    <p>Ask Reddit...</p>
                </div>
            </button>
            <button className="Subreddit" onClick={() => handleSubredditClick('funny')}>
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