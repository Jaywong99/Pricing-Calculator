import React, { Component } from 'react';

export class Header extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
    };
  
  }
  render() {
    return (
      <ul className="nav nav-pills" id="pills-tab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active nav-color" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-color" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Example Scenarios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-color" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Saved Estimates</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-color" id="pills-messages-tab" data-toggle="pill" href="#pills-messages" role="tab" aria-controls="pills-messages" aria-selected="false">FAQ</a>
        </li>
      </ul>
    );
  }
}

export default Header;
