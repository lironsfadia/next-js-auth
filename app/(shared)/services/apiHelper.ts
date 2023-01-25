import { BASE_URL } from '../../../config';
import { Method, Path } from '@/constants/enums';
import { sendRequest } from './restHelper';

const callApi = (params: (string | number)[], method: Method = Method.GET, data: unknown = {}): Promise<any> => {
  // param = array of endpoint, id
  return sendRequest({
    requestUrl: getUrl(params),
    requestMethod: method,
    requestData: data,
    delayInMilliseconds: 0,
  });
};

const getUrl = (params: any[]): string => {
  let url = BASE_URL;
  params.forEach((param) => {
    url = param ? `${url}/${param}` : url;
  });
  return url;
};

export const getProducts = () => callApi([Path.PRODUCTS]);
export const getProduct = (id: string | number) => callApi([Path.PRODUCTS, id]);
export const postSignUp = (data: any) => callApi([Path.SIGN_UP], Method.POST, data);
