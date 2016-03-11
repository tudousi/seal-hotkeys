;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jQuery', 'SealModule'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jQuery'), require('SealModule'));
  } else {
    root.SealHotkeys = factory(root.jQuery, root.SealModule);
  }
}(this, function($, Module) {
SealModule.inherit(SealHotkeys, SealModule);
function SealHotkeys() {

}
SealHotkeys.prototype.opt = {};
SealHotkeys.prototype._init = function() {

};
SealHotkeys.prototype.add = function() {

};
SealHotkeys.prototype.remove = function() {

}

return SealHotkeys;
}));
