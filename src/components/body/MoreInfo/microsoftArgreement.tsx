import React, { Component, useState, useRef } from 'react';
import {ButtonToolbar, OverlayTrigger, Tooltip} from 'react-bootstrap' 
function MicrosoftAgreement() {
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
                <span>
                    <h4>Microsoft Online Services Agreement</h4>
                        <p>This is our most popular and flexible payment plan. With Azure pay-as-you-go pricing, there’s no minimum purchase or commitment. 
                            Pay by credit card or invoice, and cancel anytime. 
                            <a href="/en-us/offers/ms-azr-0003p/">Learn more</a>
                        </p>
                </span>
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
                        <span>
                            <h4>Microsoft Online Services Agreement</h4>
                                <p>This is our most popular and flexible payment plan. With Azure pay-as-you-go pricing, there’s no minimum purchase or commitment. 
                                    Pay by credit card or invoice, and cancel anytime. 
                                    <a href="/en-us/offers/ms-azr-0003p/">Learn more</a>
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
  export default MicrosoftAgreement