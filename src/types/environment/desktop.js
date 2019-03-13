// is current device desktop?
const isDesktop = function () {
  return this.not.mobile() && this.not.tablet();
};

export default isDesktop;
