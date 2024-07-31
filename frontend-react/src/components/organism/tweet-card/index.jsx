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
              image: "https://img.buzzfeed.com/buzzfeed-static/complex/images/ic7defqune831dh9orwm/memoji-2.png",
              nickname: "@oskrmarolv",
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
                nickname: "@oskrmarolv", 
                username: "Oscar Marq"
              } 
            } 
          />
        </div>
        <div className="tweet-section-content">
          <TweetContentText text="Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis..." />
        </div>
        <div className="tweet-section-share">
          <TweetButtonShare />
        </div>
      </div>

    </div>
  )
}
export default TweetCard;
