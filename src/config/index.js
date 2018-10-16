export const AUTH_DOMAIN_PREFIX = process.env.REACT_APP_AUTH_DOMAIN_PREFIX;
export const AWS_COGNITO_REGION = process.env.REACT_APP_AWS_COGNITO_REGION;
export const USER_POOL_CLIENT_ID = process.env.REACT_APP_USER_POOL_CLIENT_ID;
export const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

export const COGNITO_URL = `https://${AUTH_DOMAIN_PREFIX}.auth.${AWS_COGNITO_REGION}.amazoncognito.com`;
