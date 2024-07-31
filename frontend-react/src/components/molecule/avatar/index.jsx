// src\components\molecule\avatar\index.jsx

import AtomImage from "../../atom/atom-image";
import AtomLabel from "../../atom/atom-label";

import "./main.css";

const Avatar = function ({ profile, opts }) {
  return (
    <div className="avatar">
      <AtomImage pathImage={ profile.image } />

      { ( opts.nickname && <AtomLabel text={ profile.nickname } opts={ { link:profile.home } } /> ) }
    </div>
  );

}

 export default Avatar;
