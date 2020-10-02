import { response } from './utils/response';

export const hello = async event => {
  return response(200, { msg: 'Hello world', event });
};