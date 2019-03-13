import not from '../../core/not';

// is current state offline?
const isOffline = function(value) {
  return not(this.online, this)(value);
}

export default isOffline;
