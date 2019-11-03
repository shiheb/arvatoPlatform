import React, {Component} from 'react';

class Filters extends Component {

    render() {
        return (
            <form>
                <a className="nav-link font-weight-bold bg-success text-white " data-toggle="collapse" href="#item-1" data-parent="#accordion1">Brand</a>

                <ul className="nav flex-column ml-3 pl-2">
                
                    {this.props.criteria.map(({ id, name }) => (
                        <li key={id}>
                            <label htmlFor="">
                                <input
                                    type="checkbox"
                                    name={name}
                                    onChange={this.props.updateItems}
                                />
                            &nbsp;&nbsp;{ name }
                            </label>
                        </li>
                    ))}

                </ul>
            </form>
        );
    }
}

export default Filters;