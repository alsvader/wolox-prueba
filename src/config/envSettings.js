import packageJson from '../../package.json';

const ENVS = {
  dev: 'dev',
  prod: 'prod',
};

const ENV = ENVS[packageJson.env] || ENVS.dev;

const IS_DEBUG = ENV !== ENVS.prod;

const WOLOXAPI_ENV = {
  dev: 'https://private-anon-fc43d205cc-woloxfrontendinverview.apiary-mock.com',
  prod: 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com',
}

const WOLOX_BASE_EP = WOLOXAPI_ENV[ENV];

export { ENV, IS_DEBUG, WOLOX_BASE_EP };
