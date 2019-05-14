import React from "react";
import ReactDOM from "react-dom";
import "font-awesome/css/font-awesome.min.css";
import "react-flexbox-grid/dist/react-flexbox-grid.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./locals/css/index.css";
import 'antd/dist/antd.css';
import App from "./pages/App";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
