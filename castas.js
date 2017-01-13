// Filename: castas.js  
// Timestamp: 2017.01.13-00:27:11 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>

const castas = module.exports = (o => {

  o.bool = (val, defval) => {
    if (String(val) === 'true')
      defval = true;
    else if (String(val) === 'false')
      defval = false;    

    return Boolean(defval);    
  };

  o.arr = (val, defval) => {
    if (Array.isArray(val))
      defval = val;
    else if (typeof val === 'string')
      defval = val.split(',');

    return defval;    
  };

  o.num = (val, defval) => {
    if (typeof val === 'number')
      defval = val;
    else if (!isNaN(parseFloat(val)) && isFinite(val))
      defval = +val;

    return defval;
  };

  o.str = (val, defval) => {
    if (/string|number|boolean/.test(typeof val))
      defval = val;
    
    return String(defval);
  };

  o.ts = (val, defval) => {
    if (!isNaN(parseFloat(val)) && isFinite(val)) val = +val;
    if (val instanceof Date || (
        /string|number/.test(typeof val)))
      defval = (new Date(val)).getTime();

    return defval;
  };

  
  o.boolean = o.bool;
  o.number = o.num;
  o.string = o.str;

  Object.keys(o).forEach(fnname => (
    o['t'+fnname] = (val, defval) => 
      o[fnname](val || null, defval)
  ));

  return o;
  
})({});
