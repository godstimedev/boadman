import { IS_PRODUCTION } from './appMode';

const TEST_BASE_URL = 'http://beta-example.com/api/v1/';
const LIVE_BASE_URL = 'https://example.com/api/v1';

export const BASE_URL = IS_PRODUCTION ? LIVE_BASE_URL : TEST_BASE_URL;
