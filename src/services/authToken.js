function getAuthenicationToken() {
  if(localStorage.getItem('authToken')){
    return true;
  }else{
    return false;
  }
}
function setAuthenicationToken(token) {
  if(token){
    localStorage.setItem('authToken',token.authToken);
    localStorage.setItem('authUsername',token.authUsername);
    localStorage.setItem('authEmail',token.authEmail);
    return true;
  }
  return false;
  
}
function authDetail(){
  return{
    accessToken : localStorage.getItem('authToken'),
    authUsername : localStorage.getItem('authUsername'),
    authEmail : localStorage.getItem('authEmail'),
  }
}
function clearAuthencation(){
  localStorage.clear();
  return true;
}

function setHeader(){
  if(localStorage.getItem('authToken')){
    return {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('authToken')
    };
  }else{
    return {
      'Content-Type': 'application/json'
    };
  }
}

export default {
  getAuthenicationToken,
  setAuthenicationToken,
  authDetail,
  clearAuthencation,
  setHeader
};
