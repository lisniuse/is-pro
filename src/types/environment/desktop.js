// is current device desktop?
const isDesktop = function () {
  return is.not.mobile() && is.not.tablet();
};

export default isDesktop;
