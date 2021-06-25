//@ts-check

import request from "superagent";

const rootUrl = "/api/v1";

export function getCars() {
  return request.get(rootUrl + "/cars")
    .then(res => {
      return res.body.cars;
    })
    .catch(err => {
      console.log(err);
      return [];
    });
};

export function addNewListing(location, model, colour, odometer, engine, fuel, transmission, description, price, year, seats) {
  return request.post(rootUrl + "/listing")
    .send({
      location_id: location,
      model_id: model,
      colour: colour,
      odometer: odometer,
      engine: engine,
      fuel: fuel,
      transmission: transmission,
      description: description,
      price: price,
      year: year,
      seats: seats,
    })
    .then(result => {
      if (result.body === false) {
        return Promise.reject();
      }
      return result;
    })
}
