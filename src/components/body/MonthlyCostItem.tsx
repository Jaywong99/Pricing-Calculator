import React, { Component } from 'react';
export class MonthlyCostItem extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
    <div>
              <div className="row">
                <div className="col-md-9 title-bottom">Estimated monthly cost</div>
                <div className="col-md-2 text-right title-bottom">$0</div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <button className="calculator-button button-option-button export-button btn btn-primary-hover" type="button">
                    <span>
                      <i className="fa fa-file-excel-o"></i>
                      <span>Export</span>
                    </span>
                  </button>
                  <button className="calculator-button button-option-button export-button btn btn-primary-hover" type="button">
                    <span>
                      <i className="fa fa-save"></i>
                      <span>Save</span>
                    </span>
                  </button>
                  <button className="calculator-button button-option-button export-button btn btn-primary-hover" type="button">
                    <span>
                      <i className="fa fa-share"></i>
                      <span>Share</span>
                    </span>
                  </button>
                </div>
                <div className="col-md-4 text-right currency">
                  <select className="select dropdown">
                    <optgroup label="Frequently Used">
                      <option>USD</option>
                      <option>VND</option>
                    </optgroup>
                    <optgroup label="ALL">
                      <option>CND</option>
                      <option>CAD</option>
                    </optgroup>
                  </select>
                </div>
              </div>
    </div>
    
    );
  }
}

export default MonthlyCostItem;
