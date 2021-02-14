//@ts-check

import request from 'superagent'

const rootUrl = '/api/v1'

export function getCars () {
  return request.get(rootUrl + '/cars')
    .then(res => {
      return res.body.cars;
    });
};
