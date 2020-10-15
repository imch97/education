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

window.stringToType = stringToType;

export default stringToType;
