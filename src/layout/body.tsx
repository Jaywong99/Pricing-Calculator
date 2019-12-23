import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


import React, { Component } from 'react';
import uuid from "uuid";
import Header from '../components/body/header';
import MainContent from '../components/body/mainContent';
import TabItem from '../components/tab/tabItem';
import { debug } from 'util';
import EmptyContent from '../components/body/emptyPage';
import SupportItem from '../components/body/supportItem';
import OfferItem from '../components/body/OfferItem';
import MonthlyCostItem from '../components/body/MonthlyCostItem';
import supportData from '../components/productData/supportData';
import TestCode from '../components/body/test1'

class Body extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      tabItemData: [
        {
          id: uuid(),
          name: "New Tab 1" ,
          isActive:true,
          products: new Array(),
          totalPrice: 0,
        },

      ],
      selectedOption: 0,
      supports: supportData
      
    }
  }
  public handleChange = (selectedOption: any) => {
     const price = selectedOption.price;
     this.setState({price})
     console.log(price)
  }

  public deleteTabItem(item: number, index:any){  
      let activeIndex = this.state.tabItemData.findIndex((x:any) => x.isActive == true);
      let products = this.state.tabItemData[activeIndex].products;
      products.splice(index, 1);
      this.setState({products});
 }
   public cloneTabItem(selectedCloneProduct: any, index:any){
    let products = this.state.tabItemData[index].products;
    let newselectedCloneProduct = {...selectedCloneProduct, id: uuid()};
    selectedCloneProduct = newselectedCloneProduct;
    products.push(selectedCloneProduct);
    this.setState({products});
    console.log(selectedCloneProduct.id)
  }
  public isActive(item:any,index: number){
    debugger
    let tabItemData = this.state.tabItemData;

    tabItemData.forEach((tabItem:any) => {
      tabItem.isActive = false;
    });

    tabItemData[index].isActive= !tabItemData[index].isActive;

    this.setState({tabItemData});
    console.log(this.state.tabItemData[index].products)
  }

  public addProductAction(selectedProduct: any){
    let activeIndex = this.state.tabItemData.findIndex((x:any) => x.isActive == true);
    if(activeIndex !== -1){
      this.state.tabItemData[activeIndex].products.push(
        {...selectedProduct, id:uuid()}
      );
      let tabItemData = this.state.tabItemData;
      this.setState({tabItemData});
    }
  }
  public addTabAction(){
    let tabItemData = this.state.tabItemData;
    tabItemData.forEach((tabItem:any) => {
      tabItem.isActive = false;
    });
    tabItemData.push({
      id: uuid(),
      name: "New Tab "+ tabItemData.length,
      isActive:true,
      products: new Array(),
      totalPrice: 0,
    });
    this.setState({tabItemData});
  }
  // public handleDeleteTab(item:any,index: number){
  //   let currentIndex = this.state.tabItemData.findIndex((x:any) => x.id == item.id);
  //   let tabItemData = this.state.tabItemData;
  //   tabItemData.splice(currentIndex, 1);
  //   tabItemData.forEach((tabItem:any) => {
  //     tabItem.isActive = false;
  //   });
  //   tabItemData[tabItemData.length - 1].isActive=true;
  //   this.setState({tabItemData})
  // }
  public handleDeleteTab(item:any,index: number){
    let tabItemData = this.state.tabItemData;
    tabItemData.splice(index, 1);
    tabItemData.forEach((tabItem:any) => {
      tabItem.isActive = false;
    });
    tabItemData[tabItemData.length - 1].isActive=true;
    this.setState({tabItemData})
  }
  public totalEstimate(index:any) {
    console.log(index)
  }
  
  render() {
    let activeIndex = this.state.tabItemData.findIndex((x:any) => x.isActive == true); 
    return (
      <div className="container-fluid">
          <Header />
          <MainContent 
          listSelectedProduct={this.state.tabItemData.products} 
          addProductAction={(item:any)=>this.addProductAction(item)}
          />
          {/* Tab */}
          <div className="tabs-list">
          <ul className="nav nav-tabs estimate-tabs">
            {
              this.state.tabItemData.map((tab:any,index:number, item: any )=> {
                return (
                  <li className="tab" key={index}>
                    <div className={"btn-group pull-right " + (this.props.showBulkActions ? 'show' : 'hidden')}></div>
                    {/* <button
                      className={tab.isActive ? "tab active" : "tab"}
                      onClick={() => {this.isActive(tab, index)}}
                    >
                      {tab.name}
                    </button> */}
                    {/* <div className="row"> */}
                      {/* <div className="col-md-12 estimate-selected"> */}
                        <button className={this.state.tabItemData[index].isActive ? "selected-box selected-box-active" : "selected-box"}
                         onClick={() => {this.isActive(tab, index)}}>
                        {tab.name}
                        </button>
                        {this.state.tabItemData.length > 1 ? 
                          <button className="delete-tab" onClick={() =>this.handleDeleteTab(item, index)}>x</button>: null
                        }
                      {/* </div> */}
                    {/* </div> */}
                  </li>
                );
              })
            }
          </ul>
          
          {
            this.state.tabItemData.length >= 1 ?
            <button type="button" className="btn btn-primary add-tab" onClick={()=>this.addTabAction()}>+</button>
            : null
          }
          </div>
          <div className="row table2">
            <EmptyContent 
            tabItemData={this.state.tabItemData}  
            products={this.state.tabItemData[activeIndex].products}
            cloneTabItem={(item: any)=>this.cloneTabItem(item, activeIndex)}
            handleDelete={(item: any, index:any) => this.deleteTabItem(item,index)}
            totalEstimate={(index:any) => this.totalEstimate(index)}
            isActive={(tab:any, index:any)=>{this.isActive(tab, index)}}
            handleChange={(selectedOption: any)=>this.handleChange(selectedOption)}
            price={this.state.price}
            />
            <div className="col-md-12">
              {/* <!--Support --> */}
              <div className="tab-content col-12 table2-2">
                <SupportItem
                  handleChange={(selectedOption: any)=>this.handleChange(selectedOption)}
                  products={this.state.tabItemData[activeIndex].products}
                  price={this.state.price}
                />
                <OfferItem/>
                <hr className="hr-left" /*size="30"*/></hr>
                <MonthlyCostItem estimate={this.state.estimate}/>
              </div>
            </div> 
          </div>  
      </div>
    );
  }
}

export default Body;
