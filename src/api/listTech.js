import { IS_MOCKED_SERVER, WOLOX_BASE_EP } from '../config/envSettings';
import httpUtils from '../utils/httpUtils';
import listTechMock from './__mock__/listTech.json';

async function getListTech() {
  if (IS_MOCKED_SERVER) return new Promise(resolve => resolve(listTechMock));

  return httpUtils.call(`${WOLOX_BASE_EP}/techs`, {
    method: 'get',
  });
}

export default getListTech;
