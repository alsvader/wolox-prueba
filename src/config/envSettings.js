import packageJson from '../../package.json';

const ENVS = {
  dev: 'dev',
  prod: 'prod',
};

const ENV = ENVS[packageJson.env] || ENVS.dev;

const IS_DEBUG = ENV !== ENVS.prod;

export { ENV, IS_DEBUG };
