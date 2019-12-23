import React, { Component, useState, useRef } from 'react';
import {Button, ButtonToolbar, Tooltip, OverlayTrigger} from 'react-bootstrap' 
function AzureTestPricing() {
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
                  <h4>Azure Dev/Test Pricing</h4>
                  <p>Dev/Test pricing applies only when you run the resources within an Azure subscription that is based on one of the Dev/Test offers. 
                      <a href="/en-us/pricing/dev-test/">Learm more</a>
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
                      <span className="max-width: 100%">
                        <h4>Azure Dev/Test Pricing</h4>
                        <p>Dev/Test pricing applies only when you run the resources within an Azure subscription that is based on one of the Dev/Test offers. 
                            <a href="/en-us/pricing/dev-test/">Learm more</a>
                        </p>
                      </span>
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
  export default AzureTestPricing