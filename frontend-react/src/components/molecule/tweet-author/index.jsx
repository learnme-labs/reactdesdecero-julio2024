// src/components/

import "./main.css";

import AtomLabel from "../../atom/atom-label";

/**
 * 
 * @param {pathImage:String, opts:Object} param0 
 * @returns 
 */
const TweetAuthor = function ({ author, opts }) {
  return (
    <div className="tweet-autor">
      <div className="autor-col">
        <AtomLabel text={ author.nickname } />
      </div>

      <div className="autor-col">
        <AtomLabel text={ author.username } />
      </div>
    </div>
  );
}

export default TweetAuthor;
