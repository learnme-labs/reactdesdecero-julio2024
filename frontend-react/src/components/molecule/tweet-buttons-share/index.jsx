// src/components/

import "./main.css";

import { AtomButtonReply, AtomButtonRetweet, AtomButtonLike, AtomButtonMoreoptions } from "../../atom/atom-button";

/**
 * 
 * @param {pathImage:String, opts:Object} param0 
 * @returns 
 */
const TweetButtonShare = function ({ opts }) {
  function clickHandler(text) { alert(text) }

  return (
    <div className="tweet-button-share">
      <div className="button-col"> &nbsp; </div>
      <div className="button-col"> <AtomButtonReply clickHandler={ clickHandler }/> </div>
      <div className="button-col"> <AtomButtonRetweet clickHandler={ clickHandler }/> </div>
      <div className="button-col"> <AtomButtonLike clickHandler={ clickHandler }/> </div>
      <div className="button-col"> <AtomButtonMoreoptions clickHandler={ clickHandler }/> </div>
      <div className="button-col"> &nbsp; </div>      
    </div>
  );
}

export default TweetButtonShare;
