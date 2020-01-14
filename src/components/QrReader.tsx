import React, { Component, ReactElement } from 'react';
import QrReader from 'react-qr-reader';
import '../scss/bgWave.scss';

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
        {/* <div className="title">{this.state.result}</div> */}
        <div>
          <div className="header">
            <div className="inner-header flex">
              <QrReader
                delay={300}
                onError={this.handleError}
                onScan={this.handleScan}
                style={{ width: '300px', height: '300px' }}
              />
            </div>
            <div>
              <svg
                className="waves"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
              >
                <defs>
                  <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                  />
                </defs>
                <g className="parallax">
                  <use
                    xlinkHref="#gentle-wave"
                    x={48}
                    y={0}
                    fill="rgba(255,255,255,0.7"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x={48}
                    y={3}
                    fill="rgba(255,255,255,0.5)"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x={48}
                    y={5}
                    fill="rgba(255,255,255,0.3)"
                  />
                  <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
                </g>
              </svg>
            </div>
          </div>
          <div className="content flex">
            <h1>{this.state.result}</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default QrScanner;
