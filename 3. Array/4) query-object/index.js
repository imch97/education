function stringToType(str) {
  let type =typeof(str);
  if (str==="") return str;
  if (str.isNaN) return NaN;
  if (str=="null") return null;
  if (str=="true") return true;
  if (str=="false") return false;
  if (str=="undefined") return undefined;
  if (isNaN(str)) return str;
  if (!isNaN(str)) return +str;
};


function queryToObject(query) {
  if (query=="") return {};
  let m = [];
  query = query.substr(1,query.length);
  if (query=="") return {};
  m = query.split("&");

  for(let i = 0; i<m.length;i++){
    m[i]=m[i].split("=");
  }

  for(let i = 0; i < m.length; i++){
    m[i][1] = stringToType(m[i][1]);
  }

  let obj = Object.fromEntries(m);
  
  console.log(obj)
  return obj;
 
};

window.queryToObject = queryToObject;

export default queryToObject;
