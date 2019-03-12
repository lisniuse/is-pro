// is current state online?
const isOnline = function () {
  return !navigator || navigator.onLine === true;
};

export default isOnline;
