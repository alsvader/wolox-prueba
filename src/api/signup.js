import { IS_MOCKED_SERVER, WOLOX_BASE_EP } from '../config/envSettings';
import httpUtils from '../utils/httpUtils';
import signupMock from './__mock__/signup.json';

async function signup(body) {
  if (IS_MOCKED_SERVER) return new Promise(resolve => resolve(signupMock));

  return httpUtils.call(`${WOLOX_BASE_EP}/signup`, {
    method: 'post',
    body: JSON.stringify(body),
  });
}

export { signup }