//
import "./main.css";

import Loading from "./../../atom/atom-loading";
import TweetCard from "./../../organism/tweet-card";


const Dashboard = function({ data }) {
  let content = data.content.map((item, index)=> { 
      return (
          <div className="box-content-component" key={ index }>
            <TweetCard />
          </div>
      )
    });

  return (
    <div>
      <div name="header" className="box-header">
        seccion "header"
      </div>
      <div name="body" className="box-content">
        <div name="seccion-menu" className="dash-col-a"> 
          seccion "menu" 
        </div>

        <div name="seccion-contenido" className="dash-col-b">
          { content }
        </div>

        <div name="seccion-noticias" className="dash-col-c">
          seccion "noticias"
        </div>
      </div>
    </div>
  );
}

 export default Dashboard;
