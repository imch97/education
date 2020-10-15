function fullSum(...args) {
  let er="Wrong Argument Type";
  let s=0;
  if (!Array.isArray(args))  throw er;

  for (let i = 0; i < args.length; i++) {
    if (typeof args[i]!=="number") throw er;
    s=s+args[i];    
  }

  return s;
}

window.fullSum = fullSum;

export default fullSum;
