//@ts-check

import request from "superagent";

const rootUrl = "/api/v1";

export function login(email, password) {
    return request.post(rootUrl + "/auth")
        .send({email: email, password: password})
};
