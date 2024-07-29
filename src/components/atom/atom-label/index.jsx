// src\components\atom\atom-label\index.jsx


import "./main.css"

/**
 * 
 * @param { text:String, opts:Object } param0 
 *  opts    Object      { link:String, size:Integer }
 * @returns 
 */
const AtomLabel = function ( { text, opts }) {
  let style = {
    "font-size": ( opts.size ) ? `${opts.size}px`: "9px",
    "color": "red"
  };

  // renderizado condicional...
  let label = null;
  if ( opts.link ) {
    label = ( 
      <a href={ opts.link }>
        <strong style={ style }> { text } </strong>
      </a>
    );
  } else {
    label = ( 
      <strong style={ style }> { text } </strong>
    );
  }
  
  return (
    <div className="label-text">
      { label }
    </div>
  )
}

export default AtomLabel;