import cookie from 'cookie'

 const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies['loggedIn'] ? true : false;
};

export default checkAuth