// src\components\atom\atom-label\index.jsx

import "./main.css"

/**
 * 
 * @param { text:String, opts:Object } param0 
 * @returns 
 */
const AtomText = function ({ text, opts }) {
  const DEFAULT_OPTS = { };

  let options = JSON.parse(JSON.stringify(DEFAULT_OPTS));
  if ( opts ) { options = Object.assign({ }, options, opts) }


  let content = (
    <p className="text-text">{ text }</p>
  );
  return (<div>{ content }</div>);
}

export default AtomText;
