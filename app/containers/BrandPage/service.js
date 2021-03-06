// Template function to send request to backend
const createRequest = (endpoint, method, bodyJS, hasFile) => {
  const fullUrl = `${process.env.API_ENTRY_PREFIX}/${endpoint}`;
  let body;
  const headers = new Headers();
  if (localStorage.getItem('token')) {
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
  }
  if (bodyJS !== null) {
    if (hasFile) {
      body = new FormData();
      Object.keys(bodyJS).forEach(key => {
        if (typeof bodyJS[key] === 'string') {
          body.append(key, bodyJS[key]);
        } else if (Array.isArray(bodyJS[key])) {
          bodyJS[key].map(file =>
            body.append(
              key,
              typeof file.name === 'string' || typeof file === 'string'
                ? file
                : JSON.stringify(file),
            ),
          );
        } else {
          body.append(
            key,
            typeof bodyJS[key].name === 'string' ||
            typeof bodyJS[key] === 'string'
              ? bodyJS[key]
              : JSON.stringify(bodyJS[key]),
          );
        }
      });
      // Object.keys(bodyJS).forEach(key =>
      //   body.append(
      //     key,
      //     typeof bodyJS[key] !== 'object' || bodyJS[key].preview
      //       ? bodyJS[key]
      //       : JSON.stringify(bodyJS[key]),
      //   ),
      // );
    } else {
      body = JSON.stringify(bodyJS);
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
    }
  }

  return new Request(fullUrl, {
    method,
    headers,
    body,
  });
};

// Template Function to be used to response according to the template result.
const callApi = (endpoint, method = 'GET', bodyJS = null, hasFile = false) => {
  const request = createRequest(endpoint, method, bodyJS, hasFile);
  return fetch(request)
    .then(response =>
      response.json().then(json => ({
        json,
        response,
      })),
    )
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(
          new Error({
            ...json,
            status: response.status,
          }),
        );
      }
      return Object.assign({}, json);
    })
    .then(
      response => ({
        response,
      }),
      error => ({
        error,
      }),
    )
    .catch(() => {
      // console.log('ERROR', error);
    });
};

// API to get Input Elements
export const getElementsService = type => {
  const url = `api/${type}`;
  return callApi(url, 'GET');
};

// API to create Input Elements
export const createElementService = (type, body) => {
  let url = `api/${type}`;
  if (type !== 'brand') {
    url = `api/brand/${body.brandId}/${type}`;
  }
  const value = type === 'brand' ? body : body.value;
  if (
    type === 'logo' ||
    type === 'font' ||
    type === 'icon' ||
    type === 'brand'
  ) {
    return callApi(url, 'POST', value, true);
  }
  return callApi(url, 'POST', value);
};

// API to update Input Elements
export const updateElementService = (type, body) => {
  let url = `api/${type}/${body._id}`;
  if (type !== 'brand') {
    url = `api/brand/${body.brandId}/${type}`;
  }
  const value = type === 'brand' ? body : body.value;
  if (
    type === 'logo' ||
    type === 'font' ||
    type === 'icon' ||
    type === 'brand'
  ) {
    return callApi(url, 'PUT', value, true);
  }
  return callApi(url, 'PUT', value);
};

// API to delete Input Elements
export const deleteElementService = (type, body) => {
  let url = `api/${type}/${body._id}`;
  if (type !== 'brand') {
    url = `api/brand/${body.brandId}/${type}/${body._id}`;
  }
  return callApi(url, 'DELETE');
};
