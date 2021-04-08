//@ts-check

import request from "superagent";

const rootUrl = "/api/v1";

export function getUsers() {
  return request.get(rootUrl + "/auth")
    .then(res => {
      return res.body.users;
    });
};
