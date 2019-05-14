// import _ from "lodash";
import { DatePicker } from 'antd';
import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
class App extends Component {
  render() {
    return (
      <Grid fluid>
      <Col sm={12} className="row">
        <Col xs={6} md={3}>
        <DatePicker />
        </Col>
        <Col xs={6} md={3}>
        <DatePicker />
        </Col>
        <Col xs={6} md={3}>
        <DatePicker />
        </Col>
      </Col>
    </Grid>
    );
  }
}

export default App;
