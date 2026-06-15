exports.handler = async (event) => {
  const clientId = process.env.OAUTH_CLIENT_ID;
  const redirectUri = `https://${event.headers.host}/callback`;
  const authorizeUrl =
    `https://github.com/login/oauth/authorize` +
    `?client_id=${clientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=repo,user`;

  return {
    statusCode: 302,
    headers: { Location: authorizeUrl },
  };
};
