import { httpMethods } from './http-methods';

export const request = async (url, method = httpMethods.GET, requestData) => {
  const requestBody = {
    body: JSON.stringify(requestData),
    headers: {
      'Content-Type': 'text/plain',
    },
  };

  switch (method) {
    case httpMethods.PATCH:
      requestBody.method = httpMethods.PATCH;
      break;
    case httpMethods.PUT:
      requestBody.method = httpMethods.PUT;
      break;
    case httpMethods.POST:
      requestBody.method = httpMethods.POST;
      break;
    case httpMethods.UPDATE:
      requestBody.method = httpMethods.UPDATE;
      break;
    default:
      requestBody.method = httpMethods.GET;
      break;
  }

  const response = await fetch(url, requestBody);

  return response.json();
};
