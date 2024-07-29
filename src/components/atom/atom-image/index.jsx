// src\components\atom\atom-image\index.jsx

import "./main.css";

/**
 * 
 * @param {pathImage:String, opts:Object} param0 
 *    opts    Object      { width:Number }
 * @returns 
 */
const AtomImage = function ({ pathImage, opts }) {
  const DEFAULT_OPTS = {
    width: "50",
    height: "50",
    style: { }
  };

  let options = JSON.parse(JSON.stringify(DEFAULT_OPTS));
  if ( opts ) {
    options = Object.assign({ }, options, opts);
  }
  console.log("options", options)

  return (
    <div>
      <img 
        className="atomImage"
        src={ pathImage }
        width={ options.width }
      />
    </div>
  );
}

export default AtomImage;
