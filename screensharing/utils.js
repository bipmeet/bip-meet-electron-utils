/* global process */

const isMac = () => process.platform === 'darwin';
const isPPTSlideShow = (windowName) => /PowerPoint.*\[.*\]/.test(windowName);

module.exports = {
  isMac,
  isPPTSlideShow
};
