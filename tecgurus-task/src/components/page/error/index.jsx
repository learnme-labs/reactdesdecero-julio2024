// 

import CentralViewTemplate from '../../template/central-view';

import './main.css';

const PageError = function() {
  return (
    <CentralViewTemplate>
      <div>
        <h1>Error 404</h1>
        <p>Página no encontrada</p>
      </div>
    </CentralViewTemplate>
    
  );
}

export default PageError;