import React, {Component} from 'react';
import ProductItem from './ProductItem';

import '../scss/products.scss';

class NowPlaying extends Component {
  
  

 

sendData = () => {
         this.props.cart(5);
         console.log(this.props.cart);
    };
   
    // Get criteria for given movie
    getCriteria = (genreIds, criteria) => {
        
        const filteredGenres = criteria.find(genre => genre.name === genreIds);
        if (criteria === undefined || criteria.length === 0) {
            return false;
        }
        
     return [filteredGenres.name];
        

    };

    render() {
    

        return (

          <> 
            
            
                {this.props.items.map((item,i) => (
                <ProductItem
                    key={i}
                    item={item}
                    criteria={this.getCriteria(item.size, this.props.criteria)}
                    key1={i}
                    triggerUpdateCart1={ this.props.triggerUpdateCart}
                />
                ))}
               
        </>
        )

    }
}

// NowPlaying.propTypes = {
//     movies: PropTypes.array.isRequired
// };

export default NowPlaying;