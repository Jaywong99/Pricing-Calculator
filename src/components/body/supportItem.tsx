import React, { Component } from 'react';
import supportData from '../productData/supportData';
import Select from 'react-select';
import TabItem from '../tab/tabItem';
import SupportInfo from '../body/MoreInfo/supportInfo'
 
export class SupportItem extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
        selectedOption: 0,
        supports: supportData,
        tabitem: this.props.tabItemData
        };
      }
      render() {
        
        return (
        <div>
          <div className="row">
            <div className="col-md-12 title-bottom">Support</div>
          </div>
          <hr className="hr-left"></hr>
          <div className="row">
            <div className="col-md-12"> SUPPORT</div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-3">
            <Select
              value={this.state.selectedValue}
              defaultValue={supportData[0]}
              onChange={this.props.handleChange}
              options={supportData}
            />
            </div>
            <div className="col-md-8">
              <SupportInfo/>
            </div>
            <div className="col-md-1 text-right">
              ${this.props.price ? this.props.price : 0}
            </div>
          </div>
        </div>
        
        );
      }
    }

export default SupportItem;
