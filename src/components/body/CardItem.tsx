import React, { Component } from 'react';
export class CardItem extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
        <div className="col-md-4" 
          onClick={() => {this.props.addProductAction()}}
        >
            <div className="service-box">
            <div className="row">
                <div className="col-12">
                <div>
                    <img src={this.props.item.iconName} alt="img1" className="image1"></img>         
                    <span className="b">{this.props.item.productName}</span>
                </div>
                <p>{this.props.item.content}</p>
                </div>
            </div>
            </div>
        </div>
    );
  }
}

export default CardItem;
