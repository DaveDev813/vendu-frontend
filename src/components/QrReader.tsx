import React, { Component, ReactElement } from 'react';
import QrReader from 'react-qr-reader';

class QrScanner extends Component {
  state = {
    result: 'No result',
  };

  handleScan = (data: any): any => {
    if (data) {
      this.setState({
        result: data,
      });
    }
  };
  handleError = (err: any): any => {
    console.error(err);
  };
  render(): ReactElement {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '300px', height: '300px' }}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}
export default QrScanner;
