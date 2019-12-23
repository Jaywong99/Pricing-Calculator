import React, { Component, useState, useRef } from 'react';
import Select from 'react-select';
import AzureTestPricing from './MoreInfo/azureTestPricing';
import MicrosoftArgreement from '../body/MoreInfo/microsoftArgreement'

const options = [
  { value: '1', label: 'Microsoft Online Services Agreement' },
];
    
export class OfferItem extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      switch1: true,
    };
  }

  handleChange = (selectedOption: any) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  handleSwitchChange = (nr: any) => () => {
    let switchNumber = `switch${nr}`;
    this.setState({
      [switchNumber]: !this.state[switchNumber]
    });
  }
  render() {
    
    return (
    <div>
                <div className="row">
                <div className="col-md-12 title-bottom">Programs and Offers</div>
              </div>
              <hr className="hr-left" /*size="30"*/></hr>
              <div className="row">
                <div className="col-md-12">LICENSING PROGRAM:</div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-4">
                <Select
                 value={this.state.selectedValue}
                 defaultValue={options[0]}
                 onChange={this.handleChange}
                 options={options}
                />
                </div>
                <div className="col-md-8">
                  <MicrosoftArgreement/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 align-self-center" >
                  <div className='custom-control custom-switch'>
                      <input
                        type='checkbox'
                        className='custom-control-input'
                        id='customSwitches'
                        checked={this.state.switch1}
                        onChange={this.handleSwitchChange(1)}
                        readOnly
                      />
                      <label className='custom-control-label' htmlFor='customSwitches'>
                          SHOW DEV/TEST PRICING
                      </label>
                  </div>
                  <div className="col-md-6">
                    <AzureTestPricing/>
                  </div>
                </div>
              </div>
    </div>
    
    );
  }
}

export default OfferItem;
