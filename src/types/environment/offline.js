// is current state offline?
const isOffline = function (value) {
  return this.not.online(value);
}

// offline method does not support 'all' and 'any' interfaces
isOffline.api = ['not'];

export default isOffline;
