import React, { Component, useState, useRef } from 'react';
import {ButtonToolbar, OverlayTrigger, Tooltip} from 'react-bootstrap' 
function SupportInfo() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
  
    return (
      <>
        {/* <Button variant="link" ref={target} onClick={() => setShow(!show)}>
            <span><i className="fa fa-info-circle color-icon" aria-hidden="true"></i></span>
        </Button>
        <Overlay target={target.current} show={show} placement="right">
          {(props: any) => (
            <Tooltip id="overlay-example" {...props}>
              <div>
                <h4>Developer</h4>
                  <p>
                    <span>Developer support is for companies or individuals using Azure in a non-production environment or for trial and evaluation. 
                      <a href="/en-us/support/plans/developer/">Learn more</a>
                    </span>
                  </p>
                <h4>Standard</h4>
                  <p>
                    <span>
                      Standard support is for small- or mid-size companies with minimal business-critical dependence on Azure.
                      <a href="/en-us/support/plans/standard/">Learn more</a>
                    </span>
                  </p>
                <h4>Professional Direct</h4>
                  <p>
                    <span>
                      Professional Direct support is for mid-size to large companies with substantial business-critical use of Azure. 
                      <a href="/en-us/support/plans/prodirect/">Learn more</a>
                    </span>
                  </p>
              </div>
            </Tooltip>
          )}
        </Overlay> */}
        <ButtonToolbar>
            {[ 'right'].map((placement: any) => (
              <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                  <Tooltip id={`tooltip-${placement}`}>
                    <div>
                      <h4>Developer</h4>
                        <p>
                          <span>Developer support is for companies or individuals using Azure in a non-production environment or for trial and evaluation. 
                            <a href="/en-us/support/plans/developer/">Learn more</a>
                          </span>
                        </p>
                      <h4>Standard</h4>
                        <p>
                          <span>
                            Standard support is for small- or mid-size companies with minimal business-critical dependence on Azure.
                            <a href="/en-us/support/plans/standard/">Learn more</a>
                          </span>
                        </p>
                      <h4>Professional Direct</h4>
                        <p>
                          <span>
                            Professional Direct support is for mid-size to large companies with substantial business-critical use of Azure. 
                            <a href="/en-us/support/plans/prodirect/">Learn more</a>
                          </span>
                        </p>
                    </div>
                  </Tooltip>
                }
              >
                <span><i className="fa fa-info-circle color-icon" aria-hidden="true"></i></span>
              </OverlayTrigger>
            ))}
          </ButtonToolbar>
      </>
    );
  }
  export default SupportInfo    