﻿const performRequest = (method, url, body) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  });

  return fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    credentials: 'include' // Include cookies in requests
  }).then((response) => {
    if (response.status === 204 || response.status === 401 || response.status === 403) {
      return {
        status: response.status,
        ok: response.ok,
        data: undefined
      };
    }

    return response.json()
      .then(data => ({
        status: response.status,
        ok: response.ok,
        data
      }));
  });
};

const get = url => performRequest('GET', url);

const post = (url, body) => performRequest('POST', url, body);

const put = (url, body) => performRequest('PUT', url, body);

const $delete = url => performRequest('DELETE', url);

export default { get, post, put, $delete };
