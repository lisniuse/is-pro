import not from '../../core/not';

// is current state offline?
const isOffline = function(value) {
  return this.not.online(value);
}

export default isOffline;
