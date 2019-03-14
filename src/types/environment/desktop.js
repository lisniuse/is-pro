// is current device desktop?
const isDesktop = function () {
  return this.not.mobile() && this.not.tablet();
};

// desktop method does not support 'all' and 'any' interfaces
isDesktop.api = ['not'];

export default isDesktop;
