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

export function addNewListing(listing) {
  return request.post(rootUrl + "/listing")
    .send(listing)
    .then(result => {
      if (result.body === false) {
        return Promise.reject();
      }
      return result;
    })
}
