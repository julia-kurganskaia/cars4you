//@ts-check

import request from "superagent";

const rootUrl = "/api/v1";

// request.post в /auth возвращает резолвнутый промис
// с объектом ответа, у которого есть .body
export function login(email, password) {
    return request.post(rootUrl + "/auth")
        .send({email: email, password: password})
        .then(result => {
            if (result.body === false) {
                return Promise.reject();
            }
            return result;
        })
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

export function signUp(name, email, password) {
    return request.post(rootUrl + "/registration")
        .send({name: name, email: email, password: password,})
        .then(result => {
          if (result.body === false) {
            return Promise.reject();
          }
          return result;
        })
};
