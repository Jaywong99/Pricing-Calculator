import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

export class TabItem extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <span className="selected-box" onClick={()=> this.props.activeFunction()} style={{color:this.props.item.isActive ? "red":"black"}}>{this.props.item.name}</span>
        // <Tabs transition={false} id="noanim-tab-example" className="selected-box" onClick={()=> this.props.activeFunction()}>
        //   <Tab eventKey="home" title="Home">
        //     {this.props.item.name}
        //   </Tab>
        // </Tabs>
    );
  }
}

export default TabItem;
