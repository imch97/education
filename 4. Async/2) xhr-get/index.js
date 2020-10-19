function xhrGet(url) {
  

let xhr = new XMLHttpRequest();


xhr.open('GET', url, false);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.responseType = 'json';
xhr.send();


return new Promise ((resolve, reject) => {
  if (xhr.status >=200 && xhr.status <=299) {
    return resolve(xhr.response);
  }  
  return reject(xhr.response);
});
 
}

window.xhrGet = xhrGet;

export default xhrGet;
