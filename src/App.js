import React, { Component } from 'react';
import axios from 'axios';
//import cloneDeep from 'lodash/cloneDeep';
import Filters from './components/filters/Filters';
import NowPlaying from './components/NowPlaying';
import Navbar from './components/Navbar';
import InfiniteScroll from 'react-infinite-scroller';
import ComparisonTable from './components/ComparisonTable';

// TMDB Info/Credentials
const base_url = "./products.json";
/*const api_key = "39b616a19667f17d8ffcaa175fc93491";*/

class App extends Component {
constructor(props){
    // Init state
  super(props)
  this.state = {
        items: [],
        criteria: [],
        isLoaded: false,
        selectedItems: [],
        selectedCheckbox: {
          XS: false,
          S: false,
          M: false,
          L: false,
          XL: false,
          XXL: false,
          XXXL: false
        },  
        slices:  [] ,
        length: 0,
        cart: 0,
        compareIndice:[],
        countcompare:false
    };

  this.updateCart= this.updateCart.bind(this);
  this.updateCompareList= this.updateCompareList.bind(this);

}
  
updateCompareList(i){
  this.setState({compareIndice: [...this.state.compareIndice,i],
                 countcompare: true
                 });
 
}
updateCart (){
  this.setState({cart: this.state.cart + 1});
}


    // Fire API on init
    componentDidMount() {
        // Fetch Genre Data
        axios.get(`${base_url}`)
            .then(res => this.setState({ criteria: res.data.criteria }));

        // // Fetch 'Now Playing' Data
        axios.get(`${base_url}`)
            .then(res => this.setState({
                items: res.data.products,
                isLoaded: true,
                defaultData: res.data.products //this will store default data
            }, ()=> console.log(this.state.items)));
        
       this.setState({ slices: this.state.items.slice(0,12) });
    }




fetchMoreData = () => {
      
     setTimeout(() => {
      this.setState({
        slices: this.state.items.slice(0,this.state.length)  , 
        length: this.state.length+12 });
    }, 1500);
  };

    // Update/Filter items
    updateItems = (e) => {
      //debugger;
        if (e.target.checked) {
            const currState = [...this.state.defaultData];
            
            const newState = currState.filter(items => items.size===e.target.name);
           
            let jasper = e.target.name;
            console.log(jasper)
            this.setState(prevState => ({
                slices: prevState.selectedItems.length >= 1 && prevState.items.length <= prevState.defaultData.length ? [...newState, ...prevState.selectedItems].slice(0,12) : newState.slice(0,12),
                items: prevState.selectedItems.length >= 1 && prevState.items.length <= prevState.defaultData.length ? [...newState, ...prevState.selectedItems] : newState,
                selectedItems:  [...newState, ...prevState.selectedItems],
                selectedCheckbox: {...prevState.selectedCheckbox, [jasper]: true}

            }));
            
        } else {
          if(this.state.items.length === 1) {
            this.setState ({ items: this.state.defaultData, selectedItems: [] });  
          } else {
            let jasper = e.target.name;
            const currState = [...this.state.items];
            const newState = currState.filter(item => !(item.size.includes(parseInt(e.target.name))))
            this.setState(prevState => ({ 
               items:newState,
               selectedItems: [],
               selectedCheckbox: {...prevState.selectedCheckbox, [jasper]: false}
            }));
          
          }
         
         
        }
        
    };

  render() {
    return (
      <>
{console.log(this.state.compareIndice)}
<div className="container">
    <div className="row">
              <div className="col-12 text-center mt-5">
                <h1>
                  Arvato Platform
                </h1>
                <h3 className="text-muted">
                Bertelsmann SE & Co. KGaA
                  <br />
                  <small>Best Shopping Platform</small>
                </h3>
              
              </div>
          
      </div>

      <Navbar cart={this.state.cart}/>
      <div className="row">
          <div className="col-3 justify-content-center">
          
              <div className="mt-4 border border-dark rounded">
                <Filters
                    updateItems={this.updateItems}
                    criteria={this.state.criteria}
                    currentItems={this.state.items}
                />
              </div> 
          </div>

            
            <div className="col-9 pt-2">
                <div className="container mr-4 px-0 bg-white ">
                 <ComparisonTable compareIndice = {this.state.compareIndice} showTable= {this.state.countcompare}/>

                <div className="card-columns  pr-3" >

              <InfiniteScroll
                    pageStart={0}
                    loadMore={this.fetchMoreData.bind(this)}
                    hasMore={true || false}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                  <NowPlaying
                      items={this.state.slices}
                      criteria={this.state.criteria}
                      triggerUpdateCart={this.updateCart}
                      triggerCompareList= {this.updateCompareList}
                                       />
                  
                  </InfiniteScroll>
            </div>
                  
              </div>   
            </div>

        

    </div>
</div>
      </>
    );
  }
}

export default App;