// src\components\molecule\avatar\index.jsx

import AtomImage from "../../atom/atom-image";
import AtomLabel from "../../atom/atom-label";

import "./main.css";

const Avatar = function () {

  return (
    <div className="avatar">
      <AtomImage 
        pathImage="https://play-lh.googleusercontent.com/i8fGO7LrghUKcBCijVf09Vy_FET5-tCh35O6FTFjkHUMixnCRokmaKMZOKNvf4k2P3Y" 
        opts={ { width:"100" } }
      />
      <AtomLabel text="@oskrmarq" opts={ { size:9 } }/>
    </div>
  );

}

 export default Avatar;
