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
        <div>title</div>
        <div>contenido</div>
        <div>botones</div>
      </div>

    </div>
  )
}
export default TweetCard;