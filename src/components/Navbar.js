import React, {Component} from 'react';
import '../scss/navbar.scss';

class Navbar extends Component {

   render() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">

                <a className="navbar-brand" href="#">
                    <img src="./media/Logo.png" width="50" height="50" className="d-inline-block align-top" alt="logo" />
                    
                    <img src="./media/ArvatoBertelsmann.png" width="90" height="50" className="d-inline-block align-top" alt="logo1" />
                </a>

                <div className="d-flex flex-row-reverse bd-highlight">

                    <div className="p-2 bd-highlight">
                    <a className="navbar-brand " href="#">
                        <i style={{fontSize:'24px'}} className="fa text-secondary ">&#xf406;</i>
                      
                    </a>
                    </div>
                    <div className="p-2 bd-highlight">
                    <a className="navbar-brand  noti" href="#">
                        <i style={{fontSize:'24px'}} className="fa text-secondary ">&#xf07a; </i>
                        <span className="badgeNot">{this.props.cart}</span>

                    </a>
                     </div>
                    <div className="p-2 bd-highlight">
                    
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    </div>
                    </div>
               

               
              

            </nav>
        </div>
    )
}
};

export default Navbar
