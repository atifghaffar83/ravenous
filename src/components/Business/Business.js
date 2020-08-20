import React from 'react';
import './Business.css';


class Business extends React.Component {
    render() {
        const {business} = this.props;
        return (
          <div className="Business">
            <div className="image-container">
              <a href={business.url} target="_blank" rel="noreferrer noopener">
                <img src={business.imageSrc} alt={business.name} />
              </a>
            </div>
            <h2>{business.name}</h2>
            <div className="Business-information">
              <div className="address">
                <a
                  className="Business-address"
                  href={`http://www.google.com/maps/place/${business.latitude},${business.longitude}`}
                  target="blank"
                >
                  <p>{business.address}</p>
                  <p>{business.city}</p>
                  {/* <p>{`${business.state} ${business.zipCode}`}</p> */}
                  <p>{business.zipCode}</p>
                </a>
              </div>
              <div className="Business-reviews">
                <h3>{business.category}</h3>
                <h3 className="rating">{business.rating} stars</h3>
                <p>{business.reviewCount} reviews</p>
              </div>
            </div>
          </div>
        );
    }
}

export default Business;
