import React from 'react';
import './Business.css';

class Business extends React.Component {
    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={this.props.businessP.imageSrc} alt=''/>
                </div>
                <h2>{this.props.businessP.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{this.props.businessP.address}</p>
                        <p>{this.props.businessP.city}</p>
                        <p>{this.props.businessP.state} {this.props.businessP.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{this.props.businessP.category}</h3>
                        <h3 className="rating">{this.props.businessP.rating}</h3>
                        <p>{this.props.businessP.reviewCount}</p>
                    </div>
                </div>
            </div>
        );
    }
  }

export default Business;