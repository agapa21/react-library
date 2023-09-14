export const oktaConfig = {
    clientId: '0oab16pu1qXI6O07l5d7',
    issuer: 'https://dev-62232043.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}