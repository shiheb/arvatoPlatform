import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../scss/productItem.scss';

class ProductItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hover: false,
            index: -1,
          
            selectedToCompare:[]
        }
        this.sendData=this.sendData.bind(this);
    }
    


    sendData = () => {
        this.props.triggerCompareList1(this.props.item);
        
        
   }
    render() {
        return (
             <>


                   <div className="card rounded border-secondary mb-3 m-2 pb-0 pt-3 " 
                  
                   onMouseEnter={() => this.setState({ hover: true ,index: this.props.key1})}
                onMouseLeave={() => this.setState({ hover: false , index: -1})}
                style={this.state.index===this.props.key1 ?  { boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'} : {}
        }>

                   <img className="card-img-top rounded px-1 d-block" src="./media/product.png" alt="Card cap"/>
                  <div className="card-body">
                  <h5 className="card-title mb-1">{ this.props.item.qualityName } </h5>
                  <span  className=" badge bg-blue mb-1 float-right font-weight-bold bg-success text-white "> { this.props.item.priceDE }€ </span>
                  <p className="card-text mb-3 pb-0 " style={this.state.index===this.props.key1 ?  {} : {display:'none' } }>
                  <small className="text-muted"  >{this.props.item.articleDescription}</small></p>

                         
                  <div className="card-text mb-2">
                

                  <div className="d-flex "  >
                        <div  style={this.state.index===this.props.key1 ?  {} : {display:'none' }} >
                        <span href="#" className="float-left badge badge-light "> Size : {this.props.item.size}</span>
                        </div>
                        </div>
                       <div className="d-flex "  > 
                        <div className=""  style={this.state.index===this.props.key1 ?  {} : {display:'none' }} >
                        <span href="#" className=" badge badge-dark">{this.props.item.brand}</span>
                        </div>
                 

                </div>
                  
                  <button type="button" className="btn btn-secondary btn-lg btn-block focus:outline-none focus:shadow-outline " onClick={this.props.triggerUpdateCart1} >Add to Cart {" "}<i className="fas fa-shopping-cart"></i></button>


                        </div>
                    </div>
                    <button type="button" onClick={this.sendData} className="btn btn-info btn-lg focus:outline-none focus:shadow-outline " >Compare List{" "}<i className="fas fa-chevron-circle-up"></i></button>
                  </div>
    
          </>
        );

    }
}

ProductItem.propTypes = {
   item: PropTypes.object.isRequired
};

export default ProductItem;