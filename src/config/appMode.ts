// Toggle to 'development' or 'production'
// Should determine the api url  to be used, either the live or test url
type AppModeType = 'production' | 'development';

const APP_MODE: AppModeType = 'production';

export const IS_PRODUCTION = APP_MODE === 'production' ? true : false;
