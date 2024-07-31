// src/components/

import "./main.css";

import AtomText from "../../atom/atom-text";
/**
 * 
 * @param {pathImage:String, opts:Object} param0 
 * @returns 
 */
const TweetContentText = function ({ text,  opts }) {
  return (
    <div className="tweet-content-text">
      <AtomText text={ text } />
    </div>
  );
}

export default TweetContentText;
