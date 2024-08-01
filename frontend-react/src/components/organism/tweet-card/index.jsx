//

import "./main.css";

import Avatar from "../../molecule/avatar";
import TweetAuthor from "../../molecule/tweet-author";
import TweetContentText from "../../molecule/tweet-content-text";
import TweetButtonShare from "../../molecule/tweet-buttons-share";


const TweetCard = function({ tweet, opts }) {
  return (
    <div className="tweet-card">
      
      <div className="tweet-col-a">
        <Avatar 
          profile={ 
            { 
              image: tweet.imageProfile,
              nickname: tweet.username,
              home: "https://google.com.mx"
            }
          }
          opts={
            {
              nickname: false    
            }
          }
        />
      </div>

      <div className="tweet-col-b">
        <div className="tweet-section-title">
          <TweetAuthor 
            author={ 
              { 
                nickname: tweet.username, 
                username: `${tweet.account.firstname} ${tweet.account.lastname}`
              } 
            } 
          />
        </div>
        <div className="tweet-section-content">
          <TweetContentText text={ tweet.content } />
        </div>
        <div className="tweet-section-share">
          <TweetButtonShare />
        </div>
      </div>

    </div>
  )
}
export default TweetCard;
