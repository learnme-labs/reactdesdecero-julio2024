// src/components/

import "./main.css";

export const AtomButtonReply = function({ clickHandler, opts }) {
  return (<i className="fa fa-reply reply-button atomButton" onClick={ () => { clickHandler('replay') } }/>);
};

export const AtomButtonRetweet = function({ clickHandler, opts }) {
  return (<i className="fa fa-retweet retweet-button atomButton" onClick={ () => { clickHandler('retweet') } }/>);
};

export const AtomButtonLike = function({ clickHandler, opts }) {
  return (<i className="fa fa-heart like-button atomButton" onClick={ () => { clickHandler("like") } }/>);
};

export const AtomButtonMoreoptions = function({ clickHandler, opts }) {
  return (<i className="fa fa-ellipsis-h more-options-button atomButton" onClick={ () => { clickHandler("like") } }/>);
};
