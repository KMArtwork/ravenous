import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {this.props.business.map(businessArg => {
                    return <Business business={businessArg} key={Business.id} />;
                })}
            </div>
        );
    }
}

export default BusinessList;