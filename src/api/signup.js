import { IS_DEBUG, WOLOX_BASE_EP } from '../config/envSettings';
import signupMock from './__mock__/signup.json';

async function signup(body) {
  if (IS_DEBUG) return new Promise(resolve => resolve(signupMock));

  const response = await fetch(`${WOLOX_BASE_EP}/signup`, {
    method: 'get',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();
  return data;
}

export { signup }