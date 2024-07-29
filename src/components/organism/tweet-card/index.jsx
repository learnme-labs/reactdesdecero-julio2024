//

import "./main.css";

import Avatar from "../../molecule/avatar";

const TweetCard = function () {
  return (
    <div className="tweet-card">
      
      <div className="tweet-col-a">
        <Avatar />
      </div>

      <div className="tweet-col-b">
        <p> contendio del tweet </p>
      </div>
      
    </div>
  )
}

export default TweetCard;