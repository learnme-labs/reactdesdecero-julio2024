// src\components\atom\atom-image\index.jsx

import "./main.css";

/**
 * 
 * @param {pathImage:String, opts:Object} param0 
 * @returns 
 */
const AtomImage = function ({ pathImage, opts }) {
  const DEFAULT_OPTS = {
    width: "128",
    style: { }
  };

  let options = JSON.parse(JSON.stringify(DEFAULT_OPTS));
  if ( opts ) { options = Object.assign({ }, options, opts) }

  let image = (
    <img 
      className = "atomImage"
      src = { pathImage }
      alt = "Profile image not available."
      width = { ( options.width ) ? options.width : DEFAULT_OPTS.width }
    />
  );
  return (<div>{image}</div>);
}

export default AtomImage;
