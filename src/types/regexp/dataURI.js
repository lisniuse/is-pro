/**
 * 	check if the string is a data uri format. https://developer.mozilla.org/en-US/docs/Web/HTTP/data_URIs
 */

let validMediaType = /^[a-z]+\/[a-z0-9\-\+]+$/i;
let validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;
let validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;

const isDataURI = function(str) {
  let data = str.split(',');
  if (data.length < 2) {
    return false;
  }
  let attributes = data.shift().trim().split(';');
  let schemeAndMediaType = attributes.shift();
  if (schemeAndMediaType.substr(0, 5) !== 'data:') {
    return false;
  }
  let mediaType = schemeAndMediaType.substr(5);
  if (mediaType !== '' && !validMediaType.test(mediaType)) {
    return false;
  }
  for (let i = 0; i < attributes.length; i++) {
    if (i === attributes.length - 1 && attributes[i].toLowerCase() === 'base64') {// ok
    } else if (!validAttribute.test(attributes[i])) {
      return false;
    }
  }
  for (let _i = 0; _i < data.length; _i++) {
    if (!validData.test(data[_i])) {
      return false;
    }
  }
  return true;
}

export default isDataURI;
