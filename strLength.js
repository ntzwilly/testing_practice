const strLength = (str) => {
  if(str.length === 0 || str.length > 10){
    throw 'The string length must be between 1 and 10';
  }
  return str.length;
};

module.exports = strLength;