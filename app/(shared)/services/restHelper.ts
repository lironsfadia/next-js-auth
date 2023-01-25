import axios from 'axios';

export const sendRequest = async ({ requestMethod, requestUrl, requestData, delayInMilliseconds = 0 }: any) =>
  axios({
    method: requestMethod,
    url: requestUrl,
    data: requestData,
  }).then(
    (value) =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(value.data);
        }, delayInMilliseconds);
      }),
  );
