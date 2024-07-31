// src\components\atom\atom-label\index.jsx

import "./main.css"

/**
 * 
 * @param { text:String, opts:Object } param0 
 * @returns 
 */
const AtomLabel = function ({ text, opts }) {
  const DEFAULT_OPTS = { 
    link: null
  };

  let options = JSON.parse(JSON.stringify(DEFAULT_OPTS));
  if ( opts ) { options = Object.assign({ }, options, opts) }


  // renderizado condicional...
  //  * condicional fuera del proceso de renderizado
  let label = null;
  if ( options.link ) {
    label = ( 
      <a href={ options.link }> 
        <span className="text-label"> { text } </span> 
      </a> 
    );
  } else {
    label = ( 
      <span className="text-label"> { text } </span> 
    );
  }
  return (<div>{ label }</div>);
}

export default AtomLabel;
