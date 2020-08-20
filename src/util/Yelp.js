const apiKey = "wJ8JHXT72vGPqiKfzkgd_JbYwXHdfyil5qI-X_ynoTC-ilQZ2pyVzsc8uXelSiCukHIunwQUplEcCAMH805w31pRSu-t3pxzFIHmGNyDXJx7loZ4y3TFrjMk5-M8X3Yx";

export const Yelp = {
  searchYelp(term, location, sortBy){
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    ).then((response) => {
        return response.json();
      }).then(jsonResponse =>{
          if (jsonResponse.businesses) {
              return jsonResponse.businesses.map( business => { 
                //console.log(business);
                return {
                  id: business.id,
                  imageSrc: business.image_url,
                  url: business.url,
                  name: business.name,
                  address: business.location.address1,
                  city: business.location.city,
                  state: business.location.state,
                  zipCode: business.location.zip_code,
                  category: business.categories[0].title,
                  rating: business.rating,
                  reviewCount: business.review_count,
                  latitude: business.coordinates.latitude,
                  longitude: business.coordinates.longitude,
                };
              })
          }
      });

  }
};