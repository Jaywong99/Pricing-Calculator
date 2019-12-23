import React, { Component } from 'react';

import CardItem from '../body/CardItem'
import featureData from '../productData/featureData' 
import supportData from '../productData/supportData'
import uuid from "uuid";
import EmptyContent from './emptyPage';
import SupportItem from './supportItem'

export class MainContent extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      supportProduct: supportData,
      featureProduct: featureData,
      id: uuid(),  
      listSelectedProduct: this.props.listSelectedProduct ? this.props.listSelectedProduct : new Array(),
    };
  }
 
  render() {
    return (
      // <!-- Tab panes --> 
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active box table2" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <div className="tab-title all-content">Select a product to include it in your estimate.</div>
            {/* <!--Menu Left--> */}
            <div className="tab-content col-12">
              <div className="row">
              <div className="product-search-container">
              <input className="product-search" aria-label="Search listSelectedTab" placeholder="Search listSelectedTab" value=""></input>
              <button className="clear-search" aria-label="Clear search" type="button" data-event="page-clicked-button" data-bi-id="page-clicked-button" data-bi-area="content">×</button>
            </div>
              </div>
              <div className="row">
                <div className="nav flex-column nav-pills col-2 color" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link active" id="v-pills-featured-tab" data-toggle="pill" href="#v-pills-featured" role="tab" aria-controls="v-pills-featured" aria-selected="true">Featured</a>
                    <a className="nav-link" id="v-pills-compute-tab" data-toggle="pill" href="#v-pills-compute" role="tab" aria-controls="v-pills-compute" aria-selected="false">Compute</a>
                    <a className="nav-link" id="v-pills-networking-tab" data-toggle="pill" href="#v-pills-networking" role="tab" aria-controls="v-pills-networking" aria-selected="false">Networking</a>
                    <a className="nav-link" id="v-pills-storage-tab" data-toggle="pill" href="#v-pills-storage" role="tab" aria-controls="v-pills-storage" aria-selected="false">Storage</a>
                    <a className="nav-link" id="v-pills-web-tab" data-toggle="pill" href="#v-pills-web" role="tab" aria-controls="v-pills-web" aria-selected="false">Web</a>
                </div>
                {/* <!--listSelectedTab--> */}
                <div className="tab-content col-10" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="v-pills-featured" role="tabpanel" aria-labelledby="v-pills-featured-tab">
                    <div className="row">
                      {this.state.featureProduct.map((item: any, index:any) => <CardItem key={item.id}  item={item} addProductAction={()=>this.props.addProductAction(item)}
                      />)}
                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-pills-compute" role="tabpanel" aria-labelledby="v-pills-compute-tab">
                    <div className="row">
                      Computer
                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-pills-networking" role="tabpanel" aria-labelledby="v-pills-networking-tab">Networking</div>
                  <div className="tab-pane fade" id="v-pills-storage" role="tabpanel" aria-labelledby="v-pills-storage-tab">Storage </div>
                  <div className="tab-pane fade" id="v-pills-web" role="tabpanel" aria-labelledby="v-pills-web-tab">Web</div>
                </div>
              </div>
            </div>
        </div>
        <div className="tab-pane fade box table2" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
          <div className="tab-title all-content">Select an example scenario to include in your estimate. You may add or remove listSelectedTab in your example scenario.</div>
            <div className="tab-content col-12">
              "Example scenarios"
            </div>
        </div>
        <div className="tab-pane fade box table2" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
        <div className="tab-title all-content">Your saved estimates</div>
        <div className="tab-content col-12">"Saved Estimates"</div>
        </div>
      <div className="tab-pane fade box table2" id="pills-messages" role="tabpanel" aria-labelledby="pills-messages-tab">
        <div className="tab-title all-content">Pricing Calculator Frequently Asked Questions</div>
        <div className="tab-content col-12">"FAQ"</div>
      </div>         
    </div>
    );
  }
}

export default MainContent;
