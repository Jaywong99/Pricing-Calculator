import React, { Component, useState } from 'react';
import {Collapse, Button} from 'react-bootstrap';
import featureData from '../productData/featureData';
import { toUnicode } from 'punycode';
import uuid from 'uuid';
import { debug } from 'util';
import TabItem from '../tab/tabItem';
import Swal from 'sweetalert2'
import supportData from '../productData/supportData';

class EmptyContent extends Component<any, any>{
  constructor(props : any){
    super(props);
    this.state = {
        products: this.props.products ? this.props.products : new Array(),
        supports: supportData,
        tabitem: this.props.tabItemData
        
      }
    }
    public handleDeleteAll = () =>{
      debugger
      // Swal.fire({
      //   title: 'Close estimate',
      //   text: "Are you sure you want to delete this estimate?",
      //   icon: 'warning',
      //   showCancelButton: true,
      //   confirmButtonColor: '#3085d6',
      //   cancelButtonColor: '#3085d6',
      //   confirmButtonText: 'Delete'
      // }).then((result) => {
      //   if (result.value) {
      //     Swal.fire(
      //       'Deleted',
      //       'Your estimate is deleted!.',
      //       'success'
      //     )
          let products = this.state.products;
          products.forEach((item: any) => {
            products.splice(item);
        });
          this.setState({products});
          // }
    // })
  }
  public handleCollapse(item:any,index: number){
    let products = this.state.products;
    products[index].isCollapse= !products[index].isCollapse;
    this.setState({products});
  }
  public handleShowAll = ()=>{
    let activeIndex = this.state.tabitem.findIndex((x:any) => x.isActive == true);
    let products = this.state.tabitem[activeIndex].products;
    products.forEach((item: any) => {
      item.isCollapse = true;
    });
    this.setState({products});
}
  public handleHide = () =>{
    let activeIndex = this.state.tabitem.findIndex((x:any) => x.isActive == true);
    let products = this.state.tabitem[activeIndex].products;
    products.forEach((item: any) => {
      item.isCollapse = false;
    });
    this.setState({products});
}
  render(){
    let totalEstimate = 0;
    let totalSupport = this.props.price ? this.props.price : this.state.supports[0].price;
    let total = 0;
    let activeIndex = this.state.tabitem.findIndex((x:any) => x.isActive == true);
    if(this.state.tabitem[activeIndex].products.length) {
      totalEstimate = this.state.tabitem[activeIndex].products.map((o:any) => o.price).reduce((a:any, c:any) => { return a + c });
      total = totalEstimate + totalSupport
    }
      return (
        <div className="header">
            <div className="row">
              <div className="col-md-12">
                <div className="row estimate-input">
                  <div className="col-md-8">
                    <input disabled className="input-type readonly" type="text" placeholder="Your Estimate" readOnly></input>
                  </div>
                  <div className="col-md-4 text-right estimate-total">
                    <span className="b text-total">Estimate total new: ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-right function">
                    <button 
                      onClick={this.handleShowAll}
                      className="button-transparent"
                      title="Expand all"
                      >
                      <i className="fa fa-expand"></i>
                    </button>
                    <button className="button-transparent"
                      onClick={this.handleHide}
                      title="Collapse all"
                    >
                      <i className="fa fa-compress"></i>
                    </button>
                    <button className="button-transparent"
                    onClick={this.handleDeleteAll}
                    title="Delete all"
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                </div>
                ABC
              
              {
                this.props.products.map((item: any, index:any) => <div className="row">
                    <div className="col-md-3">
                      <button className="list-products" 
                        onClick={()=>this.handleCollapse(item, index)}
                        >
                        {item.productName? item.productName: ""}
                      </button>
                      <button className="button-option-top" 
                      onClick={() => {this.props.handleDelete(item, index)}}
                      ><i className="fa fa-trash" title="Delete"></i></button>
                      <button className="button-option-top" 
                      onClick={() => {this.props.cloneTabItem(item)}}
                      >
                        <i className="fa fa-copy" title="Clone"></i></button>           
                    </div>
                    <div className="col-md-6 text-left">
                      <p className="text1" title="1 D2 v3 (2 vCPU(s), 8 GB RAM) x 730 Hours; Windows – Biztalk; Pay as you go; 0 managed OS disks – S4, 100 transaction units">
                        {item.title? item.title : ""}
                      </p>
                    </div>
                    <div className="col-md-3 text-right b1">
                      <span>$
                        {item.price?item.price : 0}
                      </span>
                    </div>
                    <hr className="hr-machine"></hr>
                    {item.isCollapse ?
                      <div> 
                        {item.productName}
                      </div> 
                    : null}
                  </div>
              )}
            </div>
          </div>
        </div>
    )
  }
}

export default EmptyContent;
