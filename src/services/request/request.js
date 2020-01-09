import { HTTP_METHODS } from './http-methods';

export const request = async (url, method = HTTP_METHODS.GET, requestData) => {
  const requestBody = {
    body: JSON.stringify(requestData),
    headers: {
      'Content-Type': 'text/plain',
    },
  };

  switch (method) {
    case HTTP_METHODS.PATCH:
      requestBody.method = HTTP_METHODS.PATCH;
      break;
    case HTTP_METHODS.PUT:
      requestBody.method = HTTP_METHODS.PUT;
      break;
    case HTTP_METHODS.POST:
      requestBody.method = HTTP_METHODS.POST;
      break;
    case HTTP_METHODS.UPDATE:
      requestBody.method = HTTP_METHODS.UPDATE;
      break;
    default:
      requestBody.method = HTTP_METHODS.GET;
      break;
  }

  const response = await fetch(url, requestBody);

  return response.json();
};
