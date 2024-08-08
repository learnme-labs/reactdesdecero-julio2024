//

import "./main.css";

const CentralViewTemplate = function ({ props, children }) {
  return (
    <div name="body" className="view-central-box">
      <div name="container" className="view-col-a">
        { children }
      </div>
    </div>
  );
}

export default CentralViewTemplate;