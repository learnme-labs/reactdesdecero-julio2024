//

import "./main.css";

const Dashboard = function ({ content }) {
  // let lista = content.map(item => { return });

  return (
    <div>
      <div name="header" className="box-header">
        seccion de encabezado
      </div>
      <div name="body" className="box-content">
        <div name="seccion-menu" className="dash-col-a"> 
          menu
        </div>

        <div name="seccion-contenido" className="dash-col-b">
          contenido
        </div>

        <div name="seccion-noticias" className="dash-col-c">
          noticias
        </div>
      </div>
    </div>
  );
}

 export default Dashboard;
