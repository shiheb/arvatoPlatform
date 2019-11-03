import React, { Component } from 'react'
import { Table } from 'reactstrap';

export default class ComparisonTable extends Component {
    render() {
        return (
        <>
        { this.props.showTable &&    <div>
                <h4> Comparison Table</h4>
     
              <Table hover striped>
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Size</th>
                      <th>Brand</th>
                       <th>Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                     {this.props.compareIndice.map((item,i) => (
                        <tr key={i}>
                            <th scope="row">{ item.qualityName }</th>
                            <td>{ item.priceDE  }€</td>
                            <td>{ item.size}</td>
                            <td>{ item.brand }</td>
                            <td>{ item.colorName }</td>
                        </tr>
                     ))}
               
                  
                  </tbody>
                </Table>
             </div>   }
            </> 
        )
    }
}
