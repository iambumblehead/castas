var castas = module.exports = (function (o) {

  o.bool = function (val, defval) {
    if (String(val) === 'true')  defval = true;
    if (String(val) === 'false') defval = false;    

    return Boolean(defval);    
  };

  o.arr = function (val, defval) {
    if (Array.isArray(val))      defval = val;
    if (typeof val === 'string') defval = val.split(',');

    return defval;    
  };

  o.str = function (val, defval) {
    if (/string|number|boolean/
        .test(typeof val)) defval = val;
    
    return String(defval);
  };

  o.ts = function (val, defval) {
    if (!isNaN(parseFloat(val)) && isFinite(val)) val = +val;
    if (val instanceof Date || (
        /string|number/
        .test(typeof val))) defval = (new Date(val)).getTime();

    return defval;
  };

  Object.keys(o).forEach(function (fnname) {
    o['t'+fnname] = function (val, defval) {
      return o[fnname](val || null, defval);
    };
  });

  return o;
  
}({}));
