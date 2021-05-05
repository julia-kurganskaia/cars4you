//@ts-check

import request from "superagent";

const rootUrl = "/api/v1";

export function login(email, password) {
    return request.post(rootUrl + "/auth")
        .send({email: email, password: password})
};

export function logout() {
    return request.post(rootUrl + "/auth/logout");
};

export function getProfile() {
    return request.get(rootUrl + "/profile")
        .then(res => {
            return res.body;
        })
};
