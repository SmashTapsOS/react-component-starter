(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global = global || self, global.Name = factory(global.React));
}(this, function (React) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = "html,\nbody {\n  padding: 0;\n  margin: 0;\n  background: tan;\n  display: flex;\n  vertical-align: center;\n  align-items: center;\n}\n";
  styleInject(css);

  var css$1 = ".index-module_heading__9XLfB {\n  color: #3a3a3a;\n  font-size: 3em;\n}\n";
  var classNames = {"heading":"index-module_heading__9XLfB"};
  styleInject(css$1);

  var MyComponent = function MyComponent() {
    return React.createElement("div", {
      className: classNames.heading
    }, "Hello there");
  };

  return MyComponent;

}));
