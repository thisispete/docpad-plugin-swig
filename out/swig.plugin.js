(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  module.exports = function(BasePlugin) {
    var SwigPlugin;
    return SwigPlugin = (function(_super) {

      __extends(SwigPlugin, _super);

      function SwigPlugin() {
        return SwigPlugin.__super__.constructor.apply(this, arguments);
      }

      SwigPlugin.prototype.name = 'swig';

      SwigPlugin.prototype.render = function(opts) {
        var swig, tpl, inExtension, templateData;
        inExtension = opts.inExtension, templateData = opts.templateData;
        if (inExtension === 'swig') {
          swig = require('swig');

          var root = this.docpad.config.layoutsPaths;
          // Add the current file's path as well for locally relative swig file references
          root.push(opts.file.attributes.fullDirPath);

          swig.init({autoescape:false, root: root});
          tpl = swig.compile(opts.content);
          return opts.content = tpl(templateData);
        }
      };

      return SwigPlugin;

    })(BasePlugin);
  };

}).call(this);
