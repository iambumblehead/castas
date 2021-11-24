// Filename: castas.js  
// Timestamp: 2017.04.23-14:09:16 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>

// module.exports = (o => {
export default (o => {
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
    else if (!Number.isNaN(Number.parseFloat(val)) && Number.isFinite(+val))
      defval = +val;

    return defval;
  };

  o.str = (val, defval) => {
    if (/string|number|boolean/.test(typeof val))
      defval = String(val);
    
    return defval;
  };

  o.ts = (val, defval) => {
    if (!Number.isNaN(Number.parseFloat(val)) && Number.isFinite(+val)) val = +val;
    if (val instanceof Date || (
        /string|number/.test(typeof val)))
      defval = (new Date(val)).getTime();

    return defval;
  };

  o.date = (val, defval) => {
    if (val instanceof Date )
      defval = val;
    else if (typeof val === 'number')
      defval = new Date( val );
    else if (typeof val === 'string') {
      if (!Number.isNaN(Number.parseFloat(val)) && Number.isFinite(+val))
        defval = new Date( +val );
      else if (!Number.isNaN(val = Date.parse(val)))
        defval = new Date(val);
    }

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
